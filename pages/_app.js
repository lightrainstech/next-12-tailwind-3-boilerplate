import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { NextIntlProvider } from 'next-intl'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

export default MyApp
