import {
  ADD_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRYBYNAME,
  GET_DETAIL,
  ORDER_SORT,
  ORDER_POPULATION,
  ORDER_CONTINENT,
  ORDER_BY_ACTIVITIES,
} from "./actions";

let initialState = {
  countries: [],
  activities: [],
  allCountries: [],
  activitiesCreated: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRYBYNAME:
      return { ...state, country: action.payload };
    case GET_DETAIL:
      return {
        ...state,
        countries: action.payload,
        activities: [...state.activities, action.payload],
      };
    case ADD_ACTIVITIES:
      return { ...state, activities: [...state.activities, action.payload] };
    case ORDER_SORT:
      let arr =
        action.payload === "Desc"
          ? state.countries.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1; // los cambia
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            })
          : state.countries.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1; // los cambia
              } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            });
      return {
        ...state,
        countries: arr,
      };
    case ORDER_POPULATION:
      let order =
        action.payload === "Asc"
          ? state.countries.sort((a, b) => {
              if (a.poblacion < b.poblacion) {
                return -1; // los cambia
              } else if (b.poblacion < a.poblacion) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            })
          : state.countries.sort((a, b) => {
              if (a.poblacion > b.poblacion) {
                return -1; // los cambia
              } else if (b.poblacion > a.poblacion) {
                return 1; //los cambia
              } else {
                return 0; //los deja igual
              }
            });
      return {
        ...state,
        countries: order,
      };
    case ORDER_CONTINENT:
      const countriesFilter =
        action.payload === "All"
          ? state.allCountries
          : state.allCountries.filter((el) => el.continente === action.payload);
      return {
        ...state,
        countries: countriesFilter,
      };
    case ORDER_BY_ACTIVITIES:

    default:
      return { ...state };
  }
}
