import { Titles, Body, SectionButtons, ImageHolder, VideoHolder } from 'components/section-components'
import _ from 'lodash'

export default function ImageRightSmallImageDetachedTitle({ data, marginTop }) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`w-full h-full ${containerBg} overflow-hidden`}>
        <div className={`max-w-screen-2xl pt-12 md:pt-14 lg:pt-16 xl:pt-20 pb-12 md:pb-14 lg:pb-16 xl:pb-20 container relative z-1 lg:px-24 ${fields.containerWidth} ${marginTop}`}>
          <div className="flex items-top">
            <div className="w-full">
              {/* title and subtitle */}
              <Titles 
                fields={fields}
                titleTag={fields.titleTag}
                subtitleTag={fields.subtitleTag}
                titleStyle="font-heading text-xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
                subtitleStyle="mt-3 text-sm font-semibold text-gray-900 md:text-lg lg:text-xl"
              />

              <div className="mt-6 grid grid-cols-12 gap-4 lg:gap-0">
                <div className="col-span-12 lg:col-span-8 order-last lg:order-first">
                  {/* body and extrabody */}
                  <Body 
                    fields={fields} 
                    bodyStyle="mt-6 lg:mt-0 prose-md max-w-prose md:prose-lg prose-primary" 
                    extraBodyStyle="mt-6 lg:mt-0 prose-md max-w-prose md:prose-lg prose-primary"
                  />

                  {/* section buttons */}
                  <SectionButtons 
                    fields={fields} 
                    containerStyle="space-y-2 md:space-y-0 md:space-x-2 mt-6" 
                    firstBtnStyle="button inline-flex bg-primary-800 border-primary-800 text-white hover:bg-primary-600 hover:text-gray-200"
                    secondBtnStyle="button inline-flex bg-primary-800 border-primary-800 text-white hover:bg-primary-600 hover:text-gray-200"
                  />
                </div>
                <div className="col-span-12 lg:col-span-4 order-first lg:order-last">
                  <div className="rounded-md h-full">
                    {
                      _.get(fields, 'video') && (
                        <VideoHolder video={_.get(fields, 'video.videoUrl')} height="h-full"/>
                      )
                    }
                    
                    {
                      !_.get(fields, 'video') && _.get(fields, 'image') && (
                        <ImageHolder image={fields.image} height="h-full"/>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}