import React from 'react'
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Navbar() {
  return (
    <div className="z-50 max-w-6xl pt-10 mx-auto bg-white ">
      {/* Header */}
      <div className="flex justify-between ">
        <div className='sticky top-0'>
          <div className='block lg:hidden' >
            <Sidebar />
          </div>
          <div className='hidden lg:block' >
            <SearchBar />
          </div>
        </div>

        <img
          src='https://cdn.shopify.com/s/files/1/0248/3425/files/editions-modern-logo_71b1c742-7220-472e-be1f-5a417686b4eb_320x76.png?v=1590526061' alt=''
        />
        <div className='sticky top-0 space-x-3 bg-orange-400'>
          <AccountCircleIcon className='text-2xl' />
          <ShoppingBasketIcon className='' />
        </div>
      </div>
      <div className="sticky top-0 flex justify-center invisible pb-4 mt-20 space-x-5 border border-t-0 border-l-0 border-r-0 md:visible border-b-yellow-800 border-b-1">
        <a href="#">Shop</a>
        <a href="#">Subscription</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}
