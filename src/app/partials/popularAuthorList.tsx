'use client';

import ErrorMessage from '@/components/containers/errorMessage';
import { PopularAuthorCard } from '@/components/containers/popularAuthorCard';
import { Spinner } from '@/components/ui/spinner';
import { useGetPopularAuthors } from '@/services/hooks/author';

export const PopularAuthorList = () => {
  const { data, isPending, isError, error } = useGetPopularAuthors({
    limit: 4,
  });
  return (
    <div className='flex-center flex-col sm:items-start'>
      {isError ? (
        <ErrorMessage
          errorMessage={error ? error.message : 'Error getting author list'}
        />
      ) : isPending ? (
        <Spinner />
      ) : (
        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center sm:gap-5 lg:grid-cols-4'>
          {data.authors.map((a) => (
            <PopularAuthorCard
              key={a.id}
              name={a.name}
              bookCount={a.bookCount}
            />
          ))}
        </div>
      )}
    </div>
  );
};
