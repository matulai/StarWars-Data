import React from "react";
import Logo from "../../img/Star_Wars_logo.png";
import "../../styles/nav.scss";

const Title = () => {
  return (
    <div className="container-fluid fixed-top p-3 z-index-minus1">
      <div className="row d-flex justify-content-center">
        <img className="sw-logo" src={Logo}></img>
      </div>
    </div>
  );
};

export default Title;
