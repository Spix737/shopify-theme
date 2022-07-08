import React from 'react'

export default function SearchBar(): JSX.Element {
  return (
    <form method="POST" action="#" className='top-0 flex items-center w-full h-9'>
      <svg className="icon-search " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07722 15.3846C12.1132 15.3846 15.3849 12.1128 15.3849 8.07692C15.3849 4.04099 12.1132 0.769226 8.07722 0.769226C4.0413 0.769226 0.769531 4.04099 0.769531 8.07692C0.769531 12.1128 4.0413 15.3846 8.07722 15.3846Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>      <path d="M18.8466 18.8461L13.4619 13.4615" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>    </svg>
      <input type="text" name="search" placeholder="Search" className='w-full text-[#46321f] font-light bg-transparent border-transparent focus:max-w-[190px] focus:border-transparent focus:ring-0'/>
      {/* class='search-bar' */}
    </form>
  )
}
