import { useState, useEffect } from 'react'
import _ from 'lodash'
import { NavBar, Footer, MobileActionButton } from 'components'
import { getCollection } from 'api/collections'
import { collectionName } from 'constants'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Cookies from 'js-cookie'


const defaultNavParams = {
  bgColor: 'bg-primary-900', 
  textColor: 'text-white hover:text-gray-200', 
  btnBgColor: 'bg-white hover:bg-gray-200 text-primary-800 hover:text-primary-600',
  image: 'https://fluxconsole.com/files/item/1234/153230/footer-logo.svg'
}

const onScrolltNavParams = {
  bgColor: 'bg-primary-900', 
  textColor: 'text-white hover:text-gray-200', 
  btnBgColor: 'bg-white hover:bg-gray-200 text-primary-800 hover:text-primary-600',
  image: 'https://fluxconsole.com/files/item/1234/153230/footer-logo.svg'
}

export default function PageLayout({children, navigationFields}) {
  const [navParams, setNavParams] = useState(defaultNavParams)
  const [showActionBtn, setShowActionBtn] = useState(false)
  const [mainMenu, setMainMenu] = useState([])
  const [actionButtons, setActionButtons] = useState([])
  const [actionSections, setActionSections] = useState([])
  const [footerLocations, setFooterLocations] = useState([])
  const [locations, setLocations] = useState([])
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    setShowCookie(Cookies.get('wpcc') !== 'dismissed')

    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setNavParams(defaultNavParams)
        setShowActionBtn(false)
      }

      if(window.pageYOffset > 0) {
        setNavParams(onScrolltNavParams)
        setShowActionBtn(true)
      }
    };

    const getNavigation = async () => {
      const { collections } = await getCollection('26314,26288,26313,26284,26283')
      setActionButtons(_.find(collections, data => data.name === collectionName.callToActionButtons))
      setMainMenu(_.find(collections, data => data.name === collectionName.navigation))
      setActionSections(_.find(collections, data => data.name === collectionName.callToActionSections))
      setFooterLocations(_.find(collections, data => data.name === collectionName.footerLocationInfo))
      setLocations(_.find(collections, data => data.name === collectionName.locations))
    }

    getNavigation()
  }, [])
  

  const hideCookie = () => {
    Cookies.set('wpcc', 'dismissed', { expires: 0.3 })
    setShowCookie(false);
  }

  return (
    <div className="min-h-screen antialiased mx-auto max-w-[1920px]">
      <div className='fixed w-full max-w-[1920px] z-50'>
        <NavBar navParams={navParams} mainMenu={mainMenu} actionButtons={actionButtons}/>
      </div>

      <main className="overflow-x-hidden overflow-y-visible">
        {children}
      </main>

      {
        !_.get(navigationFields, 'hideFooter') && (
          <Footer 
            actionSections={actionSections} 
            footerLocations={footerLocations}
            locations={locations}
            mainMenu={mainMenu}
            navigationFields={navigationFields}
            actionButtons={actionButtons}
          />
        )
      }
      
      {/* mobile action button */}
      {
        actionButtons.items && !_.get(navigationFields, 'hideCallToActionSections') && (
          <MobileActionButton actionButton={_.find(actionButtons.items, data => data.fields.active)} show={showActionBtn}/>
        )
      }

      {/* cookie action button */}
      {
        showCookie && (
          <Transition
            as={Fragment}  
            appear={showCookie} 
            show={showCookie}
            enter="transition-all ease-in duration-150 "
            enterFrom="-bottom-16"
            enterTo="bottom-0"
            leave="transition-all ease-out duration-200 "
            leaveFrom="bottom-0"
            leaveTo="-bottom-16"
          >
            <div className="bg-white border font-medium sm:rounded-md fixed z-50 bottom-0 sm:left-5 sm:bottom-5 p-7">
              <div className="max-w-[280px]">
                <span className="">This website uses cookies to ensure you get the best experience on our website. </span>
                <a className="underline text-sm md:text-base inline-flex items-center justify-center group text-red-700 hover:text-red-800" href="https://www.scbhuey.com/cookie-policy" rel="noreferrer" target="_blank"> View Cookie Policy</a>
                <button onClick={() => hideCookie()} className="mt-4 button inline-flex w-full bg-primary-800 hover:bg-primary-600 text-white hover:text-gray-200">
                  Got it!
                </button>
              </div>
            </div>
          </Transition>
        )
      }
      
    </div>
  );
}