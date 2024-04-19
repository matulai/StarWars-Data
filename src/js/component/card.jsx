import React from "react";
import Img from "./img.jsx";
import FilmInfo from "./element_info/film_info.jsx";

const Card = (props) => {
  let content = null;

  switch (props.category) {
    case "films":
      content = <FilmInfo episode_id={props.episode_id} name={props.name} />;
      break;
    default:
      content = (
        <div className="text-center">
          <h4>{props.name}</h4>
        </div>
      );
      break;
  }

  return (
    <div className="card mx-2 p-2">
      <Img category={props.category} uid={props.uid}></Img>
      {content}
      <div>
        <button className="btn btn-primary">Read more</button>
      </div>
    </div>
  );
};

export default Card;
