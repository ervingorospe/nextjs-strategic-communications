import * as TitleComponent from 'components/title-tags'
import { formatComponentName } from 'lib/component-name'

export default function Titles({ fields, titleStyle, subtitleStyle, titleTag, subtitleTag }) {
  const TitleType = !titleTag || titleTag === 'default' ? TitleComponent[formatComponentName('h1')] : TitleComponent[formatComponentName(titleTag)]; 
  const SubTitleType = !subtitleTag || subtitleTag === 'default' ? TitleComponent[formatComponentName('h2')] : TitleComponent[formatComponentName(subtitleTag)]; 

  return (
    <>
      {
        fields.title && TitleType && (
          <TitleType titleStyle={titleStyle} data={fields.title}/>
        )
      }
      
      {
        fields.subtitle && SubTitleType && (
          <SubTitleType titleStyle={subtitleStyle} data={fields.subtitle}/>
        )
      }
    </>
  );
}