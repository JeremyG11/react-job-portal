import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/events');
  const events = await response.data;
  return events;
});

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addJob } = eventsSlice.actions;
