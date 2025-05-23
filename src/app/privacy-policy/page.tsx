'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// 动态导入组件
const NavigationLayout = dynamic(
  () => import('@/components/Navigation').then((mod) => mod.NavigationLayout),
  { ssr: true, loading: () => <div>Loading...</div> }
)

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<div aria-live="polite">Loading...</div>}>
      <NavigationLayout>
        <main className="pt-20 pb-16 min-h-screen max-w-[854px] mx-auto px-4 md:px-6" role="main">
          <div className="max-w-content mx-auto px-6">
            <section className="py-16">
              <h1 className="text-4xl font-semibold text-center text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-400 text-center mb-6">Last Updated: May 22, 2025</p>
              
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Welcome to BlackScreen</h2>
                  <p className="text-gray-400">
                    BlackScreen (hereinafter referred to as "we") is committed to protecting your privacy. This privacy policy details how we collect, use, protect, and process your personal information when you visit{' '}
                    <a href="https://www.blacksscreen.com" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="BlackScreen website">BlackScreen</a>. 
                    If you have any questions, please contact us at{' '}
                    <a href="mailto:blacksscreenteam@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors" aria-label="Email BlackScreen team">blacksscreenteam@gmail.com</a>.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Information Collection</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      <li>Browser type and version</li>
                      <li>Access time and duration</li>
                      <li>IP address (for basic analytics and security purposes)</li>
                      <li>Device information (screen resolution, etc., for display optimization)</li>
                    </ul>

                    <h3 className="text-xl font-medium text-white mt-6">Locally Stored Information</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      <li>Theme preferences</li>
                      <li>Custom color configurations</li>
                      <li>Meditation time records</li>
                      <li>Achievement unlock status</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Cookie Usage</h2>
                  <p className="text-gray-400 mb-4">
                    We use essential cookies to provide basic functionality, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Remembering your display preferences</li>
                    <li>Saving custom theme settings</li>
                    <li>Maintaining usage statistics</li>
                    <li>Improving website performance</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Information Usage</h2>
                  <p className="text-gray-400 mb-4">We use collected information to:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Provide and improve black screen display services</li>
                    <li>Save your personalization settings</li>
                    <li>Track and issue achievement badges</li>
                    <li>Generate high-resolution downloadable images</li>
                    <li>Analyze and improve user experience</li>
                    <li>Maintain website security</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                  <p className="text-gray-400">
                    We implement multiple measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>All data is prioritized for local storage, minimizing server transmission</li>
                    <li>Using encrypted connections (HTTPS) for data transmission</li>
                    <li>Regular security measure updates</li>
                    <li>Limited employee access to user data</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
                  <p className="text-gray-400">
                    Our website uses the following third-party services:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Google Analytics (for website analytics)</li>
                    <li>Vercel (for website hosting)</li>
                  </ul>
                  <p className="text-gray-400 mt-4">
                    These services may collect additional data. Please review their respective privacy policies for details.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">User Rights</h2>
                  <p className="text-gray-400 mb-4">Under GDPR and CCPA, you have the right to:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Delete personal data</li>
                    <li>Restrict or object to data processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                  <p className="text-gray-400">
                    Our services are not intended for children under 13. If you discover that we have inadvertently collected personal information from children,
                    please contact us, and we will take immediate steps to delete such information.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Privacy Policy Updates</h2>
                  <p className="text-gray-400">
                    We may update this privacy policy from time to time. The updated version will be posted on this page,
                    with an updated "Last Updated" date. For significant changes, we will notify you through the website or email.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-400">
                    If you have any questions or suggestions about this privacy policy, please contact us at:<br />
                    Email: <a href="mailto:blacksscreenteam@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">blacksscreenteam@gmail.com</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </NavigationLayout>
    </Suspense>
  )
}
