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
  availabaleCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
};
