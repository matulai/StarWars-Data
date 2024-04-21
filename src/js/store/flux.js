const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      currentPage: {
        characters: 1,
        films: 1,
        species: 1,
        starships: 1,
        vehicles: 1,
        planets: 1,
      },

      totalPages: {},
      charactersList: {},
      filmsList: {},
      speciesList: {},
      starshipsList: {},
      vehiclesList: {},
      planetsList: {},
      favorites: [],
    },

    actions: {
      getData: (category, direction = 0, toPage = false) => {
        // api has "people" category but i use "characters" instead
        let people = null;
        if (category === "characters") people = "people";

        const store = getStore();

        const page = toPage
          ? direction
          : getActions().validPage(
              store.currentPage[category] + direction,
              category
            );

        const updatedCurrentPage = {
          ...store.currentPage,
          [category]: page,
        };
        setStore({ currentPage: updatedCurrentPage });

        if (
          store[`${category}List`][page] &&
          Object.keys(store[`${category}List`][page])?.length !== 0
        )
          return;

        fetch(
          `https://www.swapi.tech/api/${
            people || category
          }?page=${page}&limit=10`
        )
          .then((response) => response.json())
          .then((data) => {
            getActions().setStoreData(category, page, data);
          })
          .catch((error) => console.error(error));
      },

      validPage: (page, category) => {
        const parsedTotalPages = parseInt(getStore().totalPages[category]);
        if (page < 1) return 1;
        if (page > parsedTotalPages) return parsedTotalPages;
        return page;
      },

      setStoreData: (category, page, data) => {
        const store = getStore();

        if (!store.totalPages[category]) {
          const updatedTotalPages = {
            ...store.totalPages,
            [category]: data.total_pages,
          };
          setStore({ totalPages: updatedTotalPages });
        }

        const info = category === "films" ? data.result : data.results;

        const updatedList = { ...store[`${category}List`], [page]: info };
        setStore({ [`${category}List`]: updatedList });
      },

      setFav: (name, fav) => {
        if (fav) {
          if (!getStore().favorites.includes(name))
            return setStore({ favorites: [...getStore().favorites, name] });
        } else {
          const updatedFav = getStore().favorites.filter(
            (element) => element !== name
          );
          return setStore({ favorites: updatedFav });
        }
      },

      setFavList: (list) => {
        setStore({ favorites: list });
      },

      getSingleData: (category, uid) => {
        let info = null;
        let people = null;
        if (category === "characters") people = "people";

        return fetch(`https://www.swapi.tech/api/${people || category}/${uid}`)
          .then((response) => response.json())
          .then((data) => {
            info = data.result;
            getActions().findElementByID(category, uid, info);
            return info;
          })
          .catch((error) => console.error(error));
      },

      findElementByID: (category, id, info) => {
        for (const page of Object.values(getStore()[`${category}List`])) {
          const element = Object.values(page).find((elem) => elem.uid === id);
          if (element) return info ? { ...element, info: info } : element;
        }
        return null;
      },
    },
  };
};

export default getState;
