import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CategoryComp from "../component/category.jsx";

import "../../styles/category.css";

export const Category = () => {
  const { category } = useParams();
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            actions.getData(category, 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            actions.getData(category, -1);
          }}
        >
          Prev
        </button>
      </div>
      <CategoryComp category={category}></CategoryComp>
    </div>
  );
};
