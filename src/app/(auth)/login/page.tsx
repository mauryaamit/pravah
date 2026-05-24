'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Mail, KeyRound, Check } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { auth } from '@/lib/firebase/client';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Forgot password flow states
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');
  const [resetLoading, setResetLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }
    setLoading(true);
    setError('');

    try {
      if (!auth) throw new Error('Firebase Auth client is not initialized');
      
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      
      // Explicitly wait for the session cookie to sync with server before navigating
      const idToken = await userCredential.user.getIdToken();
      const res = await fetch('/api/user/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to establish secure session.');

      setUser(data.user);
      const from = searchParams.get('from');
      router.push(from || '/aarambh');
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        if (err.message.includes('auth/invalid-credential') || err.message.includes('auth/user-not-found') || err.message.includes('auth/wrong-password')) {
          setError('Invalid email or password.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Something went wrong during login.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      setError('Please tell us your email address.');
      return;
    }
    setResetLoading(true);
    setError('');
    setResetSuccess('');

    try {
      if (!auth) throw new Error('Firebase Auth client is not initialized');
      await sendPasswordResetEmail(auth, resetEmail.trim());
      setResetSuccess('Reset link sent! Please check your inbox.');
      setResetEmail('');
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to send password reset email.');
    } finally {
      setResetLoading(false);
    }
  };

  if (isForgotMode) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
              Password Recovery Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
              <input
                type="email"
                value={resetEmail}
                onChange={e => setResetEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
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
          </div>

          {error && (
            <p className="text-sm" style={{ color: 'var(--room-agni)' }}>{error}</p>
          )}

          {resetSuccess && (
            <div className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{ background: 'color-mix(in srgb, var(--accent-moss) 12%, var(--bg-secondary))', color: 'var(--accent-moss)' }}>
              <Check size={16} />
              <span>{resetSuccess}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={resetLoading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-white"
            style={{
              background: resetLoading ? 'var(--text-faint)' : 'var(--accent-saffron)',
              boxShadow: resetLoading ? 'none' : '0 4px 16px rgba(196,135,58,0.25)',
            }}
          >
            {resetLoading ? 'Sending...' : 'Send Reset Link'}
            {!resetLoading && <ArrowRight size={16} />}
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => { setIsForgotMode(false); setError(''); setResetSuccess(''); }}
            className="text-xs font-medium hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            Back to login
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleLogin}
      className="space-y-4"
    >
      <div>
        <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
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
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-secondary)' }}>
            Password
          </label>
          <button
            type="button"
            onClick={() => { setIsForgotMode(true); setError(''); }}
            className="text-xs hover:underline"
            style={{ color: 'var(--text-muted)' }}
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-3 rounded-xl text-sm outline-none transition-all"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
            }}
            onFocus={e => (e.target.style.borderColor = 'var(--accent-saffron)')}
            onBlur={e => (e.target.style.borderColor = 'var(--border-default)')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(v => !v)}
            className="absolute right-3 top-3.5 p-0.5 rounded text-text-muted hover:text-text-primary"
            style={{ color: 'var(--text-muted)' }}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
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
          boxShadow: loading ? 'none' : '0 4px 16px rgba(196,135,58,0.25)',
        }}
      >
        {loading ? 'Entering...' : 'Begin your journey'}
        {!loading && <ArrowRight size={16} />}
      </button>

      <div className="text-center pt-2">
        <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold hover:underline" style={{ color: 'var(--accent-saffron)' }}>
            Create one
          </Link>
        </span>
      </div>
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
        className="text-center mb-8"
      >
        <img 
          src="/logo.png" 
          alt="Pravah Logo" 
          className="w-24 h-24 object-contain rounded-3xl mx-auto mb-4" 
          style={{ boxShadow: '0 12px 48px rgba(196,135,58,0.25), 0 4px 16px rgba(0,0,0,0.15)' }}
        />
        <h1 className="font-serif text-3xl mb-1" style={{ color: 'var(--text-primary)' }}>Pravah</h1>
        <p className="font-devanagari text-xs" style={{ color: 'var(--text-muted)' }}>प्रवाह — अपनी यात्रा शुरू करें</p>
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
    </div>
  );
}
