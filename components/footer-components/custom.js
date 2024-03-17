import { SectionButtons } from 'components/section-components'

export default function Custom({ details, item }) {

  return (
    <div>
      <h1 className="text-gray-50 text-2xl md:text-3xl xl:text-4xl">{_.get(item, 'name')}</h1>
      {
        item.fields.body && (
          <p className="mt-1 text-gray-50 text-xl md:text:2xl xl:text-3xl font-bold" dangerouslySetInnerHTML={{__html: item.fields.body}}/>
        )
      }
      
      {/* section buttons */}
      <SectionButtons 
        fields={item.fields} 
        containerStyle="grid mt-6" 
        firstBtnStyle="button inline-flex bg-transparent border-white text-gray-50 hover:bg-white hover:text-primary-800 focus:ring-gray-100"
        secondBtnStyle="button inline-flex bg-white text-primary-800 hover:bg-gray-200 focus:ring-gray-200"
      />
    </div>
  );
}