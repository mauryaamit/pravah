import type { ReactNode } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import MobileNav from '@/components/layout/MobileNav';
import RoomShell from '@/components/layout/RoomShell';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Desktop sidebar — fixed, 252px expanded, 64px collapsed */}
      <Sidebar />

      {/* Main area — on desktop, offset by sidebar width via CSS var set by Sidebar */}
      <div
        className="flex-1 flex flex-col overflow-hidden min-w-0 lg:ml-[var(--sidebar-width)] transition-[margin-left] duration-200 ease-in-out"
        id="app-main"
      >
        <Topbar />
        <main
          className="flex-1 overflow-y-auto"
          style={{
            paddingTop: 'var(--topbar-height)',
            paddingBottom: 'var(--mobile-nav-height)',
          }}
        >
          <RoomShell>
            {children}
          </RoomShell>
        </main>
      </div>
      <MobileNav />
    </div>
  );
}
