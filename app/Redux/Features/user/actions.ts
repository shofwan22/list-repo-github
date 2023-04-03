import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { User } from '@/types/user';
import { Repo } from '@/types/repo';

export const fetchUser = createAsyncThunk<User, string, {rejectValue: string}>('user/fetchUser', async(username, thunkAPI) => {
  try {
       const response = await axios.get(`https://api.github.com/users/${username}`);
       return response.data
  } catch (err: unknown) {
    const error = err as AxiosError<string>
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const fetchRepos = createAsyncThunk<Repo[], string, {rejectValue: string}>('user/fetchRepos', async(username, thunkAPI) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  } catch (err: unknown) {
    const error = err as AxiosError<string>;
    return thunkAPI.rejectWithValue(error.message);
  }
})