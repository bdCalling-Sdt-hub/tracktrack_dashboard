import baseApis from "../baseApi/baseApi";

export const termsConditionsApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getConditions: builder.query({
            query: () => ({
                url: '/manage/get-terms-conditions',
                method: 'GET',
            }),
            providesTags: ['conditions'],
        }),
        postConditions: builder.mutation({
            query: ({ description }) => ({
                url: '/manage/add-terms-conditions',
                method: 'POST',
                body: { description }
            }),
            invalidatesTags: ['conditions'],
        }),

    }),
});

export const { useGetConditionsQuery, usePostConditionsMutation } = termsConditionsApis;
