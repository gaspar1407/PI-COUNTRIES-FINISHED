import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  orderByActivities,
  orderContinent,
  orderPopulation,
  orderSort,
} from "../.././redux/actions";
import "./estilos/Filter.css";

function Filter({ setOrder }) {
  const dispatch = useDispatch();

  const handleSort = (e) => {
    dispatch(orderSort(e.target.value));
    setOrder(`Order ${e.target.value}`);
  };
  const handlePopulation = (e) => {
    dispatch(orderPopulation(e.target.value));
    setOrder(`Order ${e.target.value}`);
  };
  useEffect(() => {
    setOrder("Ordenado");
  }, [handleSort, handlePopulation]);

  const handleContinent = (e) => {
    e.preventDefault();
    dispatch(orderContinent(e.target.value));
  };

  const cargeCountries = () => {
    dispatch(getCountries());
  };

  /* const handleActivities = () => {
    dispatch(orderByActivities());
  }; */

  /*  async function handleActivities() {
    const res = await axios.get("http://localhost:3001/activitiesCreate");
     return res.data
  } */

  const handleActivities = (e) => {
    e.preventDefaultent();
    dispatch(orderByActivities(e.target.value));
  };

  return (
    <div className="filter-container">
      <select defaultValue={"DEFAULT"} onChange={(e) => handleContinent(e)}>
        <option value="DEFAULT" hidden>
          Filtrar Por Continente
        </option>
        <option value="All">Todos</option>
        <option value="Africa">Africa</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select defaultValue={"DEFAULT"} onChange={(e) => handleSort(e)}>
        <option value="DEFAULT">Ordenar Alfabeticamente</option>
        <option value="Asc">A-Z</option>
        <option value="Desc">Z-A</option>
      </select>

      <select defaultValue={"DEFAULT"} onChange={(e) => handlePopulation(e)}>
        <option value="DEFAULT">Ordenar Por Población </option>
        <option value="Asc">Menor Poblacion</option>
        <option value="Desc">Mayor Poblacion</option>
      </select>

      <button className="buttonAllCountries" onClick={cargeCountries}>
        Todos Los Paises
      </button>
    </div>
  );
}

export default Filter;
