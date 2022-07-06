import React from "react";
import "../Containers/estilos/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <React.Fragment>
      <Link
        to={`/inicio/detail/${props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className="Card">
          <img
            alt="imagen de bandera"
            className="img-card"
            src={props.imagenBandera}
          ></img>
          <div className="h-card">
            <h2>{props.name}</h2>
            <h3>{props.continente}</h3>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
