import { apiSlice } from './apiSlices';
const BLOGS_URL = '/blogs';
export const blogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: `${BLOGS_URL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogsApiSlice;
