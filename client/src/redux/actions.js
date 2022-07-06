import { axios } from "axios";
export const GET_COUNTRIES = "OBTENER TODOS LOS COUNTRIES";
export const ADD_ACTIVITIES = "AGREGAR ACTIVITIES";
export const GET_DETAIL = "OBTENER DETALLE DE PAIS";
export const GET_COUNTRYBYNAME = "OBTENER PAIS POR NOMBRE";
export const ORDER_SORT = "ORDENAR POR NOMBRE";
export const ORDER_POPULATION = "ORDENAR POR PONLACION";
export const ORDER_CONTINENT = "ORDENAR POR CONTINENTE";
export const ORDER_BY_ACTIVITIES = "ORDENAR POR ACTIVIDADES";

/* const URL_BACK = "http://localhost:3001/countries"; */

/* export function getCountries() {
  return async function (dispatch) {
    let llamado = await axios.get("http://localhost:3001/countries");
    dispatch({ type: GET_COUNTRIES, payload: llamado.data });
  };
} */

export function getCountries() {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/countries");
    const r = await res.json();
    return dispatch({ type: GET_COUNTRIES, payload: r });
    //.then((r) => console.log(r));
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/countries?name=${name}`);
    const r = await res.json();
    return dispatch({ type: GET_COUNTRYBYNAME, payload: r });
    //.then((r) => console.log(r));
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/countries/${id}`);
    const r = await res.json();
    return dispatch({ type: GET_DETAIL, payload: r });
  };
}

export function addActivities(objeto) {
  return async function (dispatch) {
    const res = await axios.post("http://localhost:3001/activities", objeto);
    console.log("SOY RES.DATA", res.data);
    return dispatch({ type: ADD_ACTIVITIES, payload: res.data });
  };
}

export function orderSort(payload) {
  return {
    type: ORDER_SORT,
    payload,
  };
}
export function orderPopulation(payload) {
  return {
    type: ORDER_POPULATION,
    payload,
  };
}

export function orderContinent(payload) {
  return {
    type: ORDER_CONTINENT,
    payload,
  };
}

export function orderByActivities() {
  return async function (dispatch) {
    const res = await axios.get("https://localhost:3001/activitiesCreate");
    console.log(res.data);
    return dispatch({
      type: ORDER_BY_ACTIVITIES,
      payload: res.data,
    });
  };
}
