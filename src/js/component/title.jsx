import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Star_Wars_logo.png";
import "../../styles/nav.scss";

const Title = () => {
  return (
    <div className="container-fluid p-3 z-index-1">
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <Link to="/">
            <img className="sw-logo" src={Logo}></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Title;
