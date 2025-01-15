import baseApis from "../baseApi/baseApi";

export const usersApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: ({ role, page }) => ({
                url: '/dashboard/get-all-user',
                method: 'GET',
                params: { role, page },
            }),
            providesTags: ['users'],
        }),
        getAllHost: builder.query({
            query: ({ role, page }) => ({
                url: '/dashboard/get-all-user',
                method: 'GET',
                params: { role, page },
            }),
            providesTags: ['users'],
        }),
        updateUserStatus: builder.mutation({
            query: ({ authId, isBlocked }) => ({
                url: '/dashboard/block-unblock-user',
                method: 'PATCH',
                body: {
                    authId,
                    isBlocked: isBlocked,
                },
            }),
            invalidatesTags: ['users'],
        }), 

    }),
});

export const { useGetAllUsersQuery, useUpdateUserStatusMutation, useGetAllHostQuery } = usersApis;
