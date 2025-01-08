// src/services/authForgetPassword.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define types for the responses
interface ForgetPasswordResponse {
  success: boolean
  message: string
}

interface OtpVerifyResponse {
  success: boolean
  message: string
}

interface ResetPasswordResponse {
  success: boolean
  message: string
}

// Define the API service
export const authForgetPasswordSlice = createApi({
  reducerPath: 'authForgetPassword',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.60.26:8001', // Base URL for the authentication API
  }),
  endpoints: (builder) => ({
    // Forgot Password: Send the email for password reset
    forgotPassword: builder.mutation<ForgetPasswordResponse, { email: string }>(
      {
        query: (credentials) => ({
          url: '/auth/forgot-password',
          method: 'POST',
          body: credentials,
        }),
      }
    ),

    // Verify OTP: Verify the OTP sent to the user's email
    verifyOtp: builder.mutation<
      OtpVerifyResponse,
      { email: string; code: string }
    >({
      query: (data) => ({
        url: '/auth/forget-pass-otp-verify',
        method: 'POST',
        body: data,
      }),
    }),

    // Reset Password: Reset the user's password
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      { email: string; newPassword: string; confirmPassword: string }
    >({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

// Export the hooks for each mutation
export const {
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authForgetPasswordSlice
