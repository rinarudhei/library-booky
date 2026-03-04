'use client';

import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/stores/store';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { CheckoutBookList } from './checkoutBookList';
import { id } from 'zod/locales';
import { CheckoutForm } from './checkoutForm';

export const CheckoutSection = () => {
  // const params = useSearchParams();
  // const bookId = params.get('bookdId');
  const user = useAppSelector((state) => state.user);

  const router = useRouter();
  React.useEffect(() => {
    if (!user.id) {
      router.push('/auth');
    }
  }, [user]);

  return (
    <div className='mt-20 flex w-full max-w-250.5 flex-col items-start gap-4 px-4 sm:mt-32'>
      <h2 className='text-display-xs lg:text-display-lg text-start font-bold text-neutral-950 sm:inline-block'>
        Checkout
      </h2>
      <div className='flex w-full flex-col justify-between gap-6 sm:flex-row sm:gap-5 md:gap-10 lg:gap-14.5'>
        {/* Checkout Information */}
        <div className='flex w-full flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col gap-2 lg:gap-4'>
            <h3 className='lg:text-display-xs text-lg font-bold -tracking-[0.03rem] text-neutral-950'>
              User Information
            </h3>
            <div className='flex w-full items-center justify-between'>
              <p className='lg:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-950'>
                Name
              </p>
              <p className='lg:text-md text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
                {user.name}
              </p>
            </div>
            <div className='flex w-full items-center justify-between'>
              <p className='lg:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-950'>
                Email
              </p>
              <p className='lg:text-md text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
                {user.email}
              </p>
            </div>
            <div className='flex w-full items-center justify-between'>
              <p className='lg:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-950'>
                Nomor Handphone
              </p>
              <p className='lg:text-md text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
                {user.phone}
              </p>
            </div>

            <Separator />

            <CheckoutBookList />
          </div>
        </div>

        {/* Checkout Form */}
        <CheckoutForm />
      </div>
    </div>
  );
};
