import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Star_Wars_logo.png";
import Favorites from "./favorites.jsx";
import Search from "./search.jsx";
import "../../styles/nav.scss";

const Title = () => {
  return (
    <div className="container-fluid p-3 z-index-1">
      <div className="row d-flex">
        <div className="col-4"></div>
        <div className="col-4 d-flex justify-content-center">
          <Link to="/">
            <img className="sw-logo" src={Logo}></img>
          </Link>
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
