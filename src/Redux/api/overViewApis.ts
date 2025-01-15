import baseApis from "../baseApi/baseApi";


export const overViewApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getTotalOverView: builder.query({
            query: () => ({
                url: '/dashboard/total-overview',
                method: 'GET',
            }),
            providesTags: ['overView'],
        }),
        getUserGrowthOverView: builder.query({
            query: ({ role, year }) => ({
                url: '/dashboard/growth',
                method: 'GET',
                params: { role, year }
            }),
            providesTags: ['userGrowthOverView'],
        }),
        getEventGrowthOverView: builder.query({
            query: ({ data, year }) => ({
                url: '/dashboard/business-growth',
                method: 'GET',
                params: { data, year }
            }),
            providesTags: ['eventGrowthOverView'],
        }),
    }),
});

export const { useGetTotalOverViewQuery, useGetUserGrowthOverViewQuery, useGetEventGrowthOverViewQuery } = overViewApis;
