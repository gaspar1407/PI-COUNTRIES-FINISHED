import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions.js";
import "./estilos/Detail.css";

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  React.useEffect(() => dispatch(getDetail(id)), []);

  return (
    /*  <div className="detail-container">
      <div className="card-detail">
        <img className="img-detail" src={countries.imagenBandera} />
        <div className="text-detail">
          <span>Codigo: {countries.id}</span>
          <h2>Nombre: {countries.name}</h2>
          <h4>Continente: {countries.continente}</h4>
          <h5>Capital: {countries.capital}</h5>
          <h5>Subregion: {countries.subregion}</h5>
          <h5>Area: {countries.area} km2</h5>
          <h5> Poblacion: {countries.poblacion}</h5>
          <div className="Activity-container">
            Actividades:
            {console.log("soy activities", countries.activities)}
            {countries.activities?.length > 0
              ? countries.activities.map((a) => {
                  return (
                    <div key={a.ID}>
                      <p>Nombre: {a.Nombre} </p>
                      <p>Duración: {a.Duración}</p>
                      <p>Dificultad: {a.Dificultad} </p>
                      <p>Temporada: {a.Temporada} </p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div> */
    <div className="divContainer" id="countryDetail">
      <div className="infoContainer">
        <div className="card" id="information">
          <h3 className="text"> ID: {countries.id}</h3>
          <div id="continent">
            <p className="text" id="continentTitle">
              CONTINENTE:
            </p>
            <p className="text" id="continentData">
              {countries.continente}
            </p>
          </div>
          <div id="capital">
            <p className="text" id="titleUnderline">
              CAPITAL:
            </p>
            <p className="text">{countries.capital} </p>
          </div>
          <div id="subregion">
            <p className="text" id="titleUnderline">
              SUBREGION:
            </p>
            <p className="text">{countries.subregion}</p>
          </div>
          <div id="population">
            <p className="text" id="titleUnderline">
              POBLACION:
            </p>
            <p className="text">{countries.poblacion}</p>
          </div>
          <h2 className="text" id="title">
            {countries.name}
          </h2>
          <div id="area">
            <p className="text" id="titleUnderline">
              AREA:
            </p>
            <p className="text">{countries.area} km</p>
          </div>
          <img
            className="flag"
            id="imageFlag"
            src={countries.imagenBandera}
            alt="Bandera"
          />
        </div>
      </div>
      <div className="activityContainer">
        <div className="card" id="activities">
          <p className="text" id="titleUnderline">
            ACTIVIDADES:
          </p>
          <div className="text" id="lista">
            {countries.activities?.length > 0
              ? countries.activities.map((a) => {
                  let Verano = <span>☀️</span>;
                  let Invierno = <span>❄️</span>;
                  let Otoño = <span>🍁</span>;
                  let Primavera = <span>🌸</span>;
                  let Temporada;
                  if (a.Temporada === "Verano") Temporada = Verano;
                  if (a.Temporada === "Invierno") Temporada = Invierno;
                  if (a.Temporada === "Otoño") Temporada = Otoño;
                  if (a.Temporada === "Primavera") Temporada = Primavera;
                  return (
                    <details>
                      <summary>{a.Nombre}</summary>
                      <p key={a.ID}> &#x1F5F8; Nombre: {a.Nombre} </p>
                      <p> &#128336; Duración: {a.Duración}</p>
                      <p> &#11088; Dificultad: {a.Dificultad} </p>
                      <p>
                        {Temporada} Temporada: {a.Temporada}
                      </p>
                    </details>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

{
  /* <img className="img-detail" src={countries.imagenBandera} />
        <div className="text-detail">
          <span>Codigo: {countries.id}</span>
          <span>Nombre: {countries.name}</span>
          <span>Continente: {countries.continente}</span>
          <span>Capital: {countries.capital}</span>
          <span>Subregion: {countries.subregion}</span>
          <span>Area: {countries.area} km2</span>
          <span> Poblacion: {countries.poblacion}</span>
          <span>Actividades: {countries.activities}</span>
        </div>
      </div>
    </div> */
}
