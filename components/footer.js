import Image from 'next/image'
import Link from 'next/link'
import _ from 'lodash'
import { Titles, Body, SectionButtons } from 'components/section-components'
import * as FooterComponents from 'components/footer-components'
import { LinkComponent } from 'components'
import { itemName } from 'constants'
import { formatComponentName } from 'lib/component-name'

export default function Footer({ actionSections, footerLocations, locations, mainMenu, navigationFields }) {
  const actionItems = _.filter(_.get(actionSections, 'items'),  data => data.fields.active === '1')
  const footerLocatinItems = _.filter(_.get(footerLocations, 'items'),  data => data.fields.active === '1')
  const strategicLocations = _.find(_.get(locations, 'items'),  data => data.name === itemName.strategicCommunications)
  const links =  _.filter(_.get(mainMenu, 'items'), data => data.fields.showInNavigation)
  const parentLinks = _.filter(_.get(mainMenu, 'items'), data => data.parentId === 0 && data.fields.showInNavigation)
  const year = new Date().getFullYear()

  return (
    <footer className="relative w-full z-10 max-w-[1920px]">
      <svg className="bg-transparent -mt-20 lg:-mt-32 xl:-mt-44 text-primary-900" xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="Layer_2" viewBox="0 0 1332.36 126.21">
        <g id="Logos">
          <polygon points="666.18 114.17 0 60 0 126.21 1332.36 126.21 1332.36 60 666.18 114.17"/>
        </g>
      </svg>
      <div className="bg-primary-900 -mt-1 text-center pb-14 sm:pb-0">
        <section className="py-8 container relative z-1 2xl:px-24">
          {
            !_.get(navigationFields, 'hideCallToActionSections') && (
              actionItems && actionItems.length > 0 && (
                actionItems.map(item => {
                  return (
                    <div className="mt-10 md:mt-16" key={item.name}>
                      {/* title and subtitle */}
                      <Titles 
                        fields={item.fields} 
                        titleStyle="text-gray-50 text-3xl md:text-4xl xl:text-5xl"
                        subtitleStyle="mt-3 text-xl font-semibold text-primary-300 md:text-2xl xl:text-3xl"
                      />
  
                      {/* body and extrabody */}
                      <Body 
                        fields={item.fields} 
                        bodyStyle="mt-6 prose prose-lg md:prose-xl prose-primary prose-p:text-gray-100" 
                        extraBodyStyle="mt-6 prose prose-lg md:prose-xl prose-primary prose-p:text-gray-100"
                      />
  
                      {/* section buttons */}
                      <SectionButtons 
                        fields={item.fields} 
                        containerStyle="flex mt-8 px-4 justify-center space-x-2 sm:space-x-6" 
                        firstBtnStyle="button inline-flex bg-white text-primary-800 hover:bg-gray-200"
                        secondBtnStyle="button inline-flex bg-white text-primary-800 hover:bg-gray-200"
                      />
                    </div>
                  )
                })
              )
            )
          }

          {
            !_.get(navigationFields, 'hideFooterLocationInfo') && (
              footerLocatinItems && footerLocatinItems.length > 0 && (
                <div className="px-4 sm:flex mt-14 items-start justify-center space-y-7 sm:space-y-0 sm:space-x-20 md:space-x-32 lg:space-x-48">
                  {
                    footerLocatinItems.map(item => {
                      const type = formatComponentName(_.get(item, 'fields.type'))
                      const ComponentName = FooterComponents[type]
                      const contentDetails = _.get(item, 'fields.type') === 'mailing-address' ? 'mailing' : _.get(item, 'fields.type') === 'toll-free' ? 'tollFree' : _.get(item, 'fields.type');
                      
                      if (ComponentName) {
                        return <ComponentName item={item} details={strategicLocations.fields[contentDetails]} key={type} />
                      }
                    })
                  }
                </div>
              )
            )
          }
          
          <div className="mt-10 sm:mt-20 grid sm:flex items-start justify-center space-y-7 sm:space-y-0 sm:space-x-20 md:space-x-32 lg:space-x-48">
            {
              parentLinks.length > 0 && (
                parentLinks.map(parentLink => (
                    <div className="grid text-center sm:text-left" key={parentLink.name}>
                      <LinkComponent details={parentLink} classStyle="text-white text-xl md:text-2xl hover:text-gray-200"/>
                      {
                        _.filter(links, link => link.parentId === parentLink.id).length > 0 && (
                          <div className="grid mt-3 space-y-2">
                            {
                              _.filter(links, link => link.parentId === parentLink.id).map(subLink => (
                                <LinkComponent details={subLink} classStyle="text-white text-sm md:text-lg hover:text-gray-200" key={subLink.name}/>
                              ))
                            }
                          </div>
                        )
                      }
                    </div>
                  )
                )
              )
            }
          </div>
          <div className="px-14 sm:px-4 max-w-sm mx-auto mt-14 sm:mt-28 opacity-60">
            <Image
              src="https://fluxconsole.com/files/item/1234/153230/footer-logo.svg"
              alt="Strategic Communications"
              layout='responsive'
              height="0"
              width="100"
              className="image"
            />
          </div>
          <p className="flex items-center justify-center space-x-1 text-center text-sm text-primary-300 mt-10">
            <span className="inline-block">
              © {year} Strategic Communications All rights reserved. 
            </span>
            <span className="leading-0 inline-block">
              <a
                href="https://www.modiphy.com/"
                target="_blank"
                rel="noreferrer"
                title="MODIPHY® DESIGN | Advanced Applications Specialists - Industrial Coating Contractor - Baton Rouge, Louisiana"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  version="1.1"
                  id="Foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 74.3 74.3"
                  style={{ enableBackground: "new 0 0 74.3 74.3" }}
                  xmlSpace="preserve"
                  role="img"
                  aria-labelledby="modiphy-logo-title"
                >
                  <title id="modiphy-logo-title">MODIPHY® DESIGN - Strategic Communications - Targeted solutions to communication problems</title>
                  <path
                    className="path"
                    d="M74.3,28.2c0-4.6-8.3-8.5-19.5-9.6c3.7-6.2,4.8-11.6,2.3-14c-3.3-3.3-11.9-0.2-20.6,7C34.7,4.6,31.7,0,28.2,0
        c-4.6,0-8.5,8.3-9.6,19.5c-6.2-3.7-11.6-4.8-14-2.3c-3.3,3.3-0.2,11.9,7,20.6C4.6,39.5,0,42.6,0,46c0,4.6,8.3,8.5,19.5,9.6
        c-3.7,6.2-4.8,11.6-2.3,14c3.3,3.3,11.9,0.2,20.6-7c1.8,7,4.8,11.6,8.3,11.6c4.6,0,8.5-8.3,9.6-19.5c6.2,3.7,11.6,4.8,14,2.3
        c3.3-3.3,0.2-11.9-7-20.6C69.7,34.7,74.3,31.7,74.3,28.2z M61.1,45.5c-3.9,3.9-14.1,0.1-24-8.4c2,2.9,4.4,5.8,7.3,8.7
        c3.5,3.5,7.1,6.3,10.5,8.5C53,57.9,50.7,60,48.1,60c-5.5,0-10.1-9.9-11-22.9c-0.6,3.4-1,7.3-1,11.3c0,4.9,0.5,9.5,1.4,13.4
        c-3.9,1.2-7,1-8.8-0.8c-3.9-3.9-0.1-14.1,8.4-24c-2.9,2-5.8,4.4-8.7,7.3c-3.5,3.5-6.4,7.1-8.5,10.5c-3.6-1.9-5.7-4.2-5.7-6.8
        c0-5.5,9.9-10.1,22.9-11c-3.4-0.6-7.2-1-11.3-1c-4.9,0-9.5,0.5-13.4,1.4c-1.2-3.9-1-7,0.8-8.9c3.9-3.9,14.1-0.1,24,8.4
        c-2-2.9-4.4-5.8-7.3-8.7c-3.5-3.5-7.1-6.4-10.5-8.5c1.9-3.6,4.2-5.7,6.8-5.7c5.5,0,10.1,9.9,11,22.9c0.6-3.4,1-7.3,1-11.3
        c0-4.9-0.5-9.5-1.4-13.4c3.9-1.2,7-1,8.9,0.8c3.9,3.9,0.1,14.1-8.4,24c2.9-2,5.8-4.4,8.7-7.3c3.5-3.5,6.4-7.1,8.5-10.5
        c3.6,1.9,5.7,4.2,5.7,6.8c0,5.5-9.9,10.1-22.9,11c3.4,0.6,7.3,1,11.3,1c4.9,0,9.5-0.5,13.4-1.4C63.1,40.6,62.9,43.7,61.1,45.5z"
                  ></path>
                </svg>
              </a>
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
}