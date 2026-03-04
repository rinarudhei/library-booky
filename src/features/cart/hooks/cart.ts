import { useMutation } from '@tanstack/react-query';
import { addToCart } from '../services/cart';
import { useAppSelector } from '../../../stores/store';
import { CartItem } from '../types/cart';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useAddToCart = () => {
  const auth = useAppSelector((state) => state.auth);

  return useMutation<
    CartItem,
    AxiosError<{ success: boolean; message: string }>,
    { bookId: number }
  >({
    mutationFn: (body: { bookId: number }) => addToCart(body, auth.token),
    onError: (e) => {
      if (e.isAxiosError && e.code === AxiosError.ERR_BAD_REQUEST) {
        toast.error(e.response?.data.message);
      } else {
        toast.error('Failed adding item to cart');
      }
    },
    onSuccess: () => {
      toast.success('Success adding book to cart');
    },
  });
};
