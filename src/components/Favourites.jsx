import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { removeFromFavourites } from "../redux/favouritesSlice";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Your Favourite Companies</h2>
          {favourites.length === 0 && <p>No favourites yet 😢</p>}

          <ul className="list-unstyled">
            {favourites.map((job) => (
              <li key={job.id} className="mb-3 border-bottom pb-2">
                <h5 className="mb-1">{job.company_name}</h5>
                <p className="text-muted mb-1">{job.title}</p>

                <div className="d-flex gap-2 align-items-center">
                  {/* ✅ mostriamo un testo leggibile invece di {job} */}
                  <Link to={`/${job.company_name}`}>View Jobs</Link>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() =>
                      dispatch(removeFromFavourites(job.company_name))
                    }>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
