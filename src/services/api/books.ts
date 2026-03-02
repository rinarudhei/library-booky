import clsx from 'clsx';
import { ApiResponse } from '../types/api';
import {
  BorrowBookParams,
  BorrowBookResponse,
  GetBookDetailsResponse,
  GetBooksByQueryParam,
  GetBooksByQueryParamResponse,
  GetRecommendBooksResponse,
  GetRecommendedBooksParam,
} from '../types/books';
import { api } from './api';

export const getBooksByQuery = async (data: GetBooksByQueryParam) => {
  const response = await api.get<ApiResponse<GetBooksByQueryParamResponse>>(
    '/api/books',
    { params: data }
  );

  return response.data.data;
};

export const getRecommendedBooks = async (data: GetRecommendedBooksParam) => {
  const response = await api.get<ApiResponse<GetRecommendBooksResponse>>(
    '/api/books/recommend',
    { params: data }
  );

  return response.data.data;
};

export const getBookDetails = async (data: { id: number }) => {
  const response = await api.get<ApiResponse<GetBookDetailsResponse>>(
    '/api/books/' + data.id
  );

  return response.data.data;
};

export const borrowBook = async (data: BorrowBookParams, token: string) => {
  const response = await api.post<ApiResponse<BorrowBookResponse>>(
    '/api/loans',
    data,
    { headers: { Authorization: 'Bearer ' + token } }
  );

  return response.data.data;
};
