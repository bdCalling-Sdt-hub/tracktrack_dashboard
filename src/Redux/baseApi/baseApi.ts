import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from '../../Utils/server';

const baseApis = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'userStatus',
    'category',
    'feedBack',
    'users',
    'booking',
    'overView',
    'userGrowthOverView',
    'eventGrowthOverView'
  ],
  endpoints: () => ({}),
});

export default baseApis
