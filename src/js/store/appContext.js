import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      // get favorites from localstorage
      if (window.localStorage.getItem("favs")) {
        state.actions.setFavList(
          JSON.parse(window.localStorage.getItem("favs"))
        );
      }

      // get data from localstorage or fetch
      if (window.localStorage.getItem("fetchedData")) {
        const fetchedData = JSON.parse(
          window.localStorage.getItem("fetchedData")
        );
        const totalPages = JSON.parse(
          window.localStorage.getItem("totalPages")
        );

        state.store.charactersList = fetchedData[0];
        state.store.filmsList = fetchedData[1];
        state.store.speciesList = fetchedData[2];
        state.store.vehiclesList = fetchedData[3];
        state.store.starshipsList = fetchedData[4];
        state.store.planetsList = fetchedData[5];
        state.store.totalPages = totalPages;
      } else {
        //fetch first page of each category
        state.actions.getData("characters");
        state.actions.getData("films");
        state.actions.getData("species");
        state.actions.getData("vehicles");
        state.actions.getData("starships");
        state.actions.getData("planets");
      }

      const mediaQueryMobile = window.matchMedia("(max-width: 990px)");
      const mediaQuerySmall = window.matchMedia("(max-width: 1650px)");

      const updateState = () => {
        setState((prevState) => ({
          ...prevState,
          store: {
            ...prevState.store,
            isMobile: mediaQueryMobile.matches,
            isSmall: mediaQuerySmall.matches,
          },
        }));
      };

      const mediaQueryChangeListener = () => {
        updateState();
      };

      mediaQueryMobile.addEventListener("change", mediaQueryChangeListener);
      mediaQuerySmall.addEventListener("change", mediaQueryChangeListener);

      updateState();

      return () => {
        mediaQueryMobile.removeEventListener(
          "change",
          mediaQueryChangeListener
        );
        mediaQuerySmall.removeEventListener("change", mediaQueryChangeListener);
      };
    }, []);

    useEffect(() => {
      window.localStorage.setItem(
        "favs",
        JSON.stringify(state.store.favorites)
      );
    }, [state.store.favorites]);

    useEffect(() => {
      const fetchedData = [
        state.store.charactersList,
        state.store.filmsList,
        state.store.speciesList,
        state.store.vehiclesList,
        state.store.starshipsList,
        state.store.planetsList,
      ];
      window.localStorage.setItem("fetchedData", JSON.stringify(fetchedData));
    }, [
      state.store.charactersList,
      state.store.filmsList,
      state.store.speciesList,
      state.store.vehiclesList,
      state.store.starshipsList,
      state.store.planetsList,
    ]);

    useEffect(() => {
      window.localStorage.setItem(
        "totalPages",
        JSON.stringify(state.store.totalPages)
      );
    }, [state.store.totalPages]);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
