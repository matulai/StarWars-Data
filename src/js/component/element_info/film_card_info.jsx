import React from "react";

const FilmCardInfo = (props) => {
  return (
    <div className="text-center">
      <h4>Episode {props.episode_id}:</h4>
      <h4 className="fw-lighter lh-sm">{props.name}</h4>
    </div>
  );
};

export default FilmCardInfo;
