import { useMutation } from '@tanstack/react-query';
import {
  LoginApiParams,
  LoginResponse,
  RegisterApiParams,
  RegisterResponse,
} from '../types/auth';
import { toast } from 'sonner';
import { login, register } from '../api/auth';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../stores/store';
import { setToken } from '@/app/auth/authSlice';
import { setCurrentUser } from '@/app/auth/userSlice';

export const useRegister = (toggleIsLoginPage: () => void) => {
  return useMutation({
    mutationFn: (body: RegisterApiParams) => register(body),
    onSuccess: (_: RegisterResponse) => {
      toggleIsLoginPage();
      toast.success('Register user success');
    },
    onError: (e) => {
      toast.error(`Failed register user, please try again`);
    },
  });
};

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (body: LoginApiParams) => login(body),
    onSuccess: (data: LoginResponse) => {
      dispatch(setToken(data.token));
      dispatch(setCurrentUser(data.user));
      router.push('/');
    },
    onError: (e) => {
      toast.error(`Failed login, please insert valid user credentials`);
    },
  });
};
