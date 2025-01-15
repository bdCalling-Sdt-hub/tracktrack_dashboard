import baseApis from "../baseApi/baseApi";


export const feedBackApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getTotalFeedBack: builder.query({
            query: ({ searchTerm, page }) => ({
                url: '/feedback/get-all-feedback',
                method: 'GET',
                params: { searchTerm, page }
            }),
            providesTags: ['feedBack'],
        }),
        deleteFeedback: builder.mutation({
            query: ({ id }) => ({
                url: '/feedback/delete-feedback',
                method: 'DELETE',
                params: { id },
            }),
            invalidatesTags: ['feedBack'],
        }),
        sendFeedback: builder.mutation({
            query: ({ id, replay }) => ({
                url: '/feedback/reply-feedback',
                method: 'PATCH',
                body: {
                    id: id,
                    reply: replay,
                },
            }),
            invalidatesTags: ['feedBack'],
        }),
    }),
});

export const { useGetTotalFeedBackQuery, useDeleteFeedbackMutation, useSendFeedbackMutation } = feedBackApis;
