import React from 'react';
import {useRouter} from 'next/navigation';
import Link from "next/link";

export default function CoolInfoSection({dictionary}: { dictionary: any }) {
    const router = useRouter();

    return (
        <div className="max-w-content mx-auto px-6">
            <section className="py-8 max-w-[1080px] mx-auto px-4 md:px-6">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    <h2 className="text-4xl font-semibold text-center text-white mb-4 relative">
                        <span className="text-[#3A6FF8]">BlackScreen</span> Cool Themes - A Visual Feast
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    <h3 className="text-2xl font-semibold text-center text-[#B0B3B8] mb-6">
                        Bring life to your screen, make every fullscreen experience unique
                    </h3>
                    <p className="text-[#B0B3B8] max-w-3xl mx-auto text-center mb-12">
                        BlackScreen Cool Themes collection features stunning visual effects including Aurora, Deep Ocean, Starfield, and more, adding infinite charm to your presentations, projections, and rest time.
                        Simply press the spacebar to enter an immersive fullscreen experience, press ESC to exit anytime.
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
                            Unique Advantages of Cool Themes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Visual Impact</h4>
                                <p className="text-[#B0B3B8]">
                                    Carefully designed visual themes including Aurora, Deep Ocean, Starfield, and more provide an immersive experience for your screen. Perfect for speakers, teachers, and designers to capture audience attention during presentations.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">One-Click Fullscreen</h4>
                                <p className="text-[#B0B3B8]">
                                    Press spacebar or click the screen to instantly enter fullscreen mode for an immersive experience. Simple and intuitive operation makes it easy for anyone to use without complex settings.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Eye Rest Timer</h4>
                                <p className="text-[#B0B3B8]">
                                    Built-in timer function helps track usage time and reminds you to take breaks, protecting eye health. Especially suitable for students, programmers, and office workers who use computers for long periods.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Multi-Scene Adaptation</h4>
                                <p className="text-[#B0B3B8]">
                                    Whether for business presentations, educational teaching, creative design, or relaxation, cool themes perfectly adapt to various usage scenarios, providing ideal visual experiences for users with different needs.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">Achievement System</h4>
                                <p className="text-[#B0B3B8]">
                                    Unlock more achievement badges as you use the app longer, adding fun to your experience. Track your usage journey, encourage continued use, and provide a sense of accomplishment and reward for each focused session.
                                </p>
                            </div>
                            <div
                                className="p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                                <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform">HD Image Download</h4>
                                <p className="text-[#B0B3B8]">
                                    Support multiple resolution image downloads, from 480p to 8K, even custom sizes, meeting various device and scenario needs, providing perfect materials for your presentations, wallpapers, and designs.
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
                        Explore More BlackScreen Themes
                        <div
                            className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Link href="/"
                              className="block p-6 bg-[#1A1A1A] backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 group">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3 group-hover:translate-x-1 transition-transform flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                                </svg>
                                Solid Color Mode
                            </h4>
                            <p className="text-[#B0B3B8]">
                                Return to BlackScreen homepage to experience solid color mode, providing the purest fullscreen experience for presentations, photography, and screen testing scenarios.
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
                                Experience our collection of beautiful clock themes, including digital clock, binary clock, wave clock, and more, making your screen both practical and artistic.
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
                        Cool Theme Use Cases
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Business Presentations</h4>
                            <p className="text-sm text-[#B0B3B8]">Business professionals can use cool themes to enhance presentations, making data visualization more engaging and dynamic</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Educational Teaching</h4>
                            <p className="text-sm text-[#B0B3B8]">Teachers can utilize visual themes to capture students' attention and increase classroom engagement and learning interest</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Creative Design</h4>
                            <p className="text-sm text-[#B0B3B8]">Designers and creative professionals can draw inspiration from cool visual themes to spark creative ideas</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Photography Backdrop</h4>
                            <p className="text-sm text-[#B0B3B8]">Photographers can use cool themes as shooting backgrounds to create unique visual effects and atmospheres</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Relaxation Breaks</h4>
                            <p className="text-sm text-[#B0B3B8]">Use cool themes during work or study breaks to relieve visual fatigue and restore energy</p>
                        </div>
                        
                        <div className="p-4 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-lg font-medium text-white mb-2">Development Testing</h4>
                            <p className="text-sm text-[#B0B3B8]">Developers can use different themes to test application display effects and compatibility across various backgrounds</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-10">
                <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <h2 className="text-2xl font-semibold text-center text-white mb-6 relative">
                        Why Choose BlackScreen Cool Themes?
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2"></div>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Visual Pleasure</h4>
                            <p className="text-[#B0B3B8]">Carefully designed Aurora, Deep Ocean, Starfield, and other cool themes bring unprecedented visual experiences to your screen, making every fullscreen moment a surprise.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Creative Inspiration</h4>
                            <p className="text-[#B0B3B8]">Diverse dynamic visual effects serve not just as screen tools but as sources of creative inspiration, providing unlimited creative possibilities for designers and creators.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">Immersive Experience</h4>
                            <p className="text-[#B0B3B8]">Dynamic effects in fullscreen mode provide an immersive experience, making rest time more relaxing and presentation scenarios more engaging, enhancing focus and participation.</p>
                        </div>
                        
                        <div className="p-5 bg-[#1A1A1A]/70 rounded-lg border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all">
                            <h4 className="text-xl font-medium text-[#3A6FF8] mb-3">High-Quality Materials</h4>
                            <p className="text-[#B0B3B8]">All cool themes are created with high-quality materials, supporting multiple resolution downloads for use as wallpapers, presentation backgrounds, or design materials, meeting professional needs.</p>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="px-6 py-3 bg-[#3A6FF8] hover:bg-[#2A5FE8] text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3A6FF8]/50 shadow-lg">
                            Try Cool Themes Now
                        </button>
                        <p className="text-[#B0B3B8] mt-4">
                            Press spacebar to enter fullscreen mode, press ESC to exit anytime
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
