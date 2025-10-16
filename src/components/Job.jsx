import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/favouritesSlice";

export default function Job({ job }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.list);
  const isFavourite = favourites.some(
    (fav) => fav.company_name === job.company_name
  );

  return (
    <div className="border p-3 m-3">
      <h5>{job.title}</h5>
      <p>{job.company_name}</p>
      <a href={job.url} target="_blank" rel="noreferrer" className="mx-2">
        View Job
      </a>

      {isFavourite ? (
        <button
          onClick={() => dispatch(removeFromFavourites(job.company_name))}>
          Unsave
        </button>
      ) : (
        <button onClick={() => dispatch(addToFavourites(job))}> Save</button>
      )}
    </div>
  );
}
