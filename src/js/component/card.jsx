import React from "react";
import Img from "./img.jsx";

const Card = (props) => {
  console.log(props.name, props.uid, props.category);
  return (
    <div className="card mx-2">
      <Img category={props.category} uid={props.uid}></Img>
      <h4>{props.name}</h4>
    </div>
  );
};

export default Card;
