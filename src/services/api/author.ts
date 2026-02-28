import { ApiResponse } from '../types/api';
import { GetPopularAuthorsResponse } from '../types/author';
import { api } from './api';

export const getPopularAuthors = async (data: { limit: number }) => {
  const response = await api.get<ApiResponse<GetPopularAuthorsResponse>>(
    '/api/authors/popular',
    { params: data }
  );

  return response.data.data;
};
