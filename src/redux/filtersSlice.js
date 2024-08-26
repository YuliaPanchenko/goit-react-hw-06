import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filter.name;

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
