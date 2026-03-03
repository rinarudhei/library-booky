import { Book } from './books';
import { Pagination } from './pagination';

export type GetPopularAuthorsResponse = {
  authors: Author[];
};

export type Author = {
  id: number;
  name: string;
  bio: string;
  bookCount: number;
  accumulatedScore: number;
  createdAt: string;
  updatedAt: string;
};

export type GetAuthorDetailParams = {
  id: number;
  page: number;
  limit: number;
};

export type GetAuthorDetailResponse = {
  author: Partial<Author>;
  bookCount: number;
  books: Book[];
  pagination: Pagination;
};
