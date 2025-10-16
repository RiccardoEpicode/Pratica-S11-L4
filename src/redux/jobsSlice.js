import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (query) => {
  const response = await fetch(
    `https://remotive.com/api/remote-jobs?search=${query}`
  );
  if (!response.ok) {
    throw new Error("Errore nel caricamento dei lavori");
  }
  const data = await response.json();
  return data.jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
