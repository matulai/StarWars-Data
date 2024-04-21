import React from "react";
import { useParams } from "react-router-dom";
import CategoryComp from "../component/category.jsx";
import Pagination from "../component/pagination.jsx";

import "../../styles/category.css";

export const Category = () => {
  const { category } = useParams();

  return (
    <div className="d-flex flex-column">
      <CategoryComp category={category}></CategoryComp>
      {category !== "films" && <Pagination category={category}></Pagination>}
    </div>
  );
};
