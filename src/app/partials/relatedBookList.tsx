'use client';

import { useGetBooksByQuery } from '@/services/hooks/books';
import { BookCard } from '../../components/containers/bookCard';
import { Spinner } from '../../components/ui/spinner';
import ErrorMessage from '../../components/containers/errorMessage';
import { useAppSelector } from '@/services/stores/store';

type RelatedBookList = {
  categoryId: number;
  bookId: number;
};

export const RelatedBookList = ({ categoryId, bookId }: RelatedBookList) => {
  const { data, error, isError, isFetching } = useGetBooksByQuery({
    page: 1,
    limit: 5,
    categoryId,
  });
  const user = useAppSelector((state) => state.user);

  return (
    <div className='flex flex-col items-start'>
      {isError ? (
        <ErrorMessage
          errorMessage={error ? error.message : 'Error getting book list'}
        />
      ) : isFetching ? (
        <Spinner>Loading data...</Spinner>
      ) : (
        <div className='flex-center flex-col gap-5 sm:gap-6 md:gap-7 xl:gap-8'>
          <div className='flex h-fit items-center justify-start gap-4 sm:grid-cols-1 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {data?.books
              .filter(
                (book) =>
                  !book.coverImage.includes('otimages.com') &&
                  !book.coverImage.includes('blob:') &&
                  bookId !== book.id
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
        </div>
      )}
    </div>
  );
};
