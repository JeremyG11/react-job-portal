import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/jobs');
  const jobs = await response.data;
  return jobs;
});

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
  },
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addJob } = jobsSlice.actions;
