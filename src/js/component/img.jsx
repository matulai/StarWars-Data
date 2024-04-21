import React from "react";
import images from "../images";

const Img = ({ category, uid }) => {
  const prefix =
    category === "starships"
      ? "st"
      : category === "species"
      ? "sp"
      : category[0];

  const imageName = `${prefix}${uid}`;

  return <img src={images[imageName]} alt={`Image ${uid}`} />;
};

export default Img;
