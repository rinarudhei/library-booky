'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type FloatingBorrowButtonProps = {
  availableCopies: number;
};
export const FloatingBorrowButton = ({
  availableCopies,
}: FloatingBorrowButtonProps) => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className='fixed bottom-0 flex w-screen flex-wrap gap-3 bg-white p-4 shadow-xs sm:hidden'>
      <Button variant='outline' size='lg' className='w-full max-w-[174.5px]'>
        Add to Cart
      </Button>

      <Button
        variant='default'
        size='lg'
        className='w-full max-w-[174.5px]'
        disabled={availableCopies <= 0}
      >
        <Link
          href={{
            pathname: '/checkout',
            query: { bookId: id },
          }}
        >
          {availableCopies <= 0 ? 'Not available' : 'Borrow Book'}
        </Link>
      </Button>
    </div>
  );
};
