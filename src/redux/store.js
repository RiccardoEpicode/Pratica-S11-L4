import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favouritesSlice";
import jobsReducer from "./jobsSlice";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    jobs: jobsReducer,
  },
});

export default store;
