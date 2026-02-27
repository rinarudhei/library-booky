import { combineReducers } from '@reduxjs/toolkit';
import authReducers from '@/app/auth/authSlice';
import userReducers from '@/app/auth/userSlice';

export const allreducers = combineReducers({
  auth: authReducers,
  user: userReducers,
});
