import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="night"]'],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary':    'var(--bg-primary)',
        'bg-secondary':  'var(--bg-secondary)',
        'bg-tertiary':   'var(--bg-tertiary)',
        'bg-glass':      'var(--bg-glass)',
        // Text
        'text-primary':  'var(--text-primary)',
        'text-secondary':'var(--text-secondary)',
        'text-muted':    'var(--text-muted)',
        'text-faint':    'var(--text-faint)',
        // Accents
        'saffron':       'var(--accent-saffron)',
        'moss':          'var(--accent-moss)',
        'moonblue':      'var(--accent-moonblue)',
        'mauve':         'var(--accent-mauve)',
        'terra':         'var(--accent-terra)',
        'gold':          'var(--accent-gold)',
        // Borders
        'border-default':'var(--border-default)',
        'border-hover':  'var(--border-hover)',
        'border-strong': 'var(--border-strong)',
        // Room colors
        'room-aarambh':  'var(--room-aarambh)',
        'room-agni':     'var(--room-agni)',
        'room-sukoon':   'var(--room-sukoon)',
        'room-srot':     'var(--room-srot)',
        'room-kathakar': 'var(--room-kathakar)',
        'room-samvaad':  'var(--room-samvaad)',
        'room-manthan':  'var(--room-manthan)',
        'room-darshan':  'var(--room-darshan)',
        'room-neurolab': 'var(--room-neurolab)',
        'room-cosmos':   'var(--room-cosmos)',
        'room-bodh':     'var(--room-bodh)',
        'room-duniya':   'var(--room-duniya)',
        'room-aranya':   'var(--room-aranya)',
        'room-neelakurinji':'var(--room-neelakurinji)',
        'room-vibhav':   'var(--room-vibhav)',
        'room-riyaz':    'var(--room-riyaz)',
        'room-safar':    'var(--room-safar)',
        'room-bharati':  'var(--room-bharati)',
        'room-rangeen':  'var(--room-rangeen)',
        'room-noor':     'var(--room-noor)',
        'room-antarman': 'var(--room-antarman)',
        'room-bargad':   'var(--room-bargad)',
      },
      fontFamily: {
        sans:        ['DM Sans', 'system-ui', 'sans-serif'],
        serif:       ['Cormorant Garamond', 'Georgia', 'serif'],
        devanagari:  ['Noto Serif Devanagari', 'serif'],
        nastaliq:    ['Noto Nastaliq Urdu', 'serif'],
      },
      borderRadius: {
        'card-lg':  '16px',
        'card-sm':  '12px',
        'btn':      '10px',
        'badge':    '8px',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      animation: {
        'breathe':       'breathe 4s ease-in-out infinite',
        'flicker':       'flicker-flame 2s ease-in-out infinite',
        'bloom':         'bloom-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float':         'float 3s ease-in-out infinite',
        'star-twinkle':  'star-twinkle 2s ease-in-out infinite',
        'shimmer':       'skeleton-shimmer 2s linear infinite',
        'pulse-ring':    'pulse-ring 1.5s ease-out infinite',
        'streak-grow':   'streak-grow 0.5s ease-out forwards',
        'fade-in-up':    'fade-in-up 0.2s ease-out forwards',
        'page-enter':    'page-enter 0.2s ease-out forwards',
      },
      keyframes: {
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.08)' },
        },
        'flicker-flame': {
          '0%, 100%': { transform: 'scaleY(1) rotate(-1deg)' },
          '50%':      { transform: 'scaleY(1.06) rotate(1deg)' },
        },
        'bloom-reveal': {
          'from': { opacity: '0', transform: 'scale(0.6)' },
          'to':   { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        'skeleton-shimmer': {
          'from': { backgroundPosition: '200% 0' },
          'to':   { backgroundPosition: '-200% 0' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'streak-grow': {
          'from': { strokeDashoffset: '283' },
          'to':   { strokeDashoffset: 'var(--target-offset, 0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        'page-enter': {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
