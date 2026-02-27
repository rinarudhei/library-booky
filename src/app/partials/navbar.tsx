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
import { Button } from '@/components/ui/button';
import useMedia from 'use-media';
import Link from 'next/link';

export const Navbar = () => {
  const [openSearchField, setOpenSearchField] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const isLargeIsh = useMedia({ minWidth: '640px' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (isLargeIsh) {
      setOpenSearchField(true);
    } else {
      setOpenSearchField(false);
    }
  }, [isLargeIsh]);

  const handleCloseSearchField = () => {
    setOpenSearchField((prev) => !prev);
    setSearchText('');
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 flex h-16 w-full max-w-360 flex-row items-center justify-between bg-white px-4 sm:h-20 sm:px-12 lg:px-20 xl:px-30',
        openSearchField && 'gap-4'
      )}
    >
      <div className='flex-center h-10 w-10 sm:h-10.5 sm:w-10.5'>
        <Image
          src='/icons/Booky.svg'
          alt='Booky app Icon SVG'
          width={42}
          height={42}
          loading='eager'
        />
      </div>

      {/* Login/Register */}
      <div className='sm:flex-center hidden gap-4'>
        <Button
          asChild
          variant={'outline'}
          size={'default'}
          className='w-40.75'
        >
          <Link href='/auth'>Login</Link>
        </Button>
        <Button
          asChild
          variant={'default'}
          size={'default'}
          className='w-40.75'
        >
          <Link href='/auth/?register=true'>Register</Link>
        </Button>
      </div>

      {/* Menus */}
      {isLargeIsh && !isLoggedIn ? (
        <></>
      ) : (
        <div className={clsx('flex-center gap-4', openSearchField && 'hidden')}>
          <Search
            size={24}
            onClick={() => setOpenSearchField((prev) => !prev)}
          />
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
      )}

      {/* Search input field */}
      {isLargeIsh && !isLoggedIn ? (
        <></>
      ) : (
        <>
          <InputGroup
            className={clsx(
              'flex-center h-10 w-full max-w-66.25 gap-1.5 rounded-full border border-neutral-300 shadow-none',
              !openSearchField && 'hidden'
            )}
          >
            <InputGroupInput
              value={searchText}
              placeholder='Search book'
              className='w-full text-start text-sm font-medium tracking-[0.03rem] text-neutral-950 placeholder:text-neutral-600'
              onChange={(e) => setSearchText(e.target.value)}
            />
            <InputGroupAddon align={'inline-start'}>
              <div className='flex-center h-5 w-5'>
                <Search size={20} />
              </div>
            </InputGroupAddon>
          </InputGroup>

          <button
            className={clsx(
              'h-6 w-6 cursor-pointer',
              !openSearchField && 'hidden'
            )}
            onClick={handleCloseSearchField}
          >
            <X width={24} height={24}></X>
          </button>
        </>
      )}
    </nav>
  );
};
