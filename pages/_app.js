import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
