import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FilmInfo from "../component/element_info/film_info.jsx";

export const Single = () => {
  const { category, theid } = useParams();

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8">
          <FilmInfo category={category} uid={theid}></FilmInfo>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
