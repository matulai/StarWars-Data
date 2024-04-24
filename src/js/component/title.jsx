import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Favorites from "./favorites.jsx";
import Search from "./search.jsx";
import "../../styles/nav.scss";
import { Context } from "../store/appContext.js";
import { useLocation } from "react-router-dom";

const Title = () => {
  const { store } = useContext(Context);
  const location = useLocation();
  const invisible =
    location.pathname === "/characters" ||
    location.pathname === "/starships" ||
    location.pathname === "/species" ||
    location.pathname === "/vehicles" ||
    location.pathname === "/planets";

  return (
    <div className="container-fluid p-3 z-index-1">
      <div className="row d-flex">
        <div className="col-4"></div>
        <div className="col-4 d-flex justify-content-center">
          {!invisible && (
            <Link to="/">
              <img
                className={`sw-logo ${store.isMobile ? "sw-mobile" : ""}`}
                src="https://cdn.worldvectorlogo.com/logos/star-wars-4.svg"
              ></img>
            </Link>
          )}
        </div>
        <div className="col-4 d-flex justify-content-end">
          <Search></Search>
          <Favorites></Favorites>
        </div>
      </div>
    </div>
  );
};

export default Title;
