import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogPosts = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/blogs');
  const blogs = await response.data;
  console.log(blogs);
  return blogs;
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
  },
  reducers: {
    getBlogs: (state, action) => {
      console.log(action);
      state.blogs.push(action.payload);
    },

    addBlog: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      });
  },
});

export const { addBlog, getBlogs } = blogsSlice.actions;
