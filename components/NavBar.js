import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'
import DisplayModeToggle from './DisplayModeToggle'

const NavBar = () => {
  return (
    <div className=' flex flex-between w-full mb-16 pt-3 pl-4 pr-4'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='https://i.ibb.co/bzDY1ZS/logo.png'
          alt='logo'
          width={75}
          height={75}
          className='object-contain'
        />
        <p>GrowwStonks</p>
      </Link>
      <SearchBar/>
      <DisplayModeToggle/>
    </div>
  )
}

export default NavBar