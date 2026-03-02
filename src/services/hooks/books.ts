import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import {
  GetBookDetailsResponse,
  GetBooksByQueryParam,
  GetBooksByQueryParamResponse,
  GetRecommendBooksResponse,
  GetRecommendedBooksParam,
} from '../types/books';
import { Axios, AxiosError } from 'axios';
import {
  getBookDetails,
  getBooksByQuery,
  getRecommendedBooks,
} from '../api/books';

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
export const useGetBookDetails = (data: { id: number }) => {
  return useQuery<GetBookDetailsResponse, AxiosError>({
    queryKey: ['book-details', data.id],
    queryFn: () => getBookDetails(data),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export const useGetBooksByQuery = (data: GetBooksByQueryParam) => {
  if (!data.categoryId) {
    delete data.categoryId;
  }
  return useQuery<GetBooksByQueryParamResponse, AxiosError>({
    queryKey: ['books', data],
    queryFn: () => getBooksByQuery(data),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};
