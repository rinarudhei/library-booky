import { ApiResponse } from '../../../types/api';
import { CartItem } from '../types/cart';
import { api } from '../../../lib/api';

export async function addToCart(body: { bookId: number }, token: string) {
  const response = await api.post<ApiResponse<CartItem>>(
    '/api/cart/items',
    body,
    {
      headers: { Authorization: token },
    }
  );

  return response.data.data;
}
