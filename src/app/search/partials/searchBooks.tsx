'use client';
import { BookCard } from '@/features/book/components/bookCard';
import ErrorMessage from '@/components/containers/errorMessage';
import { Spinner } from '@/components/ui/spinner';
import { useGetBooksByQuery } from '@/features/book/hooks/books';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';

export const SearchBooks = () => {
  const param = useSearchParams();
  const q = param.get('q') ?? '';
  const { data, isPending, isError, error } = useGetBooksByQuery({
    q,
    page: 1,
    limit: 8,
  });

  return (
    <div className='mt-20 flex w-full max-w-300 flex-col items-start gap-4 px-4 sm:mt-32'>
      <h1 className='text-display-xs sm:text-display-sm md:text-display-md xl:text-display-lg text-start font-bold text-neutral-950'>
        Book List
      </h1>

      {/* Book List */}
      <div className='flex min-h-200 w-full items-start gap-10'>
        {/* Filter Category and Rating */}
        {isError ? (
          <ErrorMessage
            errorMessage={error ? error.message : 'Error getting book list'}
          />
        ) : isPending ? (
          <Spinner>Loading data...</Spinner>
        ) : (
          <div
            className={clsx(
              'grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4'
            )}
          >
            {data?.books
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
          </div>
        )}
      </div>
    </div>
  );
};
