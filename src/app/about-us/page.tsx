'use client'

import React from 'react'
import {NavigationLayout} from '@/components/Navigation'

export default function AboutUs() {
    return (
        <NavigationLayout>
            <main className="pt-0 pb-2 min-h-screen mx-auto px-4 md:px-6 bg-[#000000]">
                <div className="max-w-content mx-auto px-6">
                    <section className="py-16">
                        <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden mb-10">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                            
                            <h1 className="text-4xl font-semibold text-center text-white mb-4">
                                <span className="text-[#3A6FF8]">BlackScreen</span> Team
                            </h1>
                            <h2 className="text-2xl font-semibold text-center text-white mb-6">
                                Making Every Screen Shine
                            </h2>
                            <div className="text-[#B0B3B8] max-w-3xl mx-auto text-center mb-12">
                                <p className="mb-4">
                                    Welcome to BlackScreen! We are a team of developers passionate about technology and dedicated to delivering the best user experience. Since our founding in 2024, we have focused on providing high-quality screen tools and visual experiences.
                                </p>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-2xl font-semibold text-center text-white mb-6 flex items-center justify-center">
                                    <span className="w-10 h-10 rounded-full bg-[#3A6FF8] flex items-center justify-center mr-3 text-white" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                                        </svg>
                                    </span>
                                    Our Mission
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                    <div className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                        <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Simple Yet Powerful</h4>
                                        <p className="text-[#B0B3B8]">
                                            We believe the best tools should be simple to use yet powerful. BlackScreen provides one-click fullscreen experience with rich features from solid colors to dynamic themes, meeting various needs in presentations, teaching, creation and more.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                        <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Balance of Innovation & Practicality</h4>
                                        <p className="text-[#B0B3B8]">
                                            We continuously innovate, developing cool themes like Aurora, Deep Ocean, Starfield, and practical features like digital clock, binary clock. Every feature is designed to enhance user experience and make work and study more enjoyable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden mb-10">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                            
                            <h3 className="text-2xl font-semibold text-center text-white mb-6">Technical Excellence</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                    <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Cutting-edge Technology</h4>
                                    <p className="text-[#B0B3B8]">
                                        Using modern tech stacks like Next.js and Three.js, supporting up to 8K display output, ensuring smooth visual experience across all devices. Our achievement system and rest reminder help users stay focused and healthy.
                                    </p>
                                </div>
                                <div className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                    <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Performance Optimized</h4>
                                    <p className="text-[#B0B3B8]">
                                        Optimized for Core Web Vitals with LCP under 2.5s, INP under 200ms and CLS under 0.1. Implemented code splitting, lazy loading and image optimization to deliver the best performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                            
                            <h3 className="text-2xl font-semibold text-center text-white mb-6">Contact Us</h3>
                            <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
                                <div className="space-y-4 text-[#B0B3B8] text-center">
                                    <p><strong>Website:</strong> <a href="https://www.blacksscreen.com" className="text-[#3A6FF8] hover:text-[#547DFF] transition-colors" aria-label="Visit BlackScreen website">https://www.blacksscreen.com</a></p>
                                    <p><strong>Email:</strong> <a href="mailto:blacksscreenteam@gmail.com" className="text-[#3A6FF8] hover:text-[#547DFF] transition-colors" aria-label="Email BlackScreen team">blacksscreenteam@gmail.com</a></p>
                                    <p><strong>Our Vision:</strong> To become the world's leading screen tool provider, creating better digital experiences for users.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </NavigationLayout>
    )
}
