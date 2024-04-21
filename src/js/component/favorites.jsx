import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Icon } from "@iconify/react/dist/iconify.js";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <button
        className="btn btn-warning dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Favorites{" "}
        <span className="badge bg-light text-dark">
          {store.favorites.length}
        </span>
      </button>
      <ul className="dropdown-menu">
        {store.favorites.length === 0 ? (
          <li className="px-1" key={"nofav"}>
            No favorites yet!
          </li>
        ) : (
          store.favorites.map((fav, index) => (
            <div key={"fav" + fav}>
              {index !== 0 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
              <li className="px-1 d-flex justify-content-between align-items-center">
                {fav}
                <button
                  className="btn"
                  onClick={() => {
                    actions.setFav(fav, false);
                  }}
                >
                  <Icon icon="solar:trash-bin-trash-bold" />
                </button>
              </li>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
