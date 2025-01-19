import baseApis from "../baseApi/baseApi";


export const categoryApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: ({ page }) => ({
                url: '/dashboard/get-bookings',
                method: 'GET',
                params: { page },
            }),
            providesTags: ['booking'],
        }),

    }),
});

export const { useGetAllBookingsQuery } = categoryApis;
