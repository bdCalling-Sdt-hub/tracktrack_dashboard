import baseApis from "../baseApi/baseApi";


export const paymentApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getAllPayment: builder.query({
            query: ({ page, businessType, searchTerm }) => ({
                url: '/payment/get-all-payment',
                method: 'GET',
                params: { page, businessType, searchTerm },
            }),
            providesTags: ['payment'],
        }),
        getAllPaymentInfo: builder.query({
            query: ({ searchTerm, page }) => ({
                url: '/payment/get-all-payout-info',
                method: 'GET',
                params: { searchTerm, page },
            }),
            providesTags: ['all-payment'],
        }),

    }),
});

export const { useGetAllPaymentInfoQuery, useGetAllPaymentQuery } = paymentApis;
