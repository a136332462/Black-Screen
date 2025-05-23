'use client'

import Link from 'next/link'
import { NavigationLayout } from '../components/Navigation'
import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={<div aria-live="polite">Loading...</div>}>
      <NavigationLayout>
        <main className="pt-20 pb-16 min-h-screen max-w-[854px] mx-auto px-4 md:px-6" role="main">
          <div className="max-w-content mx-auto px-6">
            <section className="py-16">
              <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                
                <h1 className="text-4xl font-semibold text-center text-white mb-4 relative">
                  <span className="text-[#3A6FF8]">404</span> - Page Not Found
                  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2" aria-hidden="true"></div>
                </h1>
                
                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mt-8 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <p className="text-[#B0B3B8] text-center mb-6">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  
                  <div className="flex flex-col items-center space-y-4">
                    <Link 
                      href="/" 
                      className="px-6 py-3 bg-[#3A6FF8] hover:bg-[#547DFF] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8]/50 shadow-lg"
                    >
                      Return to Homepage
                    </Link>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                      <Link 
                        href="/cool-themes" 
                        className="p-3 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all text-center text-[#B0B3B8] hover:text-white"
                      >
                        Cool Themes
                      </Link>
                      <Link 
                        href="/clock-themes" 
                        className="p-3 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all text-center text-[#B0B3B8] hover:text-white"
                      >
                        Clock Themes
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8 text-[#B0B3B8]">
                  <p>If you believe this is an error, please contact us at:</p>
                  <a 
                    href="mailto:blacksscreenteam@gmail.com" 
                    className="text-[#3A6FF8] hover:text-[#547DFF] transition-colors"
                  >
                    blacksscreenteam@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </NavigationLayout>
    </Suspense>
  )
}
