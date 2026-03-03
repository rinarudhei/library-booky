import { ApiResponse } from '../types/api';
import {
  GetAuthorDetailParams,
  GetAuthorDetailResponse,
  GetPopularAuthorsResponse,
} from '../types/author';
import { api } from './api';

export const getPopularAuthors = async (data: { limit: number }) => {
  const response = await api.get<ApiResponse<GetPopularAuthorsResponse>>(
    '/api/authors/popular',
    { params: data }
  );

  return response.data.data;
};

export const getAuthorBooks = async (data: GetAuthorDetailParams) => {
  const response = await api.get<ApiResponse<GetAuthorDetailResponse>>(
    `/api/authors/${data.id}/books`,
    { params: { limit: data.limit, page: data.page } }
  );

  return response.data.data;
};
