import baseApi from '../baseApi/baseApi'

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


export const authApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice
