import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: {
      reducer(_, { payload }) {
        return payload;
      },
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
