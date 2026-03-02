'use client';

import { RelatedBookList } from '@/app/partials/relatedBookList';
import { BookDetailsCard } from '@/components/containers/bookDetailsCard';
import ErrorMessage from '@/components/containers/errorMessage';
import { ReviewCard } from '@/components/containers/reviewCard';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { useGetBookDetails } from '@/services/hooks/books';
import { useAppSelector } from '@/services/stores/store';
import { ChevronRight, Star } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { FloatingBorrowButton } from './floatingBorrowButton';
import Link from 'next/link';

export const DetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isPending, isError } = useGetBookDetails({ id: +id });

  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  React.useEffect(() => {
    if (!user.id) {
      router.push('/auth');
    }
  }, [user]);
  return (
    <main className='flex-center flex-col gap-6 px-4 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 xl:px-30'>
      {/* Book Details */}
      {isError ? (
        <ErrorMessage errorMessage='Failed getting book details' />
      ) : isPending ? (
        <Spinner className='mt-20 text-6xl' />
      ) : (
        <>
          <div className='mt-20 flex flex-col items-center justify-between gap-4 sm:mt-32'>
            <div className='flex w-full items-center justify-start gap-1'>
              <Link
                href='/'
                className='text-primary-300 text-sm font-semibold tracking-[0.02rem]'
              >
                Home
              </Link>
              <ChevronRight size={16} />
              <Link
                href='/categories'
                className='text-primary-300 text-sm font-semibold tracking-[0.02rem]'
              >
                Category
              </Link>
              <ChevronRight size={16} />
              <p className='text-sm font-semibold tracking-[0.02rem] text-neutral-950'>
                {data.title}
              </p>
            </div>

            <BookDetailsCard
              id={data.id}
              availableCopies={data.availableCopies}
              coverImage={data.coverImage}
              category={data.category}
              title={data.title}
              author={data.author}
              star={data.rating}
              ratingCount={data.borrowCount}
              pagesCount={data.availableCopies}
              reviewsCount={data.reviewCount}
              description={data.description}
            />
          </div>

          <Separator />

          <div className='flex w-full flex-col items-start gap-4.5'>
            <div className='flex flex-col gap-1 sm:gap-1 lg:gap-3'>
              <h4 className='text-display-xs sm:text-display-sm lg:text-display-lg w-full text-start font-bold text-neutral-950'>
                Review
              </h4>

              <div className='flex items-center justify-start gap-2'>
                <Star size={24} className='fill-[#ffab0d] stroke-[#ffab0d]' />
                <p className='text-md font-bold -tracking-[0.02rem] text-neutral-950 sm:text-lg xl:text-xl xl:tracking-normal'>
                  {data.rating} ({data.reviewCount} Ulasan)
                </p>
              </div>
            </div>

            <div className='grid w-full grid-cols-1 gap-4.5 sm:gap-5 md:grid-cols-2'>
              {data.reviews.map((r) => (
                <ReviewCard
                  key={r.id}
                  user={r.user}
                  rating={r.star}
                  createdAt={r.createdAt}
                  comment={r.comment}
                />
              ))}
            </div>
          </div>

          <Separator />

          <div className='flex w-full flex-col gap-5'>
            <h4 className='text-display-xs w-full text-start font-bold text-neutral-950'>
              Related Books
            </h4>
            <RelatedBookList bookId={data.id} categoryId={data.categoryId} />
          </div>

          <FloatingBorrowButton availableCopies={data.availableCopies} />
        </>
      )}
    </main>
  );
};
