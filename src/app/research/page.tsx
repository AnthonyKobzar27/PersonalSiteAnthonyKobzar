'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-mono">AI Robotics Research</CardTitle>
                    <CardDescription className="font-mono">
                      Exploring autonomous systems and robotic learning
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black/80 font-mono mb-3">
                      Working on cutting-edge robotics projects focusing on autonomous navigation and machine learning applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="font-mono border-black">Robotics</Badge>
                      <Badge variant="outline" className="font-mono border-black">Deep Learning</Badge>
                      <Badge variant="outline" className="font-mono border-black">AI</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="font-mono">Natural Language Processing</CardTitle>
                    <CardDescription className="font-mono">
                      Research in language models and understanding
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black/80 font-mono mb-3">
                      Investigating novel approaches to language understanding and generation with transformer architectures.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="font-mono border-black">NLP</Badge>
                      <Badge variant="outline" className="font-mono border-black">Transformers</Badge>
                      <Badge variant="outline" className="font-mono border-black">LLMs</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Separator className="bg-black/20" />

              <Card className="border-black">
                <CardHeader>
                  <CardTitle className="font-mono">Post-Quantum Cryptography</CardTitle>
                  <CardDescription className="font-mono">
                    Exploring quantum-resistant cryptographic systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black/80 font-mono mb-3">
                    Researching lattice-based cryptography and quantum-resistant algorithms to secure future communications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="font-mono border-black">Cryptography</Badge>
                    <Badge variant="outline" className="font-mono border-black">Quantum Computing</Badge>
                    <Badge variant="outline" className="font-mono border-black">Security</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

