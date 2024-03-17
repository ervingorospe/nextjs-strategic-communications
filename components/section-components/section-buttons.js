import _ from 'lodash'
import { ButtonComponent } from "components";

export default function SectionButtons({ fields, containerStyle, firstBtnStyle, secondBtnStyle, firstIcon, secondIcon }) {

  return (
    <div className={containerStyle}>
      {/* first button */}
      {
        _.get(fields, 'button') && (
          <ButtonComponent 
            classStyle={firstBtnStyle} 
            btnName={_.get(fields, 'button.text')} 
            btnLink={_.get(fields, 'buttonPageLink')}
            btnUrl={_.get(fields, 'button.url')}
            btnTarget={_.get(fields, 'button.target')}
            icon={firstIcon}
          />
        )
      }
      
      {/* second button */}
      {
        _.get(fields, 'button-2') && (
          <ButtonComponent 
            classStyle={secondBtnStyle} 
            btnName={_.get(fields, 'button-2.text')} 
            btnLink={_.get(fields, 'buttonPageLink-2')}
            btnUrl={_.get(fields, 'button-2.url')}
            btnTarget={_.get(fields, 'button-2.target')}
            icon={secondIcon}
          />
        )
      }
    </div>
  );
}