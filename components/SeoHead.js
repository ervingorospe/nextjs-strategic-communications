import Head from 'next/head'
import _ from 'lodash'

export default function SeoHead({name, metas, defaultSeo}) {
  const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  const metaTitle = _.get(metas, 'metaTitle') ? _.get(metas, 'metaTitle') : _.get(defaultSeo, 'defaultMetaTitle') ? _.get(defaultSeo, 'defaultMetaTitle') : ''
  const title = name ? `${name} - ` : ''

  return (
    <Head>
      <title>{`${title}Strategic Communications`}</title>
      <link rel="canonical" href={hostname}/>
      <meta name="title" content={`${title}${metaTitle}`} />
      <meta name="description" content={`${_.get(metas, 'metaDescription')}`}/>
      <meta property="og:title" content={`${title}${metaTitle}`} key="title" />
      <meta property="og:description" content={`${_.get(metas, 'metaDescription')}`} key="description" />
      <meta property="og:image" content={`${_.get(metas, 'ogImage.imageUrl')}`} key="image" />
    </Head>
  );
}