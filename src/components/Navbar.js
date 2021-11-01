import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <nav className='bg-gray-300 px-4 py-2 w-full'>
      <div className='flex justify-between'>
        <Image src='/favicon.ico' width={40} height={30} alt='Logo' />
        <button className='px-5 py-2 text-white bg-blue-500 rounded w-30'>
          New Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
