'use client'

import { NavigationLayout } from '@/components/Navigation'

export default function TermsAndConditions() {
  return (
    <NavigationLayout>
      <main className="pt-20 pb-16 min-h-screen max-w-[854px] mx-auto px-4 md:px-6" role="main">
        <div className="max-w-content mx-auto px-6">
          <section className="py-16">
            <div className="w-full backdrop-blur-sm bg-black/30 rounded-2xl p-6 border border-[#3A6FF8]/10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3A6FF8]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#3A6FF8]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
              
              <h1 className="text-4xl font-semibold text-center text-white mb-4 relative">
                Terms and Conditions
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#3A6FF8] to-transparent rounded-full mx-auto mt-2" aria-hidden="true"></div>
              </h1>
              <p className="text-gray-400 text-center mb-8">Last Updated: May 23, 2025</p>
              
              <div className="space-y-8">
                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Welcome to BlackScreen</h2>
                  <p className="text-gray-400">
                    BlackScreen (hereinafter referred to as "we") is committed to protecting your privacy. Please contact us at{' '}
                    <a href="mailto:blacksscreenteam@gmail.com" className="text-[#3A6FF8] hover:text-[#547DFF] transition-colors" aria-label="Email BlackScreen team">
                      blacksscreenteam@gmail.com
                    </a>{' '}
                    if you have any questions.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Service Terms</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">Usage Agreement</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      <li>The service is provided "as is" without any warranty</li>
                      <li>Users must be at least 13 years old to use the service</li>
                      <li>Users are responsible for their use of the service</li>
                      <li>We reserve the right to modify or terminate the service at any time</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                  <p className="text-gray-400 mb-4">
                    All content and functionality on BlackScreen are protected by copyright and other intellectual property laws.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Users may not copy or redistribute the service content</li>
                    <li>The BlackScreen name and logo are our trademarks</li>
                    <li>Custom themes created by users remain their intellectual property</li>
                    <li>We respect third-party intellectual property rights</li>
                  </ul>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">User Conduct</h2>
                  <p className="text-gray-400 mb-4">Users agree to:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Use the service in compliance with all applicable laws</li>
                    <li>Not attempt to disrupt or compromise the service</li>
                    <li>Not use the service for any illegal purposes</li>
                    <li>Respect other users' rights and privacy</li>
                  </ul>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-400">
                    BlackScreen and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                  <p className="text-gray-400">
                    We may update these terms from time to time. The updated version will be posted on this page with a new "Last Updated" date. Continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div className="bg-[#1A1A1A] backdrop-blur-sm rounded-xl p-6 border border-[#3A6FF8]/10 hover:border-[#3A6FF8]/30 transition-all duration-300">
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-400">
                    If you have any questions about these terms, please contact us at:<br />
                    Email:{' '}
                    <a href="mailto:blacksscreenteam@gmail.com" className="text-[#3A6FF8] hover:text-[#547DFF] transition-colors">
                      blacksscreenteam@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </NavigationLayout>
  )
}
