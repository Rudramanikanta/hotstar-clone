import React from 'react';
import { RxCaretRight } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GoHome } from 'react-icons/go';
import { PiFilmSlateDuotone, PiTelevisionSimpleLight } from 'react-icons/pi';
import { IoTennisballOutline } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';

export const SideBar = () => {
  const icons = [
    ["My Space", <FaRegUserCircle size={23} />],
    ["Search", <CiSearch size={23} />],
    ["Home", <GoHome size={23} />],
    ["TV", <PiTelevisionSimpleLight size={23} />],
    ["Movies", <PiFilmSlateDuotone size={23} />],
    ["Sports", <IoTennisballOutline size={23} />],
    ["Categories", <BiCategory size={23} />]
  ];

  return (
    <div className='fixed left-0 flex flex-col justify-between h-screen text-white z-2 hover:w-[50%] bg-opacity-90'>
      <div className='left-0 w-full h-full p-4 bg-gradient-to-r from-black via-gray-900 bg-opacity-95'> {/* increased opacity to 95 */}
        <div className='mb-20'>
          <img className='mb-4' src='https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg' alt='Logo' />
          <div id='sub' className='flex items-center content-center px-2 py-1 text-sm align-middle rounded-lg bg-opacity-90 text-neutral-500 w-fit'>
            <p className='inline'>Subscribe</p>
            <span><RxCaretRight /></span>
          </div>
        </div>
        <div className='flex flex-col justify-between ml-5 align-middle group/main gap-y-10'>
          {
            icons.map((value, index) => (
              <div key={index} className='flex gap-x-10 group/sub hover:cursor-pointer'> {/* added hover cursor pointer */}
                <div className='group-hover/sub:scale-125'>{value[1]}</div>
                <p className='hidden transition duration-300 ease-out group-hover/sub:scale-125 animate group-hover/main:block'>{value[0]}</p>
               
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};