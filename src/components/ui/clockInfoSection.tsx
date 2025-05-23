import React from 'react';
import {useRouter} from 'next/navigation';
import Link from "next/link";

export default function ClockInfoSection({dictionary}: { dictionary: any }) {
    const router = useRouter();

    return (
        <div className="max-w-content mx-auto px-6">
            <section className="py-8 max-w-[1080px] mx-auto px-4 md:px-6">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <h2 className="text-4xl font-semibold text-center text-white mb-4 relative">
                        <span className="text-[#3A6FF8]">Black</span>Screen Clock Themes - Master Your Time
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    <h3 className="text-2xl font-semibold text-center text-[#B0B3B8] mb-6">
                        Diverse Clock Themes Adding Both Utility and Aesthetics to Your Screen
                    </h3>
                    <p className="text-[#B0B3B8] max-w-3xl mx-auto text-center mb-12">
                        BlackScreen Clock Themes offer multiple elegant clock designs, enhancing your experience across various scenarios like presentations, focused work, eye rest, and live streaming.
                        Simply press the spacebar to go fullscreen, and ESC to exit - easy to use yet powerful in features.
                    </p>
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-center text-white mb-8 flex items-center justify-center">
                            <span className="w-10 h-10 rounded-full bg-[#3A6FF8] flex items-center justify-center mr-3 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                      clipRule="evenodd"/>
                              </svg>
                            </span>
                            Clock Theme Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Digital Clock Theme</h4>
                                <p className="text-[#B0B3B8]">
                                    Clear and readable digital clock display, perfect for meetings, classrooms, and office environments. Supports both 24-hour and 12-hour formats, ensuring you always have accurate time at your fingertips.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Binary Clock Theme</h4>
                                <p className="text-[#B0B3B8]">
                                    Unique binary clock display that converts time into binary format, ideal for programmers, developers, and tech enthusiasts. Both a practical tool and an excellent teaching aid for programming concepts.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Wave Clock Theme</h4>
                                <p className="text-[#B0B3B8]">
                                    Dynamic wave effect clock combining time display with visual artistry, perfect for creative professionals, designers, and streaming backgrounds. Smooth animations make time display more aesthetically pleasing.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Chase Clock Theme</h4>
                                <p className="text-[#B0B3B8]">
                                    Dynamic chase animation clock where time digits appear in a pursuit pattern, suitable for energetic settings and creative displays. Unique visual effects make time display more engaging and interesting.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Fullscreen Immersion</h4>
                                <p className="text-[#B0B3B8]">
                                    One-click fullscreen mode for an immersive clock experience. Perfect for presenters, teachers, and anyone needing large-screen time display. Quick toggle with spacebar for convenient operation.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Eye Rest Timer</h4>
                                <p className="text-[#B0B3B8]">
                                    Built-in eye rest timer to help protect vision for users with extended computer usage. Especially beneficial for students, programmers, and office workers, reminding you to take regular breaks for eye health.
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
                                Visual Themes
                            </h4>
                            <p className="text-[#B0B3B8]">
                                Experience our stunning visual themes, including digital clocks, binary clocks, wave clocks, and more. Make your screen both functional and beautiful, combining utility with artistry.
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

                        <Link href="/"
                              className="block p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                          clipRule="evenodd"/>
                                </svg>
                                Solid Background Mode
                            </h4>
                            <p className="text-[#B0B3B8]">
                                Return to BlackScreen homepage to experience solid background mode, providing the purest fullscreen experience for presentations, photography, and screen testing.
                            </p>
                            <div className="mt-4 flex justify-end">
                                <span
                                    className="text-[#3A6FF8] group-hover:translate-x-1 transition-transform inline-flex items-center">
                                  Back to Home
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
                        Clock Theme Use Cases
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Teaching & Presentations</h4>
                            <p className="text-sm text-[#B0B3B8]">Teachers and presenters can use clock themes to precisely manage time during classes and presentations, improving teaching and speaking efficiency</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Streaming & Recording</h4>
                            <p className="text-sm text-[#B0B3B8]">Streamers and content creators can use clock themes as stream backgrounds, providing time reference for viewers and enhancing interaction</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Programming & Development</h4>
                            <p className="text-sm text-[#B0B3B8]">Programmers and developers can use the binary clock both as a time tool and as a visual demonstration of programming concepts</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Design & Creation</h4>
                            <p className="text-sm text-[#B0B3B8]">Designers and creative professionals can utilize wave and chase clocks for inspiration and as references for creative projects</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Study & Focus</h4>
                            <p className="text-sm text-[#B0B3B8]">Students and self-learners can use clock themes for time management, paired with eye rest timer to improve study efficiency</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Photography & Video</h4>
                            <p className="text-sm text-[#B0B3B8]">Photographers and video producers can use clock themes as shooting backgrounds or time references, enhancing professional quality</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mb-10">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <h2 className="text-2xl font-semibold text-center text-white mb-6 relative">
                        Why Choose BlackScreen Clock Themes?
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Easy to Use</h4>
                            <p className="text-[#B0B3B8]">No installation needed, just open the webpage and start using. Spacebar for fullscreen, ESC to exit - simple and intuitive for users of all ages.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Diverse Themes</h4>
                            <p className="text-[#B0B3B8]">Offering digital, binary, wave, chase, and other clock themes to meet different scenarios and personal preferences.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Eye Protection</h4>
                            <p className="text-[#B0B3B8]">Built-in eye rest timer reminds users to take breaks, protecting eye health, especially suitable for those who use computers for extended periods.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Achievement System</h4>
                            <p className="text-[#B0B3B8]">Unlock more achievement badges with longer usage time, adding fun to the experience and encouraging continued use while providing a sense of accomplishment.</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-6 py-3 bg-[#3A6FF8] hover:bg-[#2A5FE8] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8]/50 shadow-lg">
                            Try Clock Themes Now
                        </button>
                        <p className="text-[#B0B3B8] mt-4">
                            Press spacebar to go fullscreen, ESC to exit - start your immersive clock experience!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
