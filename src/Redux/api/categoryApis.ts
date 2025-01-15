import baseApis from "../baseApi/baseApi";


export const categoryApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: ({ searchTerm }) => ({
        url: '/dashboard/get-all-category',
        method: 'GET',
        params: { searchTerm },
      }),
      providesTags: ['category'],
    }),
    deleteCategories: builder.mutation({
      query: ({ categoryId }) => ({
        url: '/dashboard/delete-category',
        method: 'DELETE',
        params: { categoryId },
      }),
      invalidatesTags: ['category'],
    }),
    addNewCategory: builder.mutation({
      query: (data) => ({
        url: '/dashboard/add-category',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['category'],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useDeleteCategoriesMutation,
  useAddNewCategoryMutation,
} = categoryApis;
