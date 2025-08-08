import type { AppProps } from 'next/app'
import { BoilerplateProvider } from '../context/BoilerplateContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BoilerplateProvider>
      <Component {...pageProps} />
    </BoilerplateProvider>
  )
}
