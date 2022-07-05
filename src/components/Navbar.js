import React, { useEffect } from 'react'
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import { useState } from 'react';


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

  return (
    <>
      {/* Header */}
      <div className={`sticky left-2 z-50 bg-transparent top-0 h-[51px] ${visible ? ' border border-t-0 border-l-0 border-r-0 border-b-[#cdc9c0] border-b-0' : ''}`}>
        <div className="flex w-full max-w-6xl mx-auto transition">
          <div className="absolute left-0 top-[13px] lg:top-2">
            <div className='block lg:hidden' >
              <Sidebar />
            </div>
            <div className='hidden lg:block' >
              <SearchBar />
            </div>
          </div>
          <div className='absolute flex space-x-4 bg-[#eeece8] right-2 top-[13px]'>
            <svg class="icon-user " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 24.5C19.3513 24.5 24.5 19.3513 24.5 13C24.5 6.64873 19.3513 1.5 13 1.5C6.64873 1.5 1.5 6.64873 1.5 13C1.5 19.3513 6.64873 24.5 13 24.5Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M4.95898 21.221C6.66657 20.2309 8.48298 19.4416 10.372 18.869C11.209 18.56 11.3 16.64 10.7 15.98C9.83398 15.027 9.09998 13.91 9.09998 11.214C8.99795 10.1275 9.36642 9.04944 10.1121 8.25272C10.8578 7.45599 11.9092 7.01703 13 7.047C14.0908 7.01703 15.1422 7.45599 15.8879 8.25272C16.6335 9.04944 17.002 10.1275 16.9 11.214C16.9 13.914 16.166 15.027 15.3 15.98C14.7 16.64 14.791 18.56 15.628 18.869C17.517 19.4416 19.3334 20.2309 21.041 21.221" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <svg class="icon-bag " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none"><path d="M6.91699 10.993V4.95104C6.91699 2.72645 8.70785 0.923065 10.917 0.923065C13.1261 0.923065 14.917 2.72645 14.917 4.95104V10.993" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.131 23.0769C19.6697 23.0769 20.917 21.8209 20.917 20.2714C20.9174 20.1285 20.9067 19.9857 20.885 19.8445L19.221 8.95686C19.0463 7.81137 18.0679 6.96551 16.917 6.96503H4.917C3.76678 6.96536 2.78859 7.81016 2.613 8.95485L0.949001 19.8545C0.927336 19.9958 0.916636 20.1386 0.917001 20.2815C0.92251 21.827 2.16823 23.0769 3.703 23.0769H18.131Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
        </div>
      </div>

      <div className='flex justify-center pt-5 mx-auto mb-4 lg:mb-12 lg:pt-0'>
        <img
          src='https://cdn.shopify.com/s/files/1/0248/3425/files/editions-modern-logo_71b1c742-7220-472e-be1f-5a417686b4eb_320x76.png?v=1590526061' alt=''
          className='w-[160px]' />
      </div>


      <div className='bg-[#eeece8] sticky z-40 top-0 flex flex-row justify-center lg:pt-3 border border-t-0 border-l-0 border-r-0 border-b-[#cdc9c0] border-b-1'>
        <div className="pb-3 space-x-6 tracking-widest font-medium text-[.8125rem] lg:flex">
          <a href="#" className='hidden navbar-item lg:block '>SHOP</a>
          <a href="#" className='hidden navbar-item lg:block '>SUBSCRIPTION</a>
          <a href="#" className='hidden navbar-item lg:block '>ABOUT US</a>
          <a href="#" className='hidden navbar-item lg:block '>CONTACT</a>
        </div>
      </div>
    </>
  )
}
