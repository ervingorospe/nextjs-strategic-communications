/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ButtonComponent, LinkComponent } from 'components'
import { getItem } from 'api/collections'
import { formatRouteName } from 'lib/route-name'

export default function NavBar({ navParams, mainMenu, actionButtons }) {
  const router = useRouter()
  const mainLinks = _.filter(_.get(mainMenu, 'items'), data => data.parentId === 0 && data.fields.showInNavigation)
  const activeActionButtons = _.filter(_.get(actionButtons, 'items'), data => data.fields.active)

  const fetchItems = async (btnDetails) => {
    if (_.get(btnDetails, 'fields.button.url')) {
      if (_.get(btnDetails, 'fields.button.target')) {
        return window.open (_.get(btnDetails, 'fields.button.url'), _.get(btnDetails, 'fields.button.target'));
      }

      return router.push(_.get(btnDetails, 'fields.button.url'))
    }

    const { items } = await getItem(_.get(btnDetails, 'fields.buttonPageLink'))
    const slug = _.get(items[0], 'fields.slug') || formatRouteName(_.get(items[0], 'name'))
    return router.push(slug)
  }

  const navLink = async (details) => {
    if (details.fields.pageLink) {
      const { items } = await getItem(details.fields.pageLink)
      const data = items[0]
      return router.push(_.get(data, 'fields.nav.text') || (_.get(data, 'fields.slug') || formatRouteName(data.name)))
    }
   
    const route = details.fields.slug || formatRouteName(details.name)
    return router.push(_.get(details, 'fields.nav.url') || route)
  }

  return (
    <div className={`relative ${navParams.bgColor}`}>
      <div className="relative py-6">
        <Popover>
          <div className="mx-auto max-w-full container">
            <nav className="relative flex items-top justify-between" aria-label="Global">
              <div className="w-full">
                <header className="flex w-full justify-between">
                  <Link href="/" passHref>
                    <div className="w-48 lg:w-full justify-self-start cursor-pointer">
                      <span className="sr-only">Strategic Communications</span>
                      <Image
                        alt="Strategic Communications"
                        src={navParams.image}
                        height={10}
                        width={100}
                        className="image"
                      />
                    </div>
                  </Link>
                  <div className="flex items-center md:hidden">
                    <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-100 hover:bg-primary-600">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </header>
              </div>
              <div className="hidden md:flex items-center">
                <div className="grid">
                  <div className="flex py-2  items-center md:space-x-5 justify-end">
                    <span className={`text-base lg:text-lg font-semibold ${navParams.textColor}`}>
                      <i className="fa-solid fa-phone"/> 225-768-0759
                    </span>
                    {
                      activeActionButtons && activeActionButtons.length > 0 && (
                        activeActionButtons.map(button => {
                          const btnName = _.get(button, 'fields.button.text') || button.name
                          const btnLink = _.get(button, 'fields.buttonPageLink')

                          return <ButtonComponent 
                            classStyle={`button inline-flex ${navParams.btnBgColor}`} 
                            btnName={btnName} 
                            btnLink={btnLink} 
                            btnUrl={_.get(button, 'fields.button.url')} 
                            btnTarget={_.get(button, 'fields.button.target')}
                            key={btnName}/>
                        })
                      )
                    }
                  </div>
                  <div className="flex md:space-x-10 mt-2">
                    {mainLinks.map((item) => {
                      return <LinkComponent details={item} classStyle={`font-medium ${navParams.textColor}`} key={item.name}/>
                    })}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="w-1/2">
                    <Image
                      src="https://fluxconsole.com/files/item/1234/153229/logo.svg"
                      alt="Strategic Communications"
                      layout='responsive'
                      height="0"
                      width="100"
                      className="image"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 py-6">
                  {mainLinks.map((item) => (
                    <Popover.Button onClick={() => navLink(item)} key={item.name} className="grid w-full text-left">
                      <a key={item.name}  className="block px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Popover.Button>
                  ))}
                </div>
                <div className="grid w-full">
                  {
                    activeActionButtons.length > 0 && (
                      activeActionButtons.map(button => {
                        const btnName = _.get(button, 'fields.button.text') || button.name

                        return (
                          <Popover.Button onClick={() => { fetchItems(button) }} key={button.name}>
                            <a
                              className="block w-full px-5 py-3 bg-primary-600 text-center text-gray-50 hover:opacity-80"
                            >
                              {btnName}
                            </a>
                          </Popover.Button>
                        )
                      })
                    )
                  }
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}