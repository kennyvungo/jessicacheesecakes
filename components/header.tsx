import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col fixed items-center bg-orange h-1/6 bg-blue-500 text-[#3B3B3B] font-sans w-screen z-10 min-h-24 sm:min-h-10 justify-around">
      <div>
        <div className="w-3/5 h-1/5">Moo Moo's Cheesecakes (logo)</div>
      </div>
      <div className='flex flex-row justify-between w-3/5'>
      <Link href="/"> HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact"> CONTACT</Link>
      </div>
    </div>
  );
}

export default Header