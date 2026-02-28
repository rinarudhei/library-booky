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
    <div className='flex-center flex-col'>
      {isError ? (
        <ErrorMessage
          errorMessage={error ? error.message : 'Error getting author list'}
        />
      ) : isPending ? (
        <Spinner />
      ) : (
        <div className='flex w-full flex-col justify-between gap-4'>
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
