import { Book } from '../../book/types/books';

export type CartItem = {
  id: number;
  cartId: number;
  bookdId: number;
  createdAt: string;
  book: Book;
};
