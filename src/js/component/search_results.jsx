import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card.jsx";

const Category = (props) => {
  const { store } = useContext(Context);

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-9">
        <div className="row d-flex justify-content-center">
          {store.searchResult.length > 0 &&
            store.searchResult.map((element) => (
              <div
                key={element.uid + element.name + "search"}
                className={`${
                  !store.isSmall || store.isMobile
                    ? "col-lg-2 col-md-11 col-sm-12"
                    : "col-4"
                }  mb-3`}
              >
                <Card
                  category={props.category}
                  uid={element.uid}
                  name={element.properties?.name}
                />
              </div>
            ))}
          {store.searchResult.length == 0 && (
            <h1 className="text-white text-center">No results found :c</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
