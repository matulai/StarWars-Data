import React, { useState, useEffect } from "react";

const Img = ({ category, uid }) => {
  const prefix =
    category === "starships"
      ? "st"
      : category === "species"
      ? "sp"
      : category[0];
  const imageName = `${prefix}${uid}`;

  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        `../../img/${category}/${imageName}.jpg`
      );
      setImage(imageModule.default);
    };

    loadImage();
  }, [imageName]);

  return <img className="img-fluid" src={image} alt={`Image ${uid}`} />;
};

export default Img;
