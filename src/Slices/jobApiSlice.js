import { apiSlice } from './apiSlices';
const JOB_URL = '/jobs';

export const jobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: `${JOB_URL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllJobsQuery } = jobApiSlice;
