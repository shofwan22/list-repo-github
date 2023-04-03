import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser, fetchRepos } from './actions';
import { User } from '@/types/user';
import { Repo } from '@/types/repo';

interface UserState {
  data: User | null;
  repos: Repo[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  data: null,
  repos: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepos.fulfilled, (state, action: PayloadAction<Repo[]>) => {
        state.status = 'succeeded';
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
