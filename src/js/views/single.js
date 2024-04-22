import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import FilmInfo from "../component/element_info/film_info.jsx";
import CharacterInfo from "../component/element_info/character_info.jsx";
import PlanetInfo from "../component/element_info/planet_info.jsx";
import SpeciesInfo from "../component/element_info/species_info.jsx";
import StarshipInfo from "../component/element_info/starship_info.jsx";
import VehicleInfo from "../component/element_info/vehicle_info.jsx";
export const Single = () => {
  const { category, theid } = useParams();

  let content = null;

  switch (category) {
    case "films":
      content = (
        <div className="col-sm-12 col-md-10 col-lg-8">
          <FilmInfo category={category} uid={theid} />
        </div>
      );
      break;
    case "characters":
      content = (
        <div className="col-sm-12 col-md-10 col-lg-8">
          <CharacterInfo category={category} uid={theid} />
        </div>
      );
      break;
    case "planets":
      content = (
        <div className="w-auto">
          <PlanetInfo category={category} uid={theid} />
        </div>
      );
      break;
    case "species":
      content = (
        <div className="col-sm-12 col-md-10 col-lg-8">
          <SpeciesInfo category={category} uid={theid} />
        </div>
      );
      break;
    case "starships":
      content = (
        <div className="w-auto">
          <StarshipInfo category={category} uid={theid} />
        </div>
      );
      break;
    case "vehicles":
      content = (
        <div className="w-auto">
          <VehicleInfo category={category} uid={theid} />
        </div>
      );
      break;
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">{content}</div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
