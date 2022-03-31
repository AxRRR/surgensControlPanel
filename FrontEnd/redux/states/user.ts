
import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user.model';

export const initialState: User = {
    name: '',
    tag: '',
    email: '',
    role: '',
    accessToken: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createUser: (state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => initialState
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;