import { Titles, Body, SectionButtons } from 'components/section-components'

export default function Default({data, marginTop, marginBtm}) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`w-full h-full ${containerBg} overflow-hidden`}>
        <div className={`max-w-screen-2xl py-8 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 xl:pt-20 2xl:pt-24 container relative z-1 2xl:px-24 ${fields.containerWidth} ${marginTop} ${marginBtm}`}>
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
                bodyStyle="prose-md md:prose-lg mt-6 text-gray-900" 
                extraBodyStyle="prose-md md:prose-lg mt-6 text-gray-900"
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
    </section>
  );
}