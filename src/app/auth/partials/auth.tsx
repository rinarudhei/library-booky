'use client';
import React from 'react';
import { LoginForm } from './loginForm';
import { RegisterForm } from './registerForm';
import Image from 'next/image';
import clsx from 'clsx';

export const Auth = () => {
  const [isLoginPage, setIsLoginPage] = React.useState(true);

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
      <div className='flex-start flex items-center gap-3'>
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
      </div>
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
