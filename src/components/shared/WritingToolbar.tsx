'use client';
import React, { useEffect, useState } from 'react';
import { Bold, Italic, Underline, List, Link as LinkIcon, Minus, Mic, MicOff } from 'lucide-react';

interface WritingToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>;
  onCommand: (command: string, value?: string) => void;
  isMobile?: boolean;
  scriptPreference?: 'devanagari' | 'roman';
  onEditorInput?: () => void;
}

export default function WritingToolbar({ 
  editorRef, 
  onCommand, 
  isMobile = false,
  scriptPreference = 'roman',
  onEditorInput
}: WritingToolbarProps) {
  const [activeStates, setActiveStates] = useState({
    bold: false,
    italic: false,
    underline: false,
    list: false,
  });

  const [isRecording, setIsRecording] = useState(false);
  const [speechLang, setSpeechLang] = useState<'hi-IN' | 'en-IN'>('en-IN');
  const [recognition, setRecognition] = useState<any>(null);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Speech = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      setHasSpeechSupport(!!Speech);
    }
  }, []);

  useEffect(() => {
    setSpeechLang(scriptPreference === 'devanagari' ? 'hi-IN' : 'en-IN');
  }, [scriptPreference]);

  const checkCommandStates = () => {
    if (typeof document === 'undefined') return;
    setActiveStates({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      list: document.queryCommandState('insertUnorderedList'),
    });
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      if (editorRef.current && editorRef.current.contains(document.activeElement)) {
        checkCommandStates();
      }
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [editorRef]);

  const handleLinkClick = () => {
    const url = prompt('Enter the link URL:');
    if (url) {
      let formattedUrl = url;
      if (!/^https?:\/\//i.test(url)) {
        formattedUrl = 'https://' + url;
      }
      onCommand('createLink', formattedUrl);
    }
  };

  const buttonClass = (isActive: boolean) => `
    p-1.5 rounded transition-all hover:bg-[var(--bg-tertiary)]
    ${isActive ? 'text-[var(--accent-saffron)] bg-[var(--bg-tertiary)]' : 'text-[var(--text-muted)]'}
  `;

  const triggerCommand = (cmd: string, val: string = '') => {
    onCommand(cmd, val);
    setTimeout(checkCommandStates, 50);
  };

  const toggleRecording = () => {
    if (isRecording) {
      if (recognition) {
        recognition.stop();
      }
      setIsRecording(false);
    } else {
      const Speech = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!Speech) return;

      const rec = new Speech();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = speechLang;

      rec.onstart = () => {
        setIsRecording(true);
        if (editorRef.current) {
          editorRef.current.focus();
        }
      };

      rec.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        if (editorRef.current) {
          const existingInterim = editorRef.current.querySelector('#voice-interim');
          if (existingInterim) {
            existingInterim.remove();
          }

          if (finalTranscript) {
            // Restore selection or append
            const textToInsert = finalTranscript + ' ';
            document.execCommand('insertText', false, textToInsert);
          }

          if (interimTranscript) {
            const span = document.createElement('span');
            span.id = 'voice-interim';
            span.style.color = 'var(--text-muted)';
            span.style.opacity = '0.6';
            span.style.fontStyle = 'italic';
            span.textContent = interimTranscript;

            const sel = window.getSelection();
            if (sel && sel.rangeCount > 0) {
              const range = sel.getRangeAt(0);
              range.insertNode(span);
              range.setStartAfter(span);
              range.setEndAfter(span);
              sel.removeAllRanges();
              sel.addRange(range);
            } else {
              editorRef.current.appendChild(span);
            }
          }
          onEditorInput?.();
        }
      };

      rec.onerror = (e: any) => {
        console.error('Speech recognition error:', e);
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
        if (editorRef.current) {
          const existingInterim = editorRef.current.querySelector('#voice-interim');
          if (existingInterim) {
            existingInterim.remove();
          }
          onEditorInput?.();
        }
      };

      rec.start();
      setRecognition(rec);
    }
  };

  return (
    <div
      className={`
        flex items-center gap-1 p-1 border rounded-lg shadow-sm backdrop-blur-md
        ${isMobile 
          ? 'fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg-secondary)] border-[var(--border-default)] w-[90%] max-w-sm justify-around shadow-lg' 
          : 'bg-[var(--bg-secondary)] border-[var(--border-default)] w-max'
        }
      `}
    >
      <button
        type="button"
        onClick={() => triggerCommand('bold')}
        className={buttonClass(activeStates.bold)}
        title="Bold (Cmd+B / Ctrl+B)"
      >
        <Bold size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('italic')}
        className={buttonClass(activeStates.italic)}
        title="Italic (Cmd+I / Ctrl+I)"
      >
        <Italic size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('underline')}
        className={buttonClass(activeStates.underline)}
        title="Underline (Cmd+U / Ctrl+U)"
      >
        <Underline size={16} />
      </button>

      <div className="w-[1px] h-4 bg-[var(--border-default)] mx-1" />

      <button
        type="button"
        onClick={() => triggerCommand('insertUnorderedList')}
        className={buttonClass(activeStates.list)}
        title="Bullet List"
      >
        <List size={16} />
      </button>

      <button
        type="button"
        onClick={handleLinkClick}
        className={buttonClass(false)}
        title="Add Link"
      >
        <LinkIcon size={16} />
      </button>

      <button
        type="button"
        onClick={() => triggerCommand('insertHTML', '<p>* * *</p>')}
        className={buttonClass(false)}
        title="Scene Divider"
      >
        <Minus size={16} />
      </button>

      {hasSpeechSupport && (
        <>
          <div className="w-[1px] h-4 bg-[var(--border-default)] mx-1" />
          
          <button
            type="button"
            onClick={toggleRecording}
            className={`
              p-1.5 rounded transition-all hover:bg-[var(--bg-tertiary)] flex items-center justify-center
              ${isRecording ? 'text-amber-500 bg-[var(--bg-tertiary)] animate-pulse' : 'text-[var(--text-muted)]'}
            `}
            title={isRecording ? 'Stop Voice Entry' : 'Start Voice Entry'}
          >
            {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setSpeechLang(prev => prev === 'hi-IN' ? 'en-IN' : 'hi-IN')}
            className="px-1.5 py-0.5 rounded text-[9px] font-bold border border-[var(--border-default)] text-[var(--text-muted)] hover:bg-[var(--bg-tertiary)] transition-all uppercase"
            title="Switch Language"
          >
            {speechLang === 'hi-IN' ? 'हि' : 'EN'}
          </button>
        </>
      )}
    </div>
  );
}

