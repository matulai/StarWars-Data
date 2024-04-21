import React from "react";
import Carousel from "../component/carousel.jsx";

export const Home = () => (
  <div>
    <Carousel category={"characters"} />
    <Carousel category={"films"} />
    <Carousel category={"species"} />
    <Carousel category={"starships"} />
    <Carousel category={"vehicles"} />
    <Carousel category={"planets"} />
  </div>
);
