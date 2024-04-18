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
      charactersList: {},
      filmsList: {},
      speciesList: {},
      starshipsList: {},
      vehiclesList: {},
      planetsList: {},
    },
    actions: {
      getData: (category, direction = 0) => {
        let people = null;
        if (category === "characters") people = "people";

        const store = getStore();
        const page = store.currentPage[category] + direction;
        fetch(
          `https://www.swapi.tech/api/${
            people || category
          }?page=${page}&limit=10`
        )
          .then((response) => response.json())
          .then((data) => {
            const updatedCurrentPage = {
              ...store.currentPage,
              [category]: page,
            };
            setStore({ currentPage: updatedCurrentPage });

            const info = category === "films" ? data.result : data.results;

            const updatedList = { ...store[`${category}List`], [page]: info };
            setStore({ [`${category}List`]: updatedList });
          })
          .catch((error) => console.error(error));
      },
    },
  };
};

export default getState;
