import { NavigationLayout } from './Navigation'
import Footer from './Footer'
import { I18nProvider } from './I18nProvider'

export default function Layout({ children, dictionary, lang }) {
  return (
    <I18nProvider lang={lang} dictionary={dictionary}>
      <div className="flex flex-col min-h-screen bg-[#000000]">
        <NavigationLayout>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NavigationLayout>
      </div>
    </I18nProvider>
  )
}
