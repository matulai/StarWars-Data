import React from "react";

const Img = ({ category, uid }) => {
  const prefix =
    category === "starships"
      ? "st"
      : category === "species"
      ? "sp"
      : category[0];
  const imageName = `${prefix}${uid}`;

  return (
    <img
      className="img-fluid"
      src={`https://github.com/BlondyMartinez/StarWars-Wiki/blob/master/src/img/${category}/${imageName}.jpg?raw=true`}
      alt={`Image ${uid}`}
    />
  );
};

export default Img;
