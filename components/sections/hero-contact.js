import { useEffect, useState } from 'react'
import { Titles, Body, SectionButtons } from 'components/section-components'
import Script from 'next/script'

export default function HeroContact({data, marginTop}) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  const [embedElement, setEmbedElement] = useState()
  const [embedScript, setEmbedScript] = useState()

  useEffect(() => {
    if (fields.embedScript) {
      setEmbedElement(fields.embedElement)
      setEmbedScript(fields.embedScript)
    }
  }, [fields.embedElement, fields.embedScript])

  return (
    <section className="relative w-full pb-10">
      <div className={`w-full h-full ${containerBg} relative z-0`}>
        <div className="absolute inset-0 bg-primary-900"/>
        <div className="absolute inset-0 bg-fixed hero-bg-image"/>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900"/>

        <div className={`max-w-screen-2xl container relative z-20 pt-8 pb-20 sm:pb-32 md:pb-36 md:pt-12 lg:pt-16 lg:pb-40 xl:pb-48 2xl:pb-48 xl:pt-20 2xl:pt-24 2xl:px-24 ${fields.containerWidth}`}>
          <div className={`grid items-start gap-y-6 gap-x-10 lg:grid-cols-2 ${marginTop}`}>
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              {/* title and subtitle */}
              <Titles 
                fields={fields} 
                titleTag={fields.titleTag}
                subtitleTag={fields.subtitleTag}
                titleStyle="font-heading text-4xl font-extrabold text-white md:text-5xl xl:text-6xl"
                subtitleStyle="mt-3 text-xl font-semibold text-primary-300 md:text-2xl xl:text-3xl"
              />

              {/* body and extrabody */}
              <Body 
                fields={fields} 
                bodyStyle="mt-6 prose prose-md md:prose-lg prose-primary text-gray-100" 
                extraBodyStyle="mt-6 prose prose-md md:prose-lg prose-primary text-gray-100"
              />

              {/* section buttons */}
              <SectionButtons 
                fields={fields} 
                containerStyle="space-y-2 md:space-y-0 md:space-x-2 mt-6" 
                firstBtnStyle="button inline-flex bg-transparent border-white text-gray-50 hover:bg-white hover:text-primary-900 focus:ring-gray-100"
                secondBtnStyle="button inline-flex bg-white text-primary-900 hover:bg-gray-200 focus:ring-gray-200"
              />
            </div>

            {/* right image */}
            {
              fields.embedScript && (
                <div className="grid justify-items-center lg:justify-items-end">
                  <div className="relative w-full lg:max-w-lg max-w-[600px] bg-gray-50 rounded-sm">
                    <div className="px-6 pt-6 min-h-[385px]">
                      <div dangerouslySetInnerHTML={{__html: embedElement}}/>
                      {
                        
                      }
                      <Script
                        id="form-script"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                          __html: eval(`${embedScript}`),
                        }}
                      />
                    </div>
                    <p className="abosulute text-xs text-center bg-gray-100 border p-0 py-7 m-0">
                      We care about protecting your data. Read our <strong>Privacy Policy.</strong>
                    </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className="absolute inset-0 leading-[0px] overflow-x-hidden md:overflow-x-visible z-10">
          <div className="absolute -bottom-1 left-0 w-full text-gray-50 h-[50vw] md:h-[300px] lg:h-[400px] xl:h-[700px]">
            <div className="relative w-full h-full">
              <svg  className="absolute bottom-1 bg-transparent text-red-900 z-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1332.36 126.21">
                <g id="Logos"><polygon points="666.18 114.17 0 0 0 126.21 1332.36 126.21 1332.36 0 666.18 114.17"/></g>
              </svg>
              <svg  className="absolute bottom-0 xl:-bottom-1 bg-transparent text-white z-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1332.36 126.21">
                <g id="Logos"><polygon points="666.18 114.17 0 50 0 126.21 1332.36 126.21 1332.36 50 666.18 114.17"/></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}