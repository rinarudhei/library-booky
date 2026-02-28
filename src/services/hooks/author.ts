import { AxiosError } from 'axios';
import { GetPopularAuthorsResponse } from '../types/author';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPopularAuthors } from '../api/author';

export const useGetPopularAuthors = (params: { limit: number }) => {
  return useQuery<GetPopularAuthorsResponse, AxiosError>({
    queryKey: ['popular-authors', params],
    queryFn: () => getPopularAuthors(params),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};
