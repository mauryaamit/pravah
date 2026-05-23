'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { auth } from '@/lib/firebase/client';
import { signInWithCustomToken } from 'firebase/auth';

function LoginForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError('Please tell us your name.'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/user/login-or-create', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      if (data.customToken && auth) {
        await signInWithCustomToken(auth, data.customToken);
      } else if (!auth) {
        throw new Error('Firebase Auth client is not initialized');
      }

      setUser(data.user);
      const from = searchParams.get('from');
      if (data.isNewUser) {
        router.push('/onboarding');
      } else {
        router.push(from || '/aarambh');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="What shall we call you?"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
          }}
          onFocus={e => (e.target.style.borderColor = 'var(--accent-saffron)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border-default)')}
          autoFocus
        />
      </div>
      <div>
        <label className="block text-sm mb-1.5" style={{ color: 'var(--text-secondary)' }}>
          Email <span style={{ color: 'var(--text-faint)' }}>(optional)</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="For returning to your data"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
          }}
          onFocus={e => (e.target.style.borderColor = 'var(--accent-saffron)')}
          onBlur={e => (e.target.style.borderColor = 'var(--border-default)')}
        />
      </div>
      {error && (
        <p className="text-sm" style={{ color: 'var(--room-agni)' }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-white"
        style={{
          background: loading ? 'var(--text-faint)' : 'var(--accent-saffron)',
          boxShadow: loading ? 'none' : '0 4px 16px rgba(196,135,58,0.35)',
        }}
      >
        {loading ? 'Entering...' : 'Begin your journey'}
        {!loading && <ArrowRight size={16} />}
      </button>
    </motion.form>
  );
}

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm px-6">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
          style={{ background: 'var(--accent-saffron)', boxShadow: '0 8px 32px rgba(196,135,58,0.3)' }}
        >
          प्र
        </div>
        <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--text-primary)' }}>Pravah</h1>
        <p className="font-devanagari text-sm" style={{ color: 'var(--text-muted)' }}>प्रवाह — अपनी यात्रा शुरू करें</p>
      </motion.div>

      {/* Form wrapped in Suspense for useSearchParams */}
      <Suspense fallback={
        <div className="space-y-4">
          <div className="h-12 rounded-xl" style={{ background: 'var(--bg-secondary)' }} />
          <div className="h-12 rounded-xl" style={{ background: 'var(--bg-secondary)' }} />
          <div className="h-12 rounded-xl" style={{ background: 'var(--bg-tertiary)' }} />
        </div>
      }>
        <LoginForm />
      </Suspense>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs mt-6"
        style={{ color: 'var(--text-faint)' }}
      >
        Your data is securely synced to the cloud.
      </motion.p>
    </div>
  );
}
