import React from 'react';
import {useRouter} from 'next/navigation';
import Link from "next/link";

export default function InfoSection({dictionary}: { dictionary: any }) {
    const router = useRouter();

    return (
        <div className="max-w-content mx-auto px-6">
            <section className="py-8 max-w-[1080px] mx-auto px-4 md:px-6">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <h2 className="text-4xl font-semibold text-center text-white mb-4 relative">
                        <span className="text-[#3A6FF8]">Black</span>Screen: Multi-functional Fullscreen Display Tool
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    <h3 className="text-2xl font-semibold text-center text-[#B0B3B8] mb-6">
                        One-click fullscreen, multi-scenario adaptation, providing perfect experience for every use
                    </h3>
                    <p className="text-[#B0B3B8] max-w-3xl mx-auto text-center mb-12">
                        BlackScreen is a free online fullscreen tool that provides professional support for various usage scenarios including presentations, projections, eye protection, energy saving, OLED screen protection, pixel testing, and photography lighting.
                        Simply press the spacebar to go fullscreen, and ESC to exit anytime - easy to use yet powerful.
                    </p>
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center">
                            <span className="w-10 h-10 rounded-full bg-[#3A6FF8] flex items-center justify-center mr-3 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"/>
                              </svg>
                            </span>
                            BlackScreen Core Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">One-Click Fullscreen Mode</h4>
                                <p className="text-[#B0B3B8]">
                                    Press spacebar or click the screen to instantly enter fullscreen mode, providing an immersive experience. Perfect for presenters, teachers, designers, and any scenario requiring focused display content.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Color Theme Selection</h4>
                                <p className="text-[#B0B3B8]">
                                    Offers multiple carefully designed color themes, from pure black to various professional colors, meeting different scenario needs. Especially suitable for photographers, designers, and visual artists.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Eye Rest Timer</h4>
                                <p className="text-[#B0B3B8]">
                                    Built-in timer function helps track usage time and reminds you to take breaks, protecting eye health. Especially beneficial for students, programmers, and office workers who spend long hours on computers.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">High-Resolution Downloads</h4>
                                <p className="text-[#B0B3B8]">
                                    Supports multiple resolution image downloads, from 480p to 8K, even custom sizes, meeting various device and scenario needs, providing perfect materials for your presentations and tests.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">OLED Screen Protection</h4>
                                <p className="text-[#B0B3B8]">
                                    Pure black background can turn off pixels on OLED screens, effectively extending screen life while saving power. Ideal for premium display device users and professionals who care about device maintenance.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Achievement Badge System</h4>
                                <p className="text-[#B0B3B8]">
                                    The longer you use it, the more achievement badges you unlock, adding fun to usage. Records your usage journey, motivates continued use, and provides a sense of accomplishment for every focused session.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-6">
                <div
                    className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div
                        className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div
                        className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>

                    <h2 className="text-2xl font-semibold text-center text-white mb-6 relative">
                        Explore More BlackScreen Features
                        <div
                            className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Link href="/cool-themes"
                              className="block p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                                </svg>
                                Cool Visual Themes
                            </h4>
                            <p className="text-[#B0B3B8]">
                                Explore our cool visual themes including Aurora, Deep Ocean, Starfield and other immersive experiences, bringing a visual feast to your screen.
                            </p>
                            <div className="mt-4 flex justify-end">
                    <span
                        className="text-[#3A6FF8] group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Try Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                           fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"/>
                      </svg>
                    </span>
                            </div>
                        </Link>

                        <Link href="/clock-themes"
                              className="block p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                          clipRule="evenodd"/>
                                </svg>
                                Clock Themes
                            </h4>
                            <p className="text-[#B0B3B8]">
                                Experience our collection of beautiful clock themes including digital clocks, binary clocks, wave clocks and more, making your screen both practical and aesthetically pleasing, combining functionality with artistry.
                            </p>
                            <div className="mt-4 flex justify-end">
                                <span
                                    className="text-[#3A6FF8] group-hover:translate-x-1 transition-transform inline-flex items-center">
                                  View Clocks
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                       fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                  </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            
            <section className="mb-10">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <h2 className="text-2xl font-semibold text-center text-white mb-6 relative">
                        Why Choose BlackScreen?
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Easy to Use</h4>
                            <p className="text-[#B0B3B8]">No installation needed, just open the webpage to use. Spacebar for fullscreen, ESC to exit - simple and intuitive operation suitable for users of all ages.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Multi-Scenario Adaptation</h4>
                            <p className="text-[#B0B3B8]">From presentations and teaching to design creation, from photography setup to screen testing, BlackScreen provides perfect support for various professional scenarios.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Eye Protection</h4>
                            <p className="text-[#B0B3B8]">Built-in eye rest timer reminds users to take breaks, protecting vision health, especially beneficial for people who spend long hours on computers.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Achievement System</h4>
                            <p className="text-[#B0B3B8]">
                                The longer you use it, the more achievement badges you unlock, adding fun to usage. Records your usage journey, motivates continued use, and provides a sense of accomplishment for every focused session.
                            </p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-6 py-3 bg-[#3A6FF8] hover:bg-[#2A5FE8] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8]/50 shadow-lg">
                            Experience BlackScreen Now
                        </button>
                        <p className="text-[#B0B3B8] mt-4">
                            Press the spacebar to go full screen, and press ESC to exit at any time. Start your full-screen experience!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
