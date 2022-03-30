
import { createSlice } from '@reduxjs/toolkit';
import { Members } from '../../models/members.model';

export const initialState: Members = {
        memberList: [
        {
            name: '',
            role: '',
            lastSeen: 0,
            tag: '',
            trophies: 0
        }
    ]
};

export const membersSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    createMemberList: (state, action) => action.payload,
    modifyMemberList: (state, action) => ({ ...state, ...action.payload }),
    resetMemberList: () => initialState
  }
});

export const { createMemberList, modifyMemberList, resetMemberList } = membersSlice.actions;

export default membersSlice.reducer;