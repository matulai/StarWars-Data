import React, { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCharacters from "../../img/categories/characters.png";
import CategoryFilms from "../../img/categories/films.png";
import CategorySpecies from "../../img/categories/species.png";
import CategoryStarships from "../../img/categories/starships.png";
import CategoryVehicles from "../../img/categories/vehicles.png";
import CategoryPlanets from "../../img/categories/planets.png";
import Card from "./card.jsx";
import { Context } from "../store/appContext";

const Carousel = (props) => {
  const { store } = useContext(Context);
  const [firstPageData, setFirstPageData] = useState([]);

  useEffect(() => {
    setFirstPageData(categoryList[props.category][1] || []);
  }, [
    store.charactersList,
    store.filmsList,
    store.speciesList,
    store.vehiclesList,
    store.starshipsList,
    store.planetsList,
  ]);

  const categoryTitle = {
    characters: CategoryCharacters,
    films: CategoryFilms,
    species: CategorySpecies,
    starships: CategoryStarships,
    vehicles: CategoryVehicles,
    planets: CategoryPlanets,
  };

  const categoryList = {
    characters: store.charactersList,
    films: store.filmsList,
    species: store.speciesList,
    starships: store.starshipsList,
    vehicles: store.vehiclesList,
    planets: store.planetsList,
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8">
          <Link to={`/${props.category}`}>
            <img
              src={categoryTitle[props.category]}
              style={{ height: "2.5rem" }}
            />
          </Link>
          <div className="slider-container">
            <Slider {...settings}>
              {firstPageData.map((element) => (
                <Card
                  key={element.uid + element.name}
                  category={props.category}
                  uid={element.uid}
                  episode_id={
                    props.category === "films"
                      ? element.properties.episode_id
                      : ""
                  }
                  name={
                    props.category === "films"
                      ? element.properties?.title
                      : element.name
                  }
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
