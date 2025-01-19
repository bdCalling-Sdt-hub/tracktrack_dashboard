import baseApis from "../baseApi/baseApi";

export const privecyPolicyApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getPrivecyPolicy: builder.query({
            query: () => ({
                url: '/manage/get-privacy-policy',
                method: 'GET',
            }),
            providesTags: ['privecy'],
        }),
        postPrivecyPolicy: builder.mutation({
            query: ({ description }) => ({
                url: '/manage/add-privacy-policy',
                method: 'POST',
                body: { description }
            }),
            invalidatesTags: ['privecy'],
        }),

    }),
});

export const { useGetPrivecyPolicyQuery, usePostPrivecyPolicyMutation } = privecyPolicyApis;
