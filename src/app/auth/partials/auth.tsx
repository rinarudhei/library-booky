'use client';
import React from 'react';
import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export const Auth = () => {
  const params = useSearchParams();
  const isRegister = params.get('register');
  const [isLoginPage, setIsLoginPage] = React.useState(!isRegister);

  const toggleForm = () => {
    setIsLoginPage((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        isLoginPage ? 'mt-54.25' : 'mt-18.75',
        'mx-auto flex flex-col gap-5 pr-8.75 pl-8.5 sm:p-0',
        'max-w-100'
      )}
    >
      <Link
        href='/'
        className='flex-start flex w-fit cursor-pointer items-center gap-3'
      >
        <div>
          <Image
            src='/icons/Booky.svg'
            alt='Booky Icon svg'
            width={33}
            height={33}
            className='h-auto w-full'
          />
        </div>
        <h1 className='text-[25px] leading-8.25 font-bold text-neutral-950'>
          Booky
        </h1>
      </Link>
      <div className='flex-start flex-col items-center gap-0.5 sm:gap-2'>
        <h2 className='text-display-xs sm:text-display-sm font-bold text-neutral-950 sm:-tracking-[0.02rem]'>
          {isLoginPage ? 'Login' : 'Register'}
        </h2>
        <p className='sm:text-md text-sm font-semibold -tracking-[0.02rem] text-neutral-700'>
          {isLoginPage
            ? 'Sign in to manage your library account.'
            : 'Create your account to start borrowing books.'}
        </p>
      </div>
      {isLoginPage ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
};
