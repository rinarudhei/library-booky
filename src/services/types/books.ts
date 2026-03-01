import { Author } from './author';

export type GetRecommendedBooksParam = {
  by: string;
  categoryId?: number;
  page: number;
  limit: number;
};

export type GetRecommendBooksResponse = {
  mode: string;
  books: Book[];
  pagination: Pagination;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type Book = {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    name: string;
  };
  category: Category;
};

export type GetBookDetailsResponse = Book & { reviews: Review[] };

type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Review = {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  user: { id: number; name: string };
};

export type GetBooksByQueryParam = {
  q?: string;
  categoryId?: number;
  authorId?: number;
  minRating?: number;
  page: number;
  limit: number;
};

export type GetBooksByQueryParamResponse = {
  books: Book[];
  pagination: Pagination;
};
