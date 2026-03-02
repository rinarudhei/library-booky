'use client';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
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
import { useAppDispatch, useAppSelector } from '@/services/stores/store';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { generateAvatarFallback } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { clearCurrentUser } from '../auth/userSlice';
import { clearToken } from '../auth/authSlice';

export const Navbar = () => {
  const [openSearchField, setOpenSearchField] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const isLargeIsh = useMedia({ minWidth: '640px' });
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    if (user.id) {
      setIsLoggedIn(true);
    }
  }, [user]);

  React.useEffect(() => {
    if (isLargeIsh && isLoggedIn) {
      setOpenSearchField(true);
    } else {
      setOpenSearchField(false);
    }
  }, [isLargeIsh]);

  const handleCloseSearchField = () => {
    setOpenSearchField((prev) => !prev);
    setSearchText('');
  };

  const handleLogout = () => {
    dispatch(clearCurrentUser());
    dispatch(clearToken());
  };

  return (
    <div className='flex-center fixed top-0 z-50 w-screen shadow-[0px_0px_20px_0px_#CBCACA40]'>
      <nav
        className={clsx(
          'flex h-16 w-full max-w-360 flex-row items-center justify-between bg-white px-4 sm:h-20 sm:px-12 lg:px-30',
          openSearchField && 'gap-4'
        )}
      >
        <Link href='/' className='flex-center gap-3.75'>
          <div className='flex-center h-10 w-10 sm:h-10.5 sm:w-10.5'>
            <Image
              src='/icons/Booky.svg'
              alt='Booky app Icon SVG'
              width={42}
              height={42}
              loading='eager'
            />
          </div>
          {isLargeIsh && (
            <h1 className='text-display-md font-bold text-neutral-950'>
              Booky
            </h1>
          )}
        </Link>

        {/* Login/Register Button*/}
        {isLargeIsh && isLoggedIn ? (
          <></>
        ) : (
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
        )}

        {/* Search input field */}
        {isLargeIsh && !isLoggedIn ? (
          <></>
        ) : (
          <>
            <InputGroup
              className={clsx(
                'flex-center h-10 w-full max-w-66.25 gap-1.5 rounded-full border border-neutral-300 shadow-none md:h-11 md:max-w-100 lg:max-w-125',
                !openSearchField && 'hidden'
              )}
            >
              <InputGroupInput
                value={searchText}
                placeholder='Search book'
                className='w-full text-start text-sm font-medium -tracking-[0.03rem] text-neutral-950 placeholder:text-neutral-600'
                onChange={(e) => setSearchText(e.target.value)}
              />
              <InputGroupAddon align={'inline-start'}>
                <div className='flex-center h-5 w-5'>
                  <Search size={20} />
                </div>
              </InputGroupAddon>
            </InputGroup>
            {!isLargeIsh && (
              <button
                className={clsx(
                  'h-6 w-6 cursor-pointer',
                  !openSearchField && 'hidden'
                )}
                onClick={handleCloseSearchField}
              >
                <X width={24} height={24}></X>
              </button>
            )}
          </>
        )}

        {/* Menus */}
        {isLargeIsh && !isLoggedIn ? (
          <></>
        ) : (
          <div
            className={clsx(
              'flex-center gap-4 lg:gap-6',
              !isLargeIsh && openSearchField && 'hidden'
            )}
          >
            {isLargeIsh && isLoggedIn ? (
              <></>
            ) : (
              <Search
                size={24}
                onClick={() => setOpenSearchField((prev) => !prev)}
              />
            )}
            <div className='flex-center relative h-7 w-7 cursor-pointer duration-300 hover:scale-125'>
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
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className='flex-center cursor-pointer gap-4'>
                  <Avatar size='default'>
                    <AvatarImage
                      src={user.profilePhoto}
                      alt='User Profile Picture'
                      width={40}
                      height={40}
                      className='object-contain'
                    />
                    <AvatarFallback>
                      {generateAvatarFallback(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  {isLargeIsh && (
                    <>
                      <p className='text-lg font-semibold -tracking-[0.02rem] text-neutral-950'>
                        {user.name}
                      </p>
                      <ChevronDown size={24} />
                    </>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link
                        href='/auth'
                        className='text-md cursor-pointer font-semibold tracking-[0.02rem] text-neutral-950'
                        onClick={handleLogout}
                      >
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href='/auth'
                        className='text-md cursor-pointer font-semibold tracking-[0.02rem] text-neutral-950'
                        onClick={handleLogout}
                      >
                        Borrowed List
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href='/auth'
                        className='text-md cursor-pointer font-semibold tracking-[0.02rem] text-neutral-950'
                        onClick={handleLogout}
                      >
                        Reviews
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild>
                      <Link
                        href='/auth'
                        className='text-md cursor-pointer font-semibold tracking-[0.02rem] text-[#ee1d52]'
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Dialog>
                <DialogTrigger>
                  <Menu size={24} />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>
                    <div className='item-center flex justify-start gap-3'>
                      <div className='flex-center h-8 w-8'>
                        <Image
                          src='/icons/Booky.svg'
                          alt='Booky app Icon SVG'
                          width={42}
                          height={42}
                          loading='eager'
                        />
                      </div>
                      <h1 className='text-xl font-bold text-neutral-950'>
                        Booky
                      </h1>
                    </div>
                  </DialogTitle>
                  <DialogClose asChild>
                    <Link href='/auth' className='text-sm font-semibold'>
                      Login
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link
                      href='/auth/?register=true'
                      className='text-sm font-semibold'
                    >
                      Register
                    </Link>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};
