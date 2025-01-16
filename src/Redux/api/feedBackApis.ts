import baseApis from "../baseApi/baseApi";


export const feedBackApis = baseApis.injectEndpoints({
    endpoints: (builder) => ({
        getTotalFeedBack: builder.query({
            query: ({ searchTerm, page, id }) => ({
                url: '/feedback/get-all-feedback',
                method: 'GET',
                params: { searchTerm, page, id }
            }),
            providesTags: ['feedBack'],
        }),
        gerSingleFeedback: builder.query({
            query: ({ id }) => ({
                url: '/feedback/get-feedback',
                method: 'GET',
                params: { id }
            })
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

export const {
    useGetTotalFeedBackQuery,
    useGerSingleFeedbackQuery,
    useDeleteFeedbackMutation,
    useSendFeedbackMutation
} = feedBackApis;
