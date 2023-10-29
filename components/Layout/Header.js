import React from "react";
import Link from 'next/link';
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex sm:flex-row sm:items-center sm:justify-between w-full mb-4 sm:mb-16 pt-3'>
      <Link href='/' className='flex items-center gap-5'>
        <div className=' rounded-xl overflow-hidden'>
          <Image src='/images/logo.png' alt='logo'
            width={50} height={50}/>
        </div>
        <p className='text-2xl font-bold sm:text-xl hidden sm:block'>GrowwStonks</p>
      </Link>
      <div className='w-full px-4 py-1 sm:w-3/5  flex justify-center'>
        <SearchBar/>
      </div>
      <div >
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Header