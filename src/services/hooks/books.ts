import { useInfiniteQuery } from '@tanstack/react-query';
import {
  GetRecommendBooksResponse,
  GetRecommendedBooksParam,
} from '../types/books';
import { AxiosError } from 'axios';
import { getRecommendedBooks } from '../api/books';

export const useInfiniteRecommendedBooks = (
  params: GetRecommendedBooksParam
) => {
  return useInfiniteQuery<GetRecommendBooksResponse, AxiosError>({
    initialPageParam: 1,
    queryKey: ['recommended-books', params],
    queryFn: ({ pageParam }) =>
      getRecommendedBooks({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (responseData.pagination.page < responseData.pagination.totalPages)
        return responseData.pagination.page + 1;
      else return undefined;
    },
  });
};
