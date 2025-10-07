'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contact() {
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
                C:\Users\Anthony_Kobzar\Contact&gt;
              </h2>
              <Link 
                href="/"
                className="text-black hover:bg-black hover:text-white border border-black px-4 py-2 text-sm font-mono transition-all"
              >
                [ESC] BACK
              </Link>
            </div>
            <div className="space-y-4 text-black font-mono">
              <a href="mailto:Anthonykobzar@berkeley.edu" className="block border border-black p-6 hover:bg-black/5 transition-all cursor-pointer">
                <p className="text-xl font-bold mb-2">&gt; EMAIL</p>
                <p className="text-base ml-4 text-black/70">Anthonykobzar@berkeley.edu</p>
              </a>
              <a href="https://github.com/AnthonyKobzar27" target="_blank" rel="noopener noreferrer" className="block border border-black p-6 hover:bg-black/5 transition-all cursor-pointer">
                <p className="text-xl font-bold mb-2">&gt; GITHUB</p>
                <p className="text-base ml-4 text-black/70">https://github.com/AnthonyKobzar27</p>
              </a>
              <a href="https://www.linkedin.com/in/anthony-kobzar-182889252/" target="_blank" rel="noopener noreferrer" className="block border border-black p-6 hover:bg-black/5 transition-all cursor-pointer">
                <p className="text-xl font-bold mb-2">&gt; LINKEDIN</p>
                <p className="text-base ml-4 text-black/70">https://www.linkedin.com/in/anthony-kobzar-182889252/</p>
              </a>
              <a href="https://twitter.com/AkCAL2706" target="_blank" rel="noopener noreferrer" className="block border border-black p-6 hover:bg-black/5 transition-all cursor-pointer">
                <p className="text-xl font-bold mb-2">&gt; TWITTER</p>
                <p className="text-base ml-4 text-black/70">@AkCAL2706</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

