'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function Builds() {
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
                C:\Users\Anthony_Kobzar\Builds&gt;
              </h2>
              <Link 
                href="/"
                className="text-black hover:bg-black hover:text-white border border-black px-4 py-2 text-sm font-mono transition-all"
              >
                [ESC] BACK
              </Link>
            </div>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-mono">Web3 DApp Platform</CardTitle>
                    <CardDescription className="font-mono">
                      Decentralized application for crypto transactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black/80 font-mono mb-3">
                      Built a full-stack decentralized platform with smart contract integration and wallet connectivity.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="font-mono border-black">Web3</Badge>
                      <Badge variant="outline" className="font-mono border-black">Solidity</Badge>
                      <Badge variant="outline" className="font-mono border-black">React</Badge>
                    </div>
                    <Button variant="outline" className="font-mono border-black w-full" size="sm">
                      View Project →
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-mono">Terminal Portfolio Site</CardTitle>
                    <CardDescription className="font-mono">
                      Interactive terminal-style personal website
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black/80 font-mono mb-3">
                      Created a unique portfolio experience with keyboard navigation and command-line aesthetics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="font-mono border-black">Next.js</Badge>
                      <Badge variant="outline" className="font-mono border-black">TypeScript</Badge>
                      <Badge variant="outline" className="font-mono border-black">TailwindCSS</Badge>
                    </div>
                    <Button variant="outline" className="font-mono border-black w-full" size="sm">
                      You&apos;re here! ✓
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Separator className="bg-black/20" />

              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="font-mono">AI Chat Interface</CardTitle>
                  <CardDescription className="font-mono">
                    Custom chatbot with advanced NLP capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black/80 font-mono mb-3">
                    Developed an intelligent conversational agent using transformer models with context awareness and multi-turn dialogue.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="font-mono border-black">Python</Badge>
                    <Badge variant="outline" className="font-mono border-black">PyTorch</Badge>
                    <Badge variant="outline" className="font-mono border-black">FastAPI</Badge>
                    <Badge variant="outline" className="font-mono border-black">WebSocket</Badge>
                  </div>
                  <Button variant="outline" className="font-mono border-black w-full" size="sm">
                    View Project →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

