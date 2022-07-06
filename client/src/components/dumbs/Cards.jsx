import React from "react";
import Card from "./Card";
import "../Containers/estilos/Cards.css";

export default function Cards({ countries }) {
  const noImg =
    "https://images.unsplash.com/photo-1621977717126-e29965156a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80";
  return (
    <React.Fragment>
      <div className="card-container">
        {countries.length > 0 ? (
          countries.map((e) => (
            <Card
              key={e.id}
              imagenBandera={
                e.imagenBandera === "unknown" ? `${noImg}` : e.imagenBandera
              }
              name={e.name}
              continente={e.continente}
              id={e.id}
            />
          ))
        ) : (
          <h1>Loading..</h1>
        )}
      </div>
    </React.Fragment>
  );
}

/* <div className="container-spinner">
  <img
    className="loader-img"
    src="https://cdn.dribbble.com/users/370558/screenshots/2537656/white.gif"
    alt="avion volando"
  />
</div> */
