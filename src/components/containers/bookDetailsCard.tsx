import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { id } from 'zod/locales';

type BookDetailsCardProps = {
  id: number;
  coverImage: string;
  category: {
    id: number;
    name: string;
  };
  title: string;
  author: {
    id: number;
    name: string;
  };
  star: number;
  ratingCount: number;
  pagesCount: number;
  reviewsCount: number;
  description: string;
  availableCopies: number;
};

export const BookDetailsCard = ({
  id,
  coverImage,
  category,
  title,
  author,
  star,
  pagesCount,
  reviewsCount,
  description,
  ratingCount,
  availableCopies,
}: BookDetailsCardProps) => {
  return (
    <div className='flex flex-col items-center gap-9 sm:flex-row'>
      <div className='flex-center w-fit gap-[5.29px] bg-neutral-200 p-[5.29px] sm:h-124.5 sm:w-84.25'>
        <Image
          src={coverImage}
          alt='Book Cover image'
          width={212}
          height={318}
          className='h-79.5 object-fill sm:h-120.5 sm:w-80.25'
          loading='eager'
        />
      </div>

      {/* Book Infomation */}
      <div className='flex flex-col gap-4 sm:w-60 md:w-80 lg:w-150 xl:w-206.75'>
        {/* Book Title and Ratings */}
        <div className='flex flex-col gap-0.5'>
          <div className='flex-start flex w-fit items-center gap-2 rounded-sm border border-neutral-300 px-2'>
            <p className='text-sm font-bold -tracking-[0.02rem] text-neutral-950'>
              {category.name}
            </p>
          </div>
          <h3 className='text-display-xs md:text-display-sm font-bold text-neutral-950 md:-tracking-[0.02rem]'>
            {title}
          </h3>
          <p className='md:text-md text-sm font-semibold -tracking-[0.02rem] text-neutral-700'>
            {author.name}
          </p>

          <div className='flex items-center justify-start gap-2'>
            <Star size={24} className='fill-[#ffab0d] stroke-[#ffab0d]' />
            <p className='text-md font-bold -tracking-[0.02rem] text-neutral-900'>
              {star}
            </p>
          </div>
        </div>

        <div className='flex h-15 items-center justify-between gap-5 md:justify-start'>
          <div className='flex w-full flex-col md:max-w-25.5'>
            <p className='lg:text-display-xs text-lg font-bold -tracking-[0.03rem] text-neutral-950 xl:tracking-normal'>
              {pagesCount}
            </p>
            <p className='lg:text-md text-sm font-medium -tracking-[0.03rem]'>
              Page
            </p>
          </div>

          <Separator orientation='vertical' />

          <div className='flex w-full flex-col md:w-25.5'>
            <p className='lg:text-display-xs text-lg font-bold -tracking-[0.03rem] text-neutral-950 xl:tracking-normal'>
              {ratingCount}
            </p>
            <p className='lg:text-md text-sm font-medium -tracking-[0.03rem]'>
              Rating
            </p>
          </div>

          <Separator orientation='vertical' />

          <div className='flex w-full flex-col md:w-25.5'>
            <p className='lg:text-display-xs text-lg font-bold -tracking-[0.03rem] text-neutral-950 xl:tracking-normal'>
              {reviewsCount}
            </p>
            <p className='lg:text-md text-sm font-medium -tracking-[0.03rem]'>
              Reviews
            </p>
          </div>
        </div>

        <Separator className='md:max-w-139.75' />

        {/* Book Description */}
        <div className='flex flex-col gap-1'>
          <h4 className='text-xl font-bold -tracking-[0.02rem] text-neutral-950'>
            Description
          </h4>
          <p className='md:text-md text-sm font-medium -tracking-[0.03rem] text-neutral-950 md:-tracking-[0.03rem]'>
            {description}
          </p>
        </div>

        {/* Buttons  */}
        <div className='flex-start hidden gap-3 sm:flex'>
          <Button variant='outline' className='w-full max-w-28 lg:max-w-50'>
            Add to Cart
          </Button>
          <Button
            variant='default'
            className='w-full max-w-28 lg:max-w-50'
            disabled={availableCopies <= 0}
          >
            <Link
              href={{
                pathname: '/checkout',
                query: { bookId: id.toString() },
              }}
            >
              {availableCopies <= 0 ? 'Not available' : 'Borrow Book'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
