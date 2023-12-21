import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './Actions/auth';
import { blogsSlice } from './Actions/blogs';
import { jobsSlice } from './Actions/jobs';
import { eventsSlice } from './Actions/events';

export const store = configureStore({
  reducer: {
    auth: usersSlice.reducer,
    blogs: blogsSlice.reducer,
    jobs: jobsSlice.reducer,
    events: eventsSlice.reducer,
  },
});
