import { apiSlice } from './apiSlices';
const EVENT_URL = '/events';

export const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => ({
        url: `${EVENT_URL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllEventsQuery } = eventApiSlice;
