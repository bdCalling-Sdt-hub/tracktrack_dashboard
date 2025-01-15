import baseApis from "../baseApi/baseApi";


export const categoryApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: ({ searchTerm, page }) => ({
                url: '/dashboard/get-bookings',
                method: 'GET',
                params: { searchTerm, page },
            }),
            providesTags: ['booking'],
        }),

    }),
});

export const { useGetAllBookingsQuery } = categoryApis;
