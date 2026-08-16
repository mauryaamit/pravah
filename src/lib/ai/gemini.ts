// src/lib/ai/gemini.ts
// Shared Gemini API client for Pravah's AI-powered features.
// Reads GEMINI_API_KEY from environment. All calls use gemini-1.5-flash
// for speed and cost efficiency. Includes retry with exponential backoff.

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const MODEL = 'gemini-1.5-flash';
const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;

export interface GeminiResponse {
  text: string;
  promptTokens?: number;
  outputTokens?: number;
}

export class GeminiError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly raw?: unknown
  ) {
    super(message);
    this.name = 'GeminiError';
  }
}

/**
 * Get the Gemini API key from environment variables.
 * Supports multiple common env var names.
 */
export function getGeminiApiKey(): string | undefined {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    process.env.GOOGLE_AI_API_KEY
  );
}

/**
 * Verify the Gemini API key is present and working by making a minimal test call.
 * Returns a result object — never throws.
 */
export async function verifyGeminiKey(): Promise<{
  valid: boolean;
  model: string;
  latencyMs: number;
  error?: string;
}> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    return {
      valid: false,
      model: MODEL,
      latencyMs: 0,
      error: 'No API key found. Set GEMINI_API_KEY in .env.local',
    };
  }

  const start = Date.now();
  try {
    const text = await callGemini('Say "OK" in one word.', { maxOutputTokens: 10 });
    return {
      valid: true,
      model: MODEL,
      latencyMs: Date.now() - start,
    };
  } catch (err: any) {
    return {
      valid: false,
      model: MODEL,
      latencyMs: Date.now() - start,
      error: err.message || 'Unknown error',
    };
  }
}

/**
 * Call the Gemini API with a text prompt.
 * Automatically retries on 429 (rate limit) and 5xx errors with exponential backoff.
 */
export async function callGemini(
  prompt: string,
  options: {
    temperature?: number;
    maxOutputTokens?: number;
    systemInstruction?: string;
  } = {}
): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new GeminiError('Gemini API key not configured. Set GEMINI_API_KEY in .env.local');
  }

  const { temperature = 0.7, maxOutputTokens = 2048, systemInstruction } = options;

  const url = `${GEMINI_API_BASE}/${MODEL}:generateContent?key=${apiKey}`;

  const body: Record<string, unknown> = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature,
      maxOutputTokens,
    },
  };

  if (systemInstruction) {
    body.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      const delay = BASE_DELAY_MS * Math.pow(2, attempt - 1);
      await sleep(delay);
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.status === 429 || response.status >= 500) {
        // Retryable errors
        const text = await response.text();
        lastError = new GeminiError(
          `HTTP ${response.status}: ${text.slice(0, 200)}`,
          response.status
        );
        continue;
      }

      if (!response.ok) {
        const text = await response.text();
        throw new GeminiError(
          `Gemini API error ${response.status}: ${text.slice(0, 500)}`,
          response.status
        );
      }

      const data = await response.json();
      const candidate = data?.candidates?.[0];
      const content = candidate?.content?.parts?.[0]?.text;

      if (!content) {
        const reason = candidate?.finishReason;
        throw new GeminiError(
          `No text in response. finishReason: ${reason || 'unknown'}`,
          200,
          data
        );
      }

      return content as string;
    } catch (err: any) {
      if (err instanceof GeminiError && err.statusCode !== 429 && (err.statusCode || 0) < 500) {
        throw err; // Non-retryable
      }
      lastError = err;
    }
  }

  throw lastError || new GeminiError('Max retries exceeded');
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
