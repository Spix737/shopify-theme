import React, { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SearchBar from './SearchBar';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  let completeButtonRef = useRef(null)
  return (
    <div className='relative'>
      <div className='cursor-pointer'>
        <svg onClick={() => setIsOpen(true)}
          className={`item-center`} class="icon-mobile-nav " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">      <path d="M2.00024 6H24.0002" stroke="currentColor" stroke-width="1.5"></path>      <path d="M2 13H24" stroke="currentColor" stroke-width="1.5"></path>      <path d="M2.00024 20H24.0002" stroke="currentColor" stroke-width="1.5"></path>    </svg>
      </div>

      <Transition show={isOpen} >
        <Dialog
          initialFocus={completeButtonRef}
          onClose={() => {setIsOpen(false); setAboutOpen(false)}}
          className="relative z-30"
        >

          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-1600"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-1600"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/30 opacity-80" aria-hidden="true" />

          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-400 sm:duration-700"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-400 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >

            {/* Full-screen scrollable container */}
            <div className="fixed text-[46321f] overflow-x-hidden text-lg font-light top-0 left-0 flex justify-center min-h-full transition bg-[#eeece8] w-80 border-[0.5px] border-r-black">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="flex flex-col py-6 mx-auto space-x-1 mr-4 bg-[#eeece8] rounded w-72">
                <div className=''>
                  <Dialog.Title className='flex flex-row items-center px-1 pb-5 space-x-2 text-sm cursor-pointer'>
                    <svg class="icon-user " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M4.95898 21.221C6.66657 20.2309 8.48298 19.4416 10.372 18.869C11.209 18.56 11.3 16.64 10.7 15.98C9.83398 15.027 9.09998 13.91 9.09998 11.214C8.99795 10.1275 9.36642 9.04944 10.1121 8.25272C10.8578 7.45599 11.9092 7.01703 13 7.047C14.0908 7.01703 15.1422 7.45599 15.8879 8.25272C16.6335 9.04944 17.002 10.1275 16.9 11.214C16.9 13.914 16.166 15.027 15.3 15.98C14.7 16.64 14.791 18.56 15.628 18.869C17.517 19.4416 19.3334 20.2309 21.041 21.221" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <a href='' className='focus:outline-none'>My Account</a>
                  </Dialog.Title>
                </div>
                <div className='px-2 py-1 rounded outline outline-1 outline-[#cdc9c0]'>
                  <SearchBar />
                </div>
                <a className='pt-5 pb-2' href=''>Shop</a>
                <a className='py-2' href=''>Subscription</a>
                <div onClick={() => setAboutOpen(true)} className='flex flex-row items-center cursor-pointer place-content-between'>
                  <p className='py-2' href=''>About Us</p>
                  <svg class="icon-chevron-small -rotate-90" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor"></path></svg>
                </div>
                <a className='py-2' href=''>Contact</a>
                {/* ... */}
              </Dialog.Panel>
            </div>
          </Transition.Child>

          {aboutOpen &&
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-400 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-400 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="fixed text-[#46321f] text-lg font-light top-0 left-0 flex justify-center min-h-full transition w-80 border-[0.5px] bg-[#eeece8] border-r-black">
                {/* The 2nd (ABOUT US) dialog panel  */}

                <Dialog.Panel className="flex flex-col py-6 mx-auto space-x-1 mr-4 bg-[#eeece8] rounded w-72">
                  <div className=''>
                    <Dialog.Title className='relative flex flex-row items-center justify-center px-1 pb-5 space-x-2 text-lg border cursor-pointe border-b-[#cdc9c0] border-t-0 border-l-0 border-r-0'>
                      <svg onClick={() => setAboutOpen(false)} class="w-8 h-[9px] flex-no-shrink absolute left-0 top-[5px] rotate-90" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 3 6' fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor"></path></svg>
                      <a href='' className='focus:outline-none'>About Us</a>
                    </Dialog.Title>
                  </div>
                  <a className='py-3 pt-5' href=''>Wholesale</a>
                  <a className='py-1' href=''>Journal</a>
                  {/* ... */}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          }
        </Dialog>
      </Transition>
      {isOpen &&
        <div className={`z-50 ${isOpen ? 'opacity-100' : 'opacity-0'} text-xl fixed top-4 right-12 ease-in-out duration-300 text-[#cdc9c0]`}>
          <svg onClick={() => function (event) { setIsOpen(false); setAboutOpen(false) }}
            class="icon-close " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.5"></path></svg>
        </div>
      }
    </div>
  )
}

