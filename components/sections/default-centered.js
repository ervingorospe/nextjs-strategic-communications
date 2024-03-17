import { Titles, Body, SectionButtons } from 'components/section-components'

export default function DefaultCentered({data, marginTop}) {
  const { fields } = data
  const containerBg = `bg-${fields.containerBackgroundColorClass}`

  return (
    <section className="relative w-full overflow-hidden">
      <div className={`w-full h-full ${containerBg} overflow-hidden`}>
        <div className={`max-w-screen-2xl py-8 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 xl:pt-20 2xl:pt-24 container relative z-1 2xl:px-24 ${fields.containerWidth} ${marginTop}`}>
          <div className="w-full text-center">
            {/* title and subtitle */}
              <Titles 
                fields={fields} 
                titleTag={fields.titleTag}
                subtitleTag={fields.subtitleTag}
                titleStyle="text-lg md:text-xl text-theme-title-primary uppercase tracking-wide font-semibold"
                subtitleStyle="text-4xl md:text-5xl font-serif text-theme-title font-black mt-1"
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
                firstBtnStyle="button inline-flex bg-transparent border-white text-gray-50 hover:bg-white hover:text-primary-800 focus:ring-gray-100"
                secondBtnStyle="button inline-flex bg-white text-primary-800 hover:bg-gray-200 focus:ring-gray-200"
              />
          </div>
        </div>
      </div>
    </section>
  );
}