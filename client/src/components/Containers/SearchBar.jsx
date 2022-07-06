import React, { useState } from "react";
import { getCountryByName } from "../../redux/actions";
import { connect } from "react-redux";
import "./estilos/SearchBar.css";

function SearchBar({ getCountryByName, country }) {
  const [pais, setPais] = useState("");

  function handleChange(evento) {
    setPais(evento.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getCountryByName(pais);
    setPais("");
  }

  return (
    <div className="search-container">
      <form onSubmit={(e) => handleSubmit(e)} className="search-form">
        <div style={{ marginRight: "2rem" }}>
          <input
            style={{ padding: "16px" }}
            placeholder="Buscar Pais..."
            autoComplete="off"
            type="text"
            id="country"
            value={pais}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn-search" type="submit">
          BUSCAR
        </button>
      </form>
      <br />
      <ul>
        {country?.map((e) => {
          console.log(country[0].cca3);
          return (
            <div key={e.id}>
              <a
                className="Card"
                style={{ textDecoration: "none" }}
                href={` /inicio/detail/${country[0].cca3}`}
              >
                <img
                  className="img-card"
                  src={e.flags[1]}
                  alt="imagen de bandera"
                />
                <div className="h-card">
                  <h2>{e.name.official}</h2>
                  <h3>{e.continents[0]}</h3>
                </div>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    country: state.country,
  };
}

export default connect(mapStateToProps, { getCountryByName })(SearchBar);
