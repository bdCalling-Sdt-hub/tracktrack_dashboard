// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { authApiSlice } from '../services/authApiSlice' // If needed for authentication
import { authForgetPasswordSlice } from '../services/authForgetPasswordSlice' // If needed for password reset

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer, // Add auth API slice reducer
    [authForgetPasswordSlice.reducerPath]: authForgetPasswordSlice.reducer, // Add forgot password API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware, // Add middleware for auth API slice
      authForgetPasswordSlice.middleware // Add middleware for forgot password API slice
    ),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
