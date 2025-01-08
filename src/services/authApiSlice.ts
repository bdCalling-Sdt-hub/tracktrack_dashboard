// src/services/authApiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface LoginResponse {
  success: boolean
  message: string
  data: {
    role: string
    accessToken: string
    refreshToken: string
  }
}

interface LoginRequest {
  email: string
  password: string
}

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.60.26:8001', // The URL for your backend API
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApiSlice // Export the auto-generated hook for login
