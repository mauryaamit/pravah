'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Mail, KeyRound, User as UserIcon } from 'lucide-react';
import { useUser } from '@/components/providers/UserProvider';
import { auth, db } from '@/lib/firebase/client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { DEFAULT_PREFERENCES } from '@/types/user';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const { setUser } = useUser();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (!auth) throw new Error('Firebase Auth client is not initialized');
      if (!db) throw new Error('Firestore client is not initialized');

      // 1. Create Auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const uid = userCredential.user.uid;

      // 2. Initialize Firestore user profile document
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, {
        name: name.trim(),
        email: email.trim(),
        createdAt: serverTimestamp(),
        preferences: DEFAULT_PREFERENCES,
      });

      // 3. Establish session cookie blockingly
      const idToken = await userCredential.user.getIdToken();
      const res = await fetch('/api/user/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to establish secure session.');

      setUser(data.user);
      router.push('/onboarding'); // Redirect new users to onboarding
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        if (err.message.includes('auth/email-already-in-use')) {
          setError('An account with this email already exists.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Something went wrong during registration.');
      }
    } finally {
      setLoading(false);
    }
  };

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
        <p className="font-devanagari text-xs" style={{ color: 'var(--text-muted)' }}>प्रवाह - अपनी यात्रा शुरू करें</p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        onSubmit={handleSignup}
        className="space-y-4"
      >
        <div>
          <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
            Name
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="What shall we call you?"
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
            />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
            Password
          </label>
          <div className="relative">
            <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
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

        <div>
          <label className="block text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
            Confirm Password
          </label>
          <div className="relative">
            <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4" style={{ color: 'var(--text-faint)' }} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
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
              onClick={() => setShowConfirmPassword(v => !v)}
              className="absolute right-3 top-3.5 p-0.5 rounded text-text-muted hover:text-text-primary"
              style={{ color: 'var(--text-muted)' }}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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
          {loading ? 'Registering...' : 'Create Account'}
          {!loading && <ArrowRight size={16} />}
        </button>

        <div className="text-center pt-2">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <Link href="/login" className="font-semibold hover:underline" style={{ color: 'var(--accent-saffron)' }}>
              Log in
            </Link>
          </span>
        </div>
      </motion.form>
    </div>
  );
}
