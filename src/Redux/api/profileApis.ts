import baseApis from "../baseApi/baseApi";

export const profileApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getProfileData: builder.query({
            query: () => ({
                url: '/admin/profile',
                method: 'GET',
            }),
            providesTags: ['profile'],
        }),
        updateProfileData: builder.mutation({
            query: (data) => {
                return {
                    url: '/admin/edit-profile',
                    method: 'PATCH',
                    body: data,
                };
            },
            invalidatesTags: ['profile'],
        }),
    }),
});

export const { useGetProfileDataQuery, useUpdateProfileDataMutation } = profileApis;
