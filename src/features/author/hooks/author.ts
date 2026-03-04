import { AxiosError } from 'axios';
import {
  GetAuthorDetailParams,
  GetAuthorDetailResponse,
  GetPopularAuthorsResponse,
} from '../types/author';
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { getAuthorBooks, getPopularAuthors } from '../services/author';

export const useGetPopularAuthors = (params: { limit: number }) => {
  return useQuery<GetPopularAuthorsResponse, AxiosError>({
    queryKey: ['popular-authors', params],
    queryFn: () => getPopularAuthors(params),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export const useGetInfiniteAuthorBooks = (params: GetAuthorDetailParams) => {
  return useInfiniteQuery<GetAuthorDetailResponse, AxiosError>({
    initialPageParam: 1,
    queryKey: ['author-books', params],
    queryFn: ({ pageParam }) =>
      getAuthorBooks({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (responseData.pagination.page < responseData.pagination.totalPages)
        return responseData.pagination.page + 1;
      else return undefined;
    },
  });
};
