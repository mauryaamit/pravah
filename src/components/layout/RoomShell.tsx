'use client';
import { useEffect, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ROOMS } from '@/lib/constants/rooms';
import { useAudio } from '@/components/providers/AudioProvider';

interface RoomShellProps {
  children: ReactNode;
}

export default function RoomShell({ children }: RoomShellProps) {
  const pathname = usePathname();
  const { setRoom } = useAudio();
  const room = ROOMS.find(r => pathname.startsWith(r.route));

  // Switch ambient sound when room changes
  useEffect(() => {
    if (room?.id) setRoom(room.id);
  }, [room?.id, setRoom]);

  return (
    <div
      style={{
        // Set the active room color as a CSS variable for all children
        ['--room-current' as string]: room?.colorHex || 'var(--accent-saffron)',
      }}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}
