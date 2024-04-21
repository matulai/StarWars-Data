import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const Pagination = ({ category }) => {
  const { store, actions } = useContext(Context);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const newPageNumbers = Array.from(
      { length: store.totalPages[category] },
      (_, i) => i + 1
    );
    setPageNumbers(newPageNumbers);
  }, [store.totalPages[category]]);

  return (
    <nav aria-label="navigation" className="mt-4">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${
            store.currentPage[category] === 1 ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            aria-hidden="true"
            onClick={() => {
              actions.getData(category, -1);
            }}
          >
            &laquo;
          </a>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={"page" + number}
            className={`page-item ${
              store.currentPage[category] === number ? "active" : ""
            }`}
          >
            <a
              className="page-link"
              onClick={() => {
                actions.getData(category, number, true);
              }}
            >
              {number}
            </a>
          </li>
        ))}

        <li
          className={`page-item ${
            store.currentPage[category] === store.totalPages[category]
              ? "disabled"
              : ""
          }`}
        >
          <a
            className="page-link"
            aria-hidden="true"
            onClick={() => {
              actions.getData(category, 1);
            }}
          >
            &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
