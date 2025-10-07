'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [highlightedMenuItem, setHighlightedMenuItem] = useState(0);
  const [showTerminalInput, setShowTerminalInput] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const router = useRouter();

  const menuItems = [
    { id: 0, label: '> RESEARCH', href: '/research' },
    { id: 1, label: '> BUILDS', href: '/builds' },
    { id: 2, label: '> CONTACT', href: '/contact' }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+C to open terminal input
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        setShowTerminalInput(true);
        return;
      }

      // Don't handle other keys when terminal input is active
      if (showTerminalInput) {
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedMenuItem((prev) => (prev > 0 ? prev - 1 : 2));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedMenuItem((prev) => (prev < 2 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        router.push(menuItems[highlightedMenuItem].href);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [highlightedMenuItem, router, showTerminalInput]);


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
          <div className="flex flex-col min-h-[calc(100vh-8rem)]">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-black mb-8 tracking-wider">
                C:\Users\Anthony_Kobzar
              </h1>
              <h2 className="text-lg font-mono text-black">
                Howdy! Welcome to my landing page, I'm Anthony, I'm currently a sophomore at UC Berkeley studying Math & Computer Science, outside of class I'm involved / interested in AI Research (Robotics & NLP), Web3 + Crypto, Post-Quantum Cryptography, and Building spontaneous things. Love to talk about fishing, Russian literature, rugby, Chelsea FC, and travel - thanks for visiting!
              </h2>
              <div className="text-lg space-y-2 font-mono text-black">
                <p className="mb-6">SELECT AN OPTION:</p>
                <div className="flex flex-col items-start space-y-1">
                  {menuItems.map((item, index) => (
                    <Link 
                      key={item.id}
                      href={item.href}
                      onMouseEnter={() => setHighlightedMenuItem(index)}
                      className={`transition-all py-2 px-4 ${
                        highlightedMenuItem === index
                          ? 'bg-black text-white'
                          : 'text-black hover:bg-black/5'
                      }`}
                    >
                      {highlightedMenuItem === index ? ' ' : '  '}{item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Terminal Input */}
              {showTerminalInput && (
                <div className="mt-8 font-mono text-black">
                  <div className="flex items-center gap-2">
                    <span className="text-black">&gt;</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          e.stopPropagation();
                          if (terminalInput.trim() === 'rm -rf /') {
                            window.location.href = '/dead';
                          } else {
                            setTerminalInput('');
                            setShowTerminalInput(false);
                          }
                        } else if (e.key === 'Escape') {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowTerminalInput(false);
                          setTerminalInput('');
                        }
                      }}
                      className="flex-1 bg-transparent border-none outline-none text-black font-mono"
                      placeholder="Type command..."
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-auto pt-12 text-black/60 text-sm font-mono border-t border-black/20 pt-6">
              <p>SYSTEM: READY</p>
              <p>USER: ANTHONY KOBZAR</p>
              <p>ROLE: AI RESEARCHER | STUDENT | BUILDER</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Guide - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 bg-white/95 border border-black p-3 font-mono text-xs text-black">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold">↑↓</span>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Enter</span>
            <span>Select</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Ctrl+C</span>
            <span>Hack</span>
          </div>
        </div>
      </div>
    </div>
  );
}
