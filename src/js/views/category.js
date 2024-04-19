import React from "react";
import { useParams } from "react-router-dom";
import CategoryComp from "../component/category.jsx";

import "../../styles/category.css";

export const Category = () => {
  const { category } = useParams();

  return <CategoryComp category={category}></CategoryComp>;
};
