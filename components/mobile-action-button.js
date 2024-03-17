import { ButtonComponent } from "components";
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MobileActionButton({ actionButton, show }) {

  return (
    <Transition
      as={Fragment}  
      appear={show} 
      show={show}
      enter="transition-all ease-in duration-150 "
      enterFrom="-bottom-16"
      enterTo="bottom-0"
      leave="transition-all ease-out duration-200 "
      leaveFrom="bottom-0"
      leaveTo="-bottom-16"
    >
      <div className="flex sm:hidden fixed bottom-0 z-50 w-full">
        <div className="bg-white p-2 w-full">
          <ButtonComponent 
            classStyle="button inline-flex w-full bg-primary-800 hover:bg-primary-600 text-white hover:text-gray-200" 
            btnName={_.get(actionButton, 'fields.button.text')} 
            btnLink={_.get(actionButton, 'fields.buttonPageLink')}
            btnUrl={_.get(actionButton, 'fields.button.url')}
            btnTarget={_.get(actionButton, 'fields.button.target')}
          />
        </div>
      </div>
    </Transition>
  );
}