import { Titles, Body, SectionButtons, ImageHolder, VideoHolder } from 'components/section-components'
import _ from 'lodash'

export default function ImageRight({ data, marginTop, marginBtm }) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`w-full h-full ${containerBg} overflow-hidden`}>
        <div className={`max-w-screen-2xl pt-12 md:pt-14 lg:pt-16 xl:pt-20 pb-12 md:pb-14 lg:pb-16 xl:pb-20 container relative z-1 lg:px-24 ${fields.containerWidth} ${marginTop} ${marginBtm}`}>
          <div className="grid lg:grid-cols-2 lg:gap-20">
            <div className="mt-6 lg:mt-0 flex items-center w-full order-last lg:order-first">
              <div className="w-full">
                {/* title and subtitle */}
                <Titles 
                  fields={fields}
                  titleTag={fields.titleTag}
                  subtitleTag={fields.subtitleTag}
                  titleStyle="font-heading text-xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
                  subtitleStyle="mt-3 text-sm font-semibold text-gray-900 md:text-lg lg:text-xl"
                />

                {/* body and extrabody */}
                <Body 
                  fields={fields} 
                  bodyStyle="prose max-w-prose prose-md md:prose-lg mt-6 prose-primary" 
                  extraBodyStyle="prose max-w-prose prose-md md:prose-lg mt-6 prose-primary"
                />

                {/* section buttons */}
                <SectionButtons 
                  fields={fields} 
                  containerStyle="space-y-2 md:space-y-0 md:space-x-2 mt-6" 
                  firstBtnStyle="font-bold text-sm md:text-base text-primary-800 inline-flex items-center justify-center group hover:text-primary-600"
                  secondBtnStyle="button inline-flex bg-transparent border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white"
                  firstIcon={{
                    type: "fa-solid fa-arrow-right text-sm", 
                    classStyle: "mt-1 ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1 text-sm" 
                  }}
                />
              </div>
            </div>

            {
              _.get(fields, 'video') && (
                <VideoHolder video={_.get(fields, 'video.videoUrl')} classStyle="lg:shadow-primary-200 lg:shadow-image-left-shadow"/>
              )
            }
            
            {
              !_.get(fields, 'video') && _.get(fields, 'image') && (
                <ImageHolder image={fields.image} classStyle="lg:shadow-primary-200 lg:shadow-image-left-shadow"/>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}