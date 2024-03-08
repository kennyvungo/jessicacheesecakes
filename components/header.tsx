import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row fixed items-center bg-orange h-1/6 bg-blue-500 text-[#3B3B3B] font-sans w-screen z-10 min-h-24 sm:min-h-10 justify-around">
      <Link href="/"> HOME</Link>
      <Link href="/contact"> CONTACT</Link>
    </div>
  );
}

export default Header