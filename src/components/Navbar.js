import React from 'react'
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Navbar() {
  return (
    <>
      {/* Header */}
      <div className='sticky left-0 z-50 top-0 bg-[#eeece8]'>
        <div className="flex w-full max-w-6xl mx-auto transition ">
          <div className="absolute left-0">
            <div className='sticky top-0'>
              <div className='block lg:hidden' >
                <Sidebar />
              </div>
              <div className='hidden lg:inline-block' >
                <SearchBar />
              </div>
            </div>
          </div>
          <div className='absolute space-x-3 bg-[#eeece8] right-0'>
            <AccountCircleIcon className='text-2xl' />
            <ShoppingBasketIcon className='' />
          </div>
        </div>
      </div>

        <div className='flex justify-center pt-2 mx-auto mb-12'>
          <img
            src='https://cdn.shopify.com/s/files/1/0248/3425/files/editions-modern-logo_71b1c742-7220-472e-be1f-5a417686b4eb_320x76.png?v=1590526061' alt=''
            className='w-[160px]' />
        </div>


        <div className='bg-[#eeece8] sticky top-0 z-40 flex flex-row justify-center mt-10 border border-t-0 border-l-0 border-r-0 border-b-yellow-800 border-b-1'>
          <div className="hidden pb-4 mt-4 space-x-6 bg-inherit lg:flex">
            <a href="#" className='transition duration-200 ease-in-out hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border hover:border-b-amber-900'>SHOP</a>
            <a href="#" className='transition duration-200 ease-in-out hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border hover:border-b-amber-900'>SUBSCRIPTION</a>
            <a href="#" className='transition duration-200 ease-in-out hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border hover:border-b-amber-900'>ABOUT US</a>
            <a href="#" className='transition duration-200 ease-in-out hover:border-l-0 hover:border-r-0 hover:border-t-0 hover:border hover:border-b-amber-900'>CONTACT</a>
          </div>
        </div>
    </>
  )
}
