'use client';

import { Button } from '@/components/ui/button';
import { useParams, useSearchParams } from 'next/navigation';

export const FloatingBorrowButton = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className='fixed bottom-0 flex w-screen gap-3 bg-white p-4 shadow-xs sm:hidden'>
      <Button variant='outline' size='lg' className='w-full max-w-[174.5px]'>
        Add to Cart
      </Button>

      <Button variant='default' size='lg' className='w-full max-w-[174.5px]'>
        Borrow Book
      </Button>
    </div>
  );
};
