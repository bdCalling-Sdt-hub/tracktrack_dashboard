import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define types for the overview data
interface OverviewItem {
  totalAuth: number
  totalUser: number
  totalHost: number
  totalEvent: number
  totalTrack: number
}

interface OverviewData {
  overviewData: OverviewItem[]
}

// Define the API service
export const dashBoardHomeApiSlice = createApi({
  reducerPath: 'dashBoardHomeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.60.26:8001', // Replace with your actual base URL
  }),
  endpoints: (builder) => ({
    getOverviewData: builder.query<OverviewData, void>({
      query: () => '/dashboard/total-overview', // The endpoint to fetch overview data
    }),
  }),
})

export const { useGetOverviewDataQuery } = dashBoardHomeApiSlice // Export the generated hook for this query
