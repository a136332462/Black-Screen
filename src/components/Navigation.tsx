'use client'

import { useI18n } from './I18nProvider'
import LanguageSwitcher from './LanguageSwitcher'
import { Footer } from './Footer'
import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

export function NavigationLayout({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false);
    
    // Listen to scroll events to change navigation bar style
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        let mounted = true;
        import('../../public/scripts/webgl-tail').then((mod) => {
            if (canvasRef.current && mounted) {
                mod.initMouseTail(canvasRef.current);
                // Ensure canvas element can receive mouse events
                canvasRef.current.style.pointerEvents = 'auto';
            }
        });
        return () => {
            mounted = false;
        };
    }, [canvasRef]);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
                <canvas ref={canvasRef} className="w-full h-full bg-transparent" />
            </div>
            <header className={`fixed top-0 w-full z-40 px-4 py-2 transition-all duration-300 ${
                scrolled 
                    ? 'bg-black/70 backdrop-blur-md border-b border-[#3A6FF8]/20 shadow-lg' 
                    : 'bg-black/30 backdrop-blur-sm'
            }`}>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href={`/`} className="inline-block font-bold text-2xl group relative">
                                <span className="text-[#3A6FF8] group-hover:text-white transition-colors duration-300">Black</span>
                                <span className="text-white group-hover:text-[#3A6FF8] transition-colors duration-300">Screen</span>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3A6FF8] group-hover:w-full transition-all duration-300"></div>
                            </Link>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center space-x-4">
                                <Link href="/cool-themes" target="_blank"className="text-[#B0B3B8] hover:text-white transition-colors text-sm px-3 py-2 rounded hover:bg-[#1A1A1A] border border-transparent hover:border-[#3A6FF8]/20 relative group">
                                    Cool Themes
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3A6FF8] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                                <Link href="/clock-themes" target="_blank" className="text-[#B0B3B8] hover:text-white transition-colors text-sm px-3 py-2 rounded hover:bg-[#1A1A1A] border border-transparent hover:border-[#3A6FF8]/20 relative group">
                                    Clock Themes
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3A6FF8] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow pt-24 md:pt-20">
                {children}
            </main>
            <Footer />
        </div>
    )
}
