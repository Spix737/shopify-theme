import React, { useState, useRef } from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Dialog, Transition } from '@headlessui/react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  let completeButtonRef = useRef(null)
  return (
    <>
      {!isOpen ?
        (<>
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className={`flex cursor-pointer item-center`}
            fill='#2563EB'
            viewBox='0 0 100 80'
            width='40'
            height='40'>
            <DehazeIcon />
          </svg>
          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
            <Dialog
              open={isOpen}
              initialFocus={completeButtonRef}
              onClose={() => setIsOpen(false)}
              className="relative z-50"
            >
              {/* The backdrop, rendered as a fixed sibling to the panel container */}
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

              {/* Full-screen scrollable container */}
              <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* Container to center the panel */}
                {/* <div className="flex items-center justify-center min-h-full"> */}
                {/* The actual dialog panel  */}
                <Dialog.Panel className="max-w-sm mx-auto bg-white rounded">
                  <Dialog.Title>Complete your order</Dialog.Title>

                  {/* ... */}
                </Dialog.Panel>
              </div>
              {/* </div> */}
            </Dialog>
          </Transition>
        </>
        ) :
        (
          <button class={`text-xl left-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}
            onClick={() => setIsOpen(!isOpen)}> x </button>
        )}

    </>
  )
}
