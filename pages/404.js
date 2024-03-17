import Link from 'next/link'
import Head from 'next/head'
import _ from 'lodash'
// api
import { getSeoContent } from 'api/collections'
import { getAnalytics } from 'api/collections'

export default function PageNotFound({seo}) {
  const { metas, defaultSeo } = seo
  const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  const metaTitle = _.get(metas, 'metaTitle') ? _.get(metas, 'metaTitle') : _.get(defaultSeo, 'defaultMetaTitle') ? _.get(defaultSeo, 'defaultMetaTitle') : ''
  const message = "We're sorry, this page does not exist but you can"

  return (
    <section className="relative w-full overflow-hidden">
      <Head>
        <title>404 - {metaTitle}</title>
        <link rel="canonical" href={hostname}/>
        <meta name="title" content={`404 - ${metaTitle}`} />
        <meta name="description" content={`${_.get(metas, 'metaDescription')}`}/>
        <meta property="og:title" content={`404 - ${metaTitle}`} key="title" />
        <meta property="og:description" content={`${_.get(metas, 'metaDescription')}`} key="description" />
        <meta property="og:image" content={`${_.get(metas, 'ogImage.imageUrl')}`} key="image" />
      </Head>

      <div className={`w-full h-full bg-transparent overflow-hidden`}>
        <div className={`max-w-screen-2xl py-40 container relative z-1 2xl:px-24 mt-20`}>
          <div className="w-full text-center">
            <h2 className="mt-0 text-4xl md:text-5xl font-heading font-bold">Wait a second...</h2>
            <div className="mt-6 text-base text-primary-700 lg:text-lg">
              {message} <Link href="/"><a className="font-bold text-primary-700 hover:underline">explore the rest of our site.</a></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps(context) { 
  const defaultSeo = await getSeoContent();
  const dataCollection = await getAnalytics()
  const analyticsId =  dataCollection.analyticsId

  return {
    props: {
      seo: { defaultSeo },
      analyticsId
    },
  };
}