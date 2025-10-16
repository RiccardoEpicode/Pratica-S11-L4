import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/jobsSlice";
import { useState } from "react";
import Job from "./Job";

export default function MainSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs(query));
  };

  return (
    <div className="text-center mt-3">
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search remote jobs..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}
