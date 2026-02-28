import { ApiResponse } from '../types/api';
import {
  GetRecommendBooksResponse,
  GetRecommendedBooksParam,
} from '../types/books';
import { api } from './api';

export const getRecommendedBooks = async (data: GetRecommendedBooksParam) => {
  const response = await api.get<ApiResponse<GetRecommendBooksResponse>>(
    '/api/books/recommend',
    { params: data }
  );

  return response.data.data;
};
