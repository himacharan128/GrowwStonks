import React from "react";
import Link from 'next/link';
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full mb-4 sm:mb-16 pt-3">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-5">
        <div className="rounded-xl overflow-hidden">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </div>

        <p className="text-2xl font-bold sm:text-xl hidden sm:block">GrowwStonks</p>
      </Link>

      {/* Search bar */}
      <div className="px-4 py-1 sm:w-3/5">
        <SearchBar />
      </div>

      {/* Theme changing button */}
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
