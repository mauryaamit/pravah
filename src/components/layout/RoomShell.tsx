'use client';
import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ROOMS } from '@/lib/constants/rooms';
import { useAudio } from '@/components/providers/AudioProvider';
import { useUser } from '@/components/providers/UserProvider';
import { BACKGROUND_PAINTINGS } from '@/lib/constants/paintings';

interface RoomShellProps {
  children: ReactNode;
}

export default function RoomShell({ children }: RoomShellProps) {
  const pathname = usePathname();
  const { setRoom } = useAudio();
  const { preferences } = useUser();
  const room = ROOMS.find(r => pathname.startsWith(r.route));

  // Switch ambient sound when room changes
  useEffect(() => {
    if (room?.id) setRoom(room.id);
  }, [room?.id, setRoom]);

  const paintingId = preferences?.backgroundPainting || 'starry-night';
  const opacity = preferences?.backgroundOpacity !== undefined ? preferences.backgroundOpacity : 0.07;
  const selectedPainting = BACKGROUND_PAINTINGS.find(p => p.id === paintingId) || BACKGROUND_PAINTINGS[0];

  return (
    <div
      style={{
        // Set the active room color as a CSS variable for all children
        ['--room-current' as string]: room?.colorHex || 'var(--accent-saffron)',
      }}
      className="relative min-h-screen"
    >
      {/* Background painting — always rendered, opacity controlled by user */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: opacity }}
      >
        <img
          src={selectedPainting.file}
          alt={selectedPainting.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Room content above painting */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
