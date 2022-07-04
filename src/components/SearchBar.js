import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <form method="POST" action="#" class='absolute top-0 flex items-center border border-b-yellow-800 border-b-1 border-l-0 border-r-0 border-t-0'>
      <SearchIcon />
      <input type="text" name="search" placeholder="Search" className='w-full max-w-[140px] border-transparent focus:max-w-[190px] focus:border-transparent focus:ring-0' />
    </form>
  )
}
