import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = () => {
  const { store } = useContext(Context);

  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favorites
      </button>
      <ul className="dropdown-menu">
        {store.favorites.length === 0 ? (
          <li className="px-1" key={"nofav"}>
            No favorites yet!
          </li>
        ) : (
          store.favorites.map((fav) => (
            <li className="px-1" key={"fav" + fav}>
              {fav}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
