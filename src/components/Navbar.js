import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'


export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 140)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setIsHovering(false);
    }, 1000)
  };

  return (
    <>
      {/* Header */}
      <div className={`sticky flex w-full max-w-6xl mx-auto left-2 z-30 pointer-events-none bg-[#eeece8] lg:bg-transparent top-0 h-[52px] lg:border-b-0 ${visible ? 'border border-t-0 border-l-0 border-r-0 border-b-[#cdc9c0] border-b-1' : ''}`}>
        <div className={`absolute left-0 top-[12px] pointer-events-auto ${visible ? 'lg:top-[6px]' : 'lg:top-[6px]'}`}>
          <div className='block lg:hidden' >
            <Sidebar />
          </div>
          <div className='hidden lg:block' >
            <SearchBar />
          </div>
        </div>
        <div className='absolute flex space-x-4 bg-[#eeece8] right-2 top-[12px]'>
          <svg class="icon-user " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M4.95898 21.221C6.66657 20.2309 8.48298 19.4416 10.372 18.869C11.209 18.56 11.3 16.64 10.7 15.98C9.83398 15.027 9.09998 13.91 9.09998 11.214C8.99795 10.1275 9.36642 9.04944 10.1121 8.25272C10.8578 7.45599 11.9092 7.01703 13 7.047C14.0908 7.01703 15.1422 7.45599 15.8879 8.25272C16.6335 9.04944 17.002 10.1275 16.9 11.214C16.9 13.914 16.166 15.027 15.3 15.98C14.7 16.64 14.791 18.56 15.628 18.869C17.517 19.4416 19.3334 20.2309 21.041 21.221" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <svg class="icon-bag " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none"><path d="M6.91699 10.993V4.95104C6.91699 2.72645 8.70785 0.923065 10.917 0.923065C13.1261 0.923065 14.917 2.72645 14.917 4.95104V10.993" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.131 23.0769C19.6697 23.0769 20.917 21.8209 20.917 20.2714C20.9174 20.1285 20.9067 19.9857 20.885 19.8445L19.221 8.95686C19.0463 7.81137 18.0679 6.96551 16.917 6.96503H4.917C3.76678 6.96536 2.78859 7.81016 2.613 8.95485L0.949001 19.8545C0.927336 19.9958 0.916636 20.1386 0.917001 20.2815C0.92251 21.827 2.16823 23.0769 3.703 23.0769H18.131Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>

      <div className='z-40 flex justify-center pt-5 mx-auto mb-4 lg:mb-11 lg:pt-0'>
        <img
          src='https://cdn.shopify.com/s/files/1/0248/3425/files/editions-modern-logo_71b1c742-7220-472e-be1f-5a417686b4eb_320x76.png?v=1590526061' alt=''
          className='w-[160px]' />
      </div>


      <div className='bg-[#eeece8] sticky z-20 top-0 flex flex-row justify-center lg:pt-4 lg:pb-1 border border-t-0 border-l-0 border-r-0 border-b-[#cdc9c0] border-b-1'>
        <div className="pb-[16px] lg:pb-[10px] space-x-6 tracking-widest font-medium text-[.8125rem] lg:flex">
          <a href="#" className='hidden navbar-item lg:block'>SHOP</a>
          <a href="#" className='hidden navbar-item lg:block '>SUBSCRIPTION</a>
          <div onMouseOver={handleMouseOver}>
            {/* onMouseOut={handleMouseOut}> */}
            <div className='items-center hidden space-x-2 cursor-pointer lg:flex navbar-item'>
              <a href="#" className=''>ABOUT US</a>
              <svg class="icon-chevron-small " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor"></path></svg>
            </div>
            {isHovering && (
              <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} className='flex flex-col text-base tracking-normal justify-center absolute z-50 bg-[#eeece8] border border-t-1 border-l-1 border-r-1 border-[#cdc9c0] border-b-1 h-[95px] w-[132px] mt-[14px] top-15 '>
                <a className='pl-[21px] py-1 cursor-pointer hover:underline'>Wholesale</a>
                <a className='py-1 pl-6 cursor-pointer hover:underline'>Journal</a>
              </div>
            )}
          </div>
          {/*           
          <div className="relative hidden text-left lg:inline-block">
            <a className='flex items-center space-x-3 navbar-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} href=''>ABOUT US</a><svg class="icon-chevron-small " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor"></path></svg>
            {isHovering && (
              <div className='absolute text-base tracking-normal mt-[15px] pr-10 left-0 z-50 flex flex-col origin-top-right bg-[#eeece8] shadow-lg w-[138px] ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='pt-4 pl-[22px]'>
                  {({ isHovering }) => (
                    <a
                      className={`${isHovering ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                      href="/account-settings">Wholesale</a>
                  )}
                </div>
                <div className='py-4 pl-6'>
                  {({ active }) => (
                    <a
                      className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                      href="/account-settings">Journal</a>
                  )}
                </div>
              </div>
            )}
          </div> */}
          <a href="#" className='hidden navbar-item lg:block'>CONTACT</a>
        </div>
      </div>
    </>
  )
}
