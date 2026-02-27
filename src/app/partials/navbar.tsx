'use client';
import { Menu, Search, X } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import clsx from 'clsx';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

export const Navbar = () => {
  const [openSearchField, setOpenSearchFiled] = React.useState(false);

  return (
    <nav
      className={clsx(
        'fixed top-0 flex h-16 w-full max-w-360 flex-row items-center justify-between bg-white px-4',
        openSearchField && 'gap-4'
      )}
    >
      <div className='flex-center h-10 w-10'>
        <Image
          src='/icons/Booky.svg'
          alt='Booky app Icon SVG'
          width={40}
          height={40}
          loading='eager'
        />
      </div>

      {/* Menus */}
      <div className={clsx('flex-center gap-4', openSearchField && 'hidden')}>
        <Search size={24} onClick={() => setOpenSearchFiled((prev) => !prev)} />
        <div className='flex-center relative h-7 w-7'>
          <div className=''>
            <Image
              width={20}
              height={20}
              src='/icons/shopping-bag.svg'
              alt='shopping bag svg'
              className='h-auto w-full'
            />
          </div>
          <Badge className='absolute -top-1 -right-2 h-5 w-5 gap-1.75 bg-[#ee1d52] p-1.75 text-xs'>
            1
          </Badge>
        </div>
        <Menu size={24} />
      </div>

      {/* Search input field */}
      <InputGroup
        className={clsx(
          'flex-center h-10 w-full max-w-66.25 gap-1.5 rounded-full border border-neutral-300 shadow-none',
          !openSearchField && 'hidden'
        )}
      >
        <InputGroupInput
          placeholder='Search book'
          className='w-full text-start text-sm font-medium tracking-[0.03rem] text-neutral-950 placeholder:text-neutral-600'
        />
        <InputGroupAddon align={'inline-start'}>
          <div className='flex-center h-5 w-5'>
            <Search size={20} />
          </div>
        </InputGroupAddon>
      </InputGroup>

      <button
        className={clsx('h-6 w-6 cursor-pointer', !openSearchField && 'hidden')}
        onClick={() => setOpenSearchFiled((prev) => !prev)}
      >
        <X width={24} height={24}></X>
      </button>
    </nav>
  );
};
