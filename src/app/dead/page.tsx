'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dead() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Any key press takes you back
      router.push('/');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12 font-mono">


        {/* Terminal Output */}
        <div className="border-2 border-black p-6 bg-white space-y-2 text-sm">
          <p className="text-black font-bold">C:\Users\Anthony_Kobzar&gt; rm -rf /</p>
          <p className="text-black mt-4">Executing recursive deletion...</p>
          <p className="text-black/60">│</p>
          <p className="text-black/60">├── Removing /bin........................ [DELETED]</p>
          <p className="text-black/60">├── Removing /boot....................... [DELETED]</p>
          <p className="text-black/60">├── Removing /dev........................ [DELETED]</p>
          <p className="text-black/60">├── Removing /etc........................ [DELETED]</p>
          <p className="text-black/60">├── Removing /home....................... [DELETED]</p>
          <p className="text-black/60">├── Removing /lib........................ [DELETED]</p>
          <p className="text-black/60">├── Removing /usr........................ [DELETED]</p>
          <p className="text-black/60">├── Removing /var........................ [DELETED]</p>
          <p className="text-black/60">└── Removing /root....................... [DELETED]</p>
          <p className="text-black mt-4 font-bold">ERROR: SYSTEM CORE DESTROYED</p>
          <p className="text-black">Segmentation fault (core dumped)</p>
          <p className="text-black">Kernel panic - not syncing: Fatal exception in interrupt</p>
          <p className="text-black">Failed to allocate memory at address 0x12d27f06</p>
        </div>

        {/* Reboot Instructions */}
        <div className="text-center">
          <div className="inline-block border border-black px-6 py-3 animate-pulse">
            <p className="text-black font-bold text-sm">PRESS ANY KEY TO REBOOT SYSTEM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

