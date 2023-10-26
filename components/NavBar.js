import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'
import DisplayModeToggle from './DisplayModeToggle'

const NavBar = () => {
  return (
    <div className='flex sm:flex-row sm:items-center sm:justify-between w-full mb-4 sm:mb-16 pt-3'>
      <Link href='/' className='flex items-center gap-5'>
        <div className=' rounded-xl overflow-hidden'>
          <Image src='https://i.ibb.co/bzDY1ZS/logo.png' alt='logo'
            width={75} height={75}/>
        </div>
        <p className='text-lg sm:text-xl hidden sm:block'>GrowwStonks</p>
      </Link>
      <div className='w-full sm:w-auto sm:flex-grow sm:pl-4'>
        <SearchBar/>
      </div>
      <div className='sm:pl-4'>
        <DisplayModeToggle/>
      </div>
    </div>
  );
};
export default NavBar;
