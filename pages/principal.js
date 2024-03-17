import _ from 'lodash'
import Head from 'next/head'
// api
import { getCollection, getItem, getSeoContent } from 'api/collections'
import { sectionsComponent, formatComponentName } from 'lib/component-name'
import { getAnalytics } from 'api/collections'
// components
import * as ComponentSection from 'components/sections'


export default function Principal({ collections, seo }) {
  const { metas, defaultSeo } = seo
  const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  const metaTitle = _.get(metas, 'metaTitle') ? _.get(metas, 'metaTitle') : _.get(defaultSeo, 'defaultMetaTitle') ? _.get(defaultSeo, 'defaultMetaTitle') : ''

  return (
    <div className="w-full">
      <Head>
        <title>Principal - {metaTitle}</title>
        <link rel="canonical" href={hostname}/>
        <meta name="title" content={`Principal - ${metaTitle}`} />
        <meta name="description" content={`${_.get(metas, 'metaDescription')}`}/>
        <meta property="og:title" content={`Principal - ${metaTitle}`} key="title" />
        <meta property="og:description" content={`${_.get(metas, 'metaDescription')}`} key="description" />
        <meta property="og:image" content={`${_.get(metas, 'ogImage.imageUrl')}`} key="image" />
      </Head>
      
      {
        collections.map(collection => {
          const activeItems = _.filter(collection.items, data => _.get(data, 'fields.active') === '1')

          return activeItems.map((item, index) => {
            const componentName = sectionsComponent(item)

            if (componentName) {
              const ComponentType = ComponentSection[formatComponentName(componentName)] ? ComponentSection[formatComponentName(componentName)] : null
              const marginTop = index === 0 ? 'mt-20': ''
              const marginBtm = index === activeItems.length - 1 ? 'mb-20' : ''

              if (ComponentType) {
                return <ComponentType data={item} key={item.name} marginTop={marginTop} marginBtm={marginBtm}/>
              }
            }
          })
        })
      }
    </div>
  )
}

export async function getStaticProps(context) { 
  const pageNavigation = await getItem('153225')
  const defaultSeo = await getSeoContent();
  const { collections } = await getCollection(_.get(pageNavigation.items[0],'fields.sectionsCollection'))
  const navigationFields = _.get(pageNavigation,'items[0].fields')
  const dataCollection = await getAnalytics()
  const analyticsId =  dataCollection.analyticsId
  
  return {
    props: { 
      collections,
      seo: { name: pageNavigation.items[0].name, metas: pageNavigation.items[0].fields, defaultSeo },
      navigationFields,
      analyticsId
    },
  };
}
