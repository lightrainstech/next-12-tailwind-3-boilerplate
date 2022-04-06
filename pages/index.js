import { useLocale, useTranslations } from 'next-intl'

import Image from 'next/image'
import LocaleSwitcher from '../components/LocaleSwitcher'
import { NextSeo } from 'next-seo'

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}

export default function Home() {
  const t = useTranslations('Index')
  const locale = useLocale()

  return (
    <>
      <NextSeo title={t('description')} />
      <main className="">
        <div className="h-screen w-screen flex items-center justify-center flex-col">
          <LocaleSwitcher />

          <h1 className="text-4xl">{t('title')}</h1>
          <h2 className="text-lg">{t('description')}</h2>
        </div>
      </main>
    </>
  )
}
