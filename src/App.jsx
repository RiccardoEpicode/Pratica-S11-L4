import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LogoImg from "../assets/icon.png";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand text-light">
          <img
            src={LogoImg}
            alt="OurLogo"
            style={{ height: 50 }}
            className="mx-2"
          />
          Home
        </Link>
        <Link to="/favourites" className="text-light ms-3 text-decoration-none">
          Favourites
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
