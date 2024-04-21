import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Img from "./img.jsx";
import FilmInfo from "./element_info/film_info.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Context } from "../store/appContext";
import "../../styles/card.css";

const Card = (props) => {
  let content = null;

  const { actions } = useContext(Context);
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav);
    actions.setFav(props.name, !fav);
  }

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
    <div className="card mx-1 p-2">
      <Img category={props.category} uid={props.uid}></Img>
      {content}
      <div className="d-flex justify-content-between">
        <Link to={`/${props.category}/${props.uid}`}>
          <button className="btn btn-primary">Read more</button>
        </Link>
        <button className="btn fav-btn px-0">
          {fav ? (
            <Icon
              className="fs-3 fav"
              icon="material-symbols:kid-star"
              onClick={handleFav}
            />
          ) : (
            <Icon
              className="fs-3"
              icon="material-symbols:kid-star-outline"
              onClick={handleFav}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
