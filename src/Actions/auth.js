// src / Actions / auth.js;

import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setToken, getToken, removeToken } from '../config/localStorage';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { access } = JSON.parse(localStorage.getItem('tokens'));
  if (access) {
    const { email } = jwtDecode(access);
    const params = email.split('@')[0];
    const response = await axios.get(
      `http://localhost:8000/api/auth/users/user/${params}/`
    );
    const users = await response.data;
    return users;
  }
});
export const login = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }) => {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/auth/users/login/',
      { email, password }
    );
    const data = await response.data;
    return data;
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    token: getToken(),
    user: null,
    isLoading: null,
    isAuthenticated: null,
  },
  reducers: {
    loadUser: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        removeToken();
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        setToken(action.payload);
      })
      .addCase(login.rejected, () => {
        removeToken();
      });
  },
});

export const { loadUser } = usersSlice.actions;
