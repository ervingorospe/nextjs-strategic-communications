import { useState, useEffect } from 'react'
import { Titles, Body, SectionButtons, ImageHolder } from 'components/section-components'
import { ButtonComponent } from 'components'
import { getCollection } from 'api/collections'

export default function Services({ data, marginTop }) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`
  const [contentCollections, setContentCollections] = useState(null);
  
  useEffect(() => {
    if (fields.contentCollection) {
      const getContentCollection = async () => {
        const { collections } = await getCollection(fields.contentCollection)
        setContentCollections(collections)
      }

      getContentCollection()
    }
  }, [fields.contentCollection])

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`w-full h-full ${containerBg} overflow-hidden`}>
        <div className={`max-w-screen-2xl pt-12 md:pt-14 lg:pt-16 xl:pt-20 pb-12 md:pb-14 lg:pb-16 xl:pb-20 container relative z-1 lg:px-24 ${fields.containerWidth} ${marginTop}`}>
          <div className="relative">
            {/* title and subtitle */}
            <Titles 
              fields={fields}
              titleTag={fields.titleTag}
              subtitleTag={fields.subtitleTag}
              titleStyle="font-heading text-4xl font-extrabold text-gray-900 md:text-5xl xl:text-6xl"
              subtitleStyle="mt-3 text-xl font-semibold text-gray-900 md:text-2xl xl:text-3xl"
            />

            {/* body and extrabody */}
            <Body 
              fields={fields} 
              bodyStyle="prose-md md:prose-lg mt-6 text-gray-900" 
              extraBodyStyle="prose-md md:prose-lg mt-6 text-gray-900"
            />

            {/* section buttons */}
            <SectionButtons 
              fields={fields} 
              containerStyle="space-y-2 md:space-y-0 md:space-x-2 mt-6" 
              firstBtnStyle="button inline-flex bg-primary-800 border-primary-800 text-white hover:bg-primary-600 hover:text-gray-200"
              secondBtnStyle="button inline-flex bg-transparent border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white"
            />
          </div>

          <div className="mt-10 md:mt-14 grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {
              contentCollections && (
                contentCollections.map(collection => {
                  return collection.items.map(item => {
                    const itemFields = item.fields

                    if (itemFields.active) {
                      return (
                        <div className="px-4" key={item.id}>
                          {
                            itemFields.image && (
                              <div className="relative ">
                                <ImageHolder image={itemFields.image}/>
                                <span className="absolute -top-7 -left-5 bg-red-700 w-auto rounded-full px-3 py-2 md:p-3 md:-left-7 z-10">
                                  <i className={`${_.get(item,'fields.icon')} text-gray-50 text-lg md:text-3xl`}></i>
                                </span>
                              </div>
                            )
                          }
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold text-gray-900 lg:text-3xl">{item.name}</h1>
                            <h2 className="mt-2 text-base font-semibold text-gray-900 lg:text-xl">{itemFields.subtitle}</h2>
                            <article className="mt-2 prose prose-sm lg:prose-base" dangerouslySetInnerHTML={{__html: itemFields.body}}/>
                          </div>
                          {
                            itemFields.button && (
                              <div className="mt-2 pb-4 md:pb-0 md:mt-4">
                                <ButtonComponent 
                                  classStyle="font-bold text-sm md:text-base inline-flex items-center justify-center group text-red-700 hover:text-red-800"
                                  btnName={_.get(itemFields, 'button.text')} 
                                  btnLink={_.get(itemFields, 'buttonPageLink')}
                                  icon={{ 
                                    type: "fa-solid fa-arrow-right text-sm", 
                                    classStyle: "mt-1 ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1 text-sm" 
                                  }}
                                />
                              </div>
                            )
                          }
                        </div>
                      )
                    }
                  })
                })
              ) 
            }
          </div>
        </div>
      </div>
    </section>
  );
}