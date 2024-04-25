import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "./card.jsx";

const Category = (props) => {
  const { store } = useContext(Context);
  const [currentPageData, setCurrentPageData] = useState([]);

  const categoryList = {
    characters: store.charactersList,
    films: store.filmsList,
    species: store.speciesList,
    starships: store.starshipsList,
    vehicles: store.vehiclesList,
    planets: store.planetsList,
  };

  useEffect(() => {
    const currentPageNumber = store.currentPage[props.category];
    setCurrentPageData(categoryList[props.category][currentPageNumber] || []);
  }, [
    store.charactersList,
    store.filmsList,
    store.speciesList,
    store.vehiclesList,
    store.starshipsList,
    store.planetsList,
    props.category,
    store.currentPage[props.category],
  ]);

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-9">
        {(!store.isSmall || store.isMobile) && (
          <>
            <div className="row d-flex justify-content-center">
              {currentPageData
                .slice(0, props.category === "films" ? 3 : 5)
                .map((element, index) => (
                  <div
                    key={element.uid + element.name + index}
                    className="col-lg-2 col-md-11 col-sm-12 mb-3"
                  >
                    <Card
                      category={props.category}
                      uid={element.uid}
                      episode_id={
                        props.category === "films"
                          ? element.properties?.episode_id
                          : ""
                      }
                      name={
                        props.category === "films"
                          ? element.properties?.title
                          : element.name
                      }
                    />
                  </div>
                ))}
            </div>

            <div className="row d-flex justify-content-center">
              {currentPageData
                .slice(props.category === "films" ? 3 : 5)
                .map((element, index) => (
                  <div
                    key={element.uid + element.name + index}
                    className="col-lg-2 col-md-11 col-sm-12 mb-3"
                  >
                    <Card
                      category={props.category}
                      uid={element.uid}
                      episode_id={
                        props.category === "films"
                          ? element.properties?.episode_id
                          : ""
                      }
                      name={
                        props.category === "films"
                          ? element.properties?.title
                          : element.name
                      }
                    />
                  </div>
                ))}
            </div>
          </>
        )}

        {store.isSmall && (
          <div className="row d-flex justify-content-center">
            {currentPageData.map((element, index) => (
              <div
                key={element.uid + element.name + index}
                className="col-4 mb-3"
              >
                <Card
                  category={props.category}
                  uid={element.uid}
                  episode_id={
                    props.category === "films"
                      ? element.properties?.episode_id
                      : ""
                  }
                  name={
                    props.category === "films"
                      ? element.properties?.title
                      : element.name
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
