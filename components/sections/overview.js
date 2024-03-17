import { Titles, Body, SectionButtons, ImageHolder } from 'components/section-components'

export default function Overview({ data, marginTop }) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`
  const svgColor = `text-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <svg className={`relative mt-6 rotate-180 bg-transparent ${svgColor}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Layer_2" viewBox="0 0 1332.36 132.11">
        <g id="Logos">
          <polygon points="666.18 132.11 0 17.93 0 0 1332.36 0 1332.36 17.93 666.18 132.11"/>
        </g>
      </svg>
      <div className={`w-full h-full ${containerBg} overflow-hidden -mt-1`}>
        <div className={`max-w-screen-2xl container relative z-1 2xl:px-24 py-6 md:py-12 lg:py-16 xl:py-20 ${fields.containerWidth} ${marginTop}`}>
          <div className="grid lg:grid-cols-2 lg:gap-20">
            <ImageHolder image={fields.image} classStyle="lg:shadow-red-900 lg:shadow-image-left-shadow" height="w-full"/>
          
            <div className="mt-6 lg:mt-0 flex items-center w-full">
              <div className="w-full">
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
                  bodyStyle="prose prose-sm md:prose-lg mt-6 text-gray-900" 
                  extraBodyStyle="prose prose-sm md:prose-lgg mt-6 text-gray-900"
                />

                {/* section buttons */}
                <SectionButtons 
                  fields={fields} 
                  containerStyle="space-y-2 md:space-y-0 md:space-x-2 mt-6" 
                  firstBtnStyle="font-bold text-sm md:text-base text-red-700 inline-flex items-center justify-center group hover:text-red-800"
                  secondBtnStyle="button inline-flex bg-transparent border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white"
                  firstIcon={{
                    type: "fa-solid fa-arrow-right text-sm", 
                    classStyle: "mt-1 ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1 text-sm" 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className={`relative -mt-1 bg-transparent ${svgColor}`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Layer_2" viewBox="0 0 1332.36 132.11">
        <g id="Logos">
          <polygon points="666.18 132.11 0 17.93 0 0 1332.36 0 1332.36 17.93 666.18 132.11"/>
        </g>
      </svg>
    </section>
  );
}