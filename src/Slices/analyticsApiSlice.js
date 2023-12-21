import { apiSlice } from './apiSlices';
const AGE_SEX_URL = '/blogs';
export const ageSexApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgeSex: builder.query({
      query: () => ({
        url: `${AGE_SEX_URL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllAgeSexQuery } = ageSexApiSlice;
