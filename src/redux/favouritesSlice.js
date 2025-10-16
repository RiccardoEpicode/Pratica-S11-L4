import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    list: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.list = state.list.filter(
        (job) => job.company_name !== action.payload
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
