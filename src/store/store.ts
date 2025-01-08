// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { dashBoardHomeApiSlice } from '../services/dashBoardHomeApiSlice'
import { authApiSlice } from '../services/authApiSlice'
import { authForgetPasswordSlice } from '../services/authForgetPasswordSlice'

export const store = configureStore({
  reducer: {
    [dashBoardHomeApiSlice.reducerPath]: dashBoardHomeApiSlice.reducer, // Add the dashboard API slice reducer
    [authApiSlice.reducerPath]: authApiSlice.reducer, // Add the auth API slice reducer
    [authForgetPasswordSlice.reducerPath]: authForgetPasswordSlice.reducer, // Add the forget password API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dashBoardHomeApiSlice.middleware, // Add middleware for dashboard API slice
      authApiSlice.middleware, // Add middleware for authentication API slice
      authForgetPasswordSlice.middleware // Add middleware for authentication and forget password API slice
    ),
})

// Define types for Redux state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
