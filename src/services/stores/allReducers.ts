import { combineReducers } from '@reduxjs/toolkit';
import authReducers from '@/app/auth/authSlice';

export const allreducers = combineReducers({
  auth: authReducers,
});
