'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Research() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      
      {/* Scanlines */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-5"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
           }} />

      {/* Main Content - Full Screen */}
      <div className="relative z-10 h-screen overflow-auto custom-scrollbar p-8 sm:p-12 md:p-16 lg:p-20">
        <div>
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-black tracking-widest">
                C:\Users\Anthony_Kobzar\Research&gt;
              </h2>
              <Link 
                href="/"
                className="text-black hover:bg-black hover:text-white border border-black px-4 py-2 text-sm font-mono transition-all"
              >
                [ESC] BACK
              </Link>
            </div>
            <div className="space-y-4 text-black text-xl">
              In progress :/
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

