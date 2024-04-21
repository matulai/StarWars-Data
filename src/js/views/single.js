import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import FilmInfo from "../component/element_info/film_info.jsx";
import CharacterInfo from "../component/element_info/character_info.jsx";
export const Single = () => {
  const { category, theid } = useParams();

  let content = null;

  switch (category) {
    case "films":
      content = <FilmInfo category={category} uid={theid} />;
      break;
    case "characters":
      content = <CharacterInfo category={category} uid={theid} />;
      break;
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8">{content}</div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
