import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryComp from "../component/category.jsx";
import Pagination from "../component/pagination.jsx";
import SearchResults from "../component/search_results.jsx";
import { Context } from "../store/appContext.js";

import "../../styles/category.css";

export const Category = () => {
  const { category } = useParams();
  const { store } = useContext(Context);

  return (
    <div className="d-flex flex-column">
      {category !== "films" && store.searching ? (
        <SearchResults category={category}></SearchResults>
      ) : (
        <CategoryComp category={category}></CategoryComp>
      )}

      {category !== "films" && !store.searching && (
        <Pagination category={category}></Pagination>
      )}
    </div>
  );
};
