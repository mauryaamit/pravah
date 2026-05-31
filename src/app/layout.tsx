import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';
import '@/styles/animations.css';
import '@/styles/typography.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { AudioProvider } from '@/components/providers/AudioProvider';
import { UserProvider } from '@/components/providers/UserProvider';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { MoodProvider } from '@/components/providers/MoodProvider';
import { ReadingModeProvider } from '@/lib/contexts/ReadingModeContext';
import ReadingMode from '@/components/layout/ReadingMode';

export const metadata: Metadata = {
  title: 'Pravah — प्रवाह',
  description: 'A cognitive sanctuary for philosophy, poetry, learning, and reflection.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pravah',
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192x192.png',  sizes: '192x192', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
    { media: '(prefers-color-scheme: dark)',  color: '#141210' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pravah" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#F5F0E8" />
        <meta name="msapplication-TileColor" content="#F5F0E8" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
      </head>
      <body>
        <QueryProvider>
          <ThemeProvider>
            <AudioProvider>
              <MoodProvider>
                <ReadingModeProvider>
                  <UserProvider>
                    {children}
                    {/* Reading mode overlay lives here, above all content */}
                    <ReadingMode />
                  </UserProvider>
                </ReadingModeProvider>
              </MoodProvider>
            </AudioProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
