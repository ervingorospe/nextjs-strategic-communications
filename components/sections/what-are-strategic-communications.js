import { Titles, Body, SectionButtons } from 'components/section-components'

export default function WhatAreStrategicCommunications({ data, marginTop }) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <svg className="text-primary-200 bg-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1332.36 126.21">
          <g id="Logos">
            <polygon points="666.18 114.17 0 0 0 126.21 1332.36 126.21 1332.36 0 666.18 114.17"/>
          </g>
        </svg>
        <svg className="absolute inset-x-0 top-1 sm:top-2 text-primary-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1332.36 126.21">
          <g id="Logos">
            <polygon points="666.18 114.17 0 40 0 126.21 1332.36 126.21 1332.36 40 666.18 114.17"/>
          </g>
        </svg>
      </div>
      <div className={`w-full h-full ${containerBg} overflow-hidden pb-8`}>
        <div className={`max-w-screen-2xl pt-12 md:pt-14 lg:pt-16 xl:pt-20 pb-12 md:pb-14 lg:pt-16 lg:pb-32 container relative z-1 lg:px-24 ${fields.containerWidth} ${marginTop}`}>
          <div className="relative">
            {/* title and subtitle */}
            <Titles 
              fields={fields}
              titleTag={fields.titleTag}
              subtitleTag={fields.subtitleTag}
              titleStyle="font-heading text-4xl font-extrabold text-primary-900 md:text-5xl xl:text-6xl"
              subtitleStyle="mt-3 text-xl font-semibold text-primary-600 md:text-2xl xl:text-3xl"
            />

            {/* body and extrabody */}
            <Body 
              fields={fields} 
              bodyStyle="prose prose-md md:prose-lg mt-6 prose-primary text-gray-900" 
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
        </div>
      </div>
    </section>
  );
}