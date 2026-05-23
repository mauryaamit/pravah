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
  title: 'Pravah - प्रवाह',
  description: 'A cognitive operating system for an evolving mind. Daily brain-rewiring through beauty, curiosity, and depth.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pravah',
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pravah" />
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
