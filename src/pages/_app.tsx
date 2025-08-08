import type { AppProps } from 'next/app'
import Head from 'next/head'
import { BoilerplateProvider } from '../context/BoilerplateContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BoilerplateProvider>
        <Component {...pageProps} />
      </BoilerplateProvider>
    </>
  )
}
