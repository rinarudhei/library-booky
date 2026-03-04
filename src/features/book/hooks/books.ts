import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  BorrowBookParams,
  BorrowBookResponse,
  GetBookDetailsResponse,
  GetBooksByQueryParam,
  GetBooksByQueryParamResponse,
  GetRecommendBooksResponse,
  GetRecommendedBooksParam,
} from '../types/books';
import axios, { Axios, AxiosError } from 'axios';
import {
  borrowBook,
  getBookDetails,
  getBooksByQuery,
  getRecommendedBooks,
} from '../services/books';
import { toast } from 'sonner';
import { useAppSelector } from '../../../stores/store';
import { SetStateAction } from 'react';

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

export const useBorrowBook = (
  setSuccessState: React.Dispatch<SetStateAction<boolean>>
) => {
  const auth = useAppSelector((state) => state.auth);
  return useMutation<
    BorrowBookResponse,
    AxiosError<{ message: string; success: boolean }>,
    BorrowBookParams
  >({
    mutationFn: (body: BorrowBookParams) => borrowBook(body, auth.token),
    onSuccess: (_) => {
      setSuccessState(true);
    },
    onError: (e) => {
      if (e.isAxiosError && e.code === AxiosError.ERR_BAD_REQUEST) {
        toast.error('Failed: ' + e.response?.data.message);
      } else {
        toast.error('Failed: ' + e.message);
      }
    },
  });
};
