'use client';

import { BookCard } from '@/components/containers/bookCard';
import ErrorMessage from '@/components/containers/errorMessage';
import { PopularAuthorCard } from '@/components/containers/popularAuthorCard';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useGetInfiniteAuthorBooks } from '@/services/hooks/author';
import { isPending } from '@reduxjs/toolkit';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export const AuthorBookList = () => {
  const params = useSearchParams();
  const authorId = params.get('authorId') || 0;
  const {
    data,
    error,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteAuthorBooks({ page: 1, limit: 10, id: +authorId });

  return (
    <div className='flex-center mt-20 flex-col gap-4 sm:mt-32 sm:gap-8'>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          <div className='w-full'>
            {isFetching || isError ? (
              <Spinner />
            ) : (
              <PopularAuthorCard
                authorId={page.author.id || 0}
                name={page.author.name as string}
                bookCount={page.bookCount}
              />
            )}
          </div>
        </React.Fragment>
      ))}
      <h1 className='text-display-xs sm:text-display-sm md:text-display-md xl:text-display-lg w-full text-start font-bold text-neutral-950'>
        Book List
      </h1>
      {isError ? (
        <ErrorMessage
          errorMessage={error ? error.message : 'Error getting book list'}
        />
      ) : isFetching ? (
        <Spinner>Loading data...</Spinner>
      ) : (
        <>
          <div className='flex-center flex-col gap-5 sm:gap-6 md:gap-7 xl:gap-8'>
            <div className='grid h-fit grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {data?.pages.map((page, i) => (
                <React.Fragment key={i}>
                  {page.books
                    .filter(
                      (book) =>
                        !book.coverImage.includes('otimages.com') &&
                        !book.coverImage.includes('blob:')
                    )
                    .map((book, i) => (
                      <BookCard
                        key={i}
                        id={book.id}
                        image={book.coverImage}
                        title={book.title}
                        author={book.author}
                        star={book.rating}
                      />
                    ))}
                </React.Fragment>
              ))}
            </div>
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetching || isFetchingNextPage}
              variant='outline'
              className='z-50 w-37.5 sm:w-42 md:w-44 lg:w-48 xl:w-50'
            >
              <p
                className={`lg:text-md text-center text-sm font-bold lg:-tracking-[0.02rem] ${hasNextPage && !isFetching && !isFetchingNextPage ? 'text-neutral-950' : 'text-neutral-300'}`}
              >
                {isFetchingNextPage ? 'Loading more...' : 'Load More'}
              </p>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
