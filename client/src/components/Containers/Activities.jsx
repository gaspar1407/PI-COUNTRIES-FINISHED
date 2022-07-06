import React, { useEffect } from "react";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getCountries, addActivities } from "../.././redux/actions";
import axios from "axios";
import "./estilos/Activities.css";
const Activities = (props) => {
  const [errorsValue, setErrorsValue] = useState({});

  const [Nombre, setName] = useState("");
  const [Dificultad, setDifficulty] = useState("");
  const [Duración, setDuration] = useState("");
  const [Temporada, setSeason] = useState("");
  const [countries, setCountries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorsValue(
      validateValue({ countries, Nombre, Dificultad, Duración, Temporada })
    );

    const error = validateValue({
      countries,
      Nombre,
      Dificultad,
      Duración,
      Temporada,
    });
    console.log(countries, Nombre, Dificultad, Duración, Temporada);
    const res = await axios.post("http://localhost:3001/activities", {
      Nombre,
      Dificultad,
      Duración,
      Temporada,
      paises: [...countries],
    });

    alert("Activity created");

    setCountries([]);
  };

  const removeCountry = (e) => {
    setCountries(countries.filter((c) => c !== e.target.name));
    console.log(countries);
  };

  function repetidos(array) {
    return new Set(array).size !== array.length;
  }

  //--- VALIDACIÓN ----

  function validateValue({
    Nombre,
    Dificultad,
    Duración,
    Temporada,
    countries,
  }) {
    let errors = {};
    if (!Nombre) {
      errors.Nombre = "Name is required";
    } else if (!/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/.test(Nombre)) {
      errors.Nombre = "Name is invalid";
    }
    if (!Duración || Duración === "Duración") {
      errors.Duración = "Duration is required";
    }
    if (!Dificultad || Dificultad === "Dificultad") {
      errors.Dificultad = "Difficulty is required";
    }
    if (!Temporada || Temporada === "Temporada") {
      errors.Temporada = "Season is required";
    }
    if (!countries[0]) {
      errors.countries = "Country is required";
    }
    if (repetidos(countries)) {
      errors.countries = "You cannot enter duplicate countries";
    }
    return errors;
  }

  return (
    <div className="divContainer">
      <form
        className="form-container"
        name="formAct"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="newActivity">New Activity</h1>

        {/* INPUT NAME */}

        <input
          className="activityName"
          name="Nombre"
          autoComplete="off"
          placeholder="Nombre de la Actividad..."
          onChange={(e) => setName(e.target.value)}
        />
        <p className="danger">{errorsValue.Nombre}</p>

        {/* DURATION  */}

        <div>
          <select
            className="select"
            name="Duración"
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>Duración</option>
            <option>30 min</option>
            <option>1 Hr</option>
            <option>2 Hrs</option>
            <option>3 Hrs</option>
            <option>4 Hrs</option>
            <option>5 Hrs</option>
          </select>
          <p className="danger">{errorsValue.Duración}</p>
        </div>

        {/* DIFFICULTY */}

        <div>
          <select
            className="dif-ses"
            name="Dificultad"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Dificultad</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          {/* SEASON */}

          <select
            className="dif-ses"
            name="Temporada"
            onChange={(e) => setSeason(e.target.value)}
          >
            <option>Temporada</option>
            <option>Invierno</option>
            <option>Primavera</option>
            <option>Verano</option>
            <option>Otoño</option>
          </select>
          <div className="difficulty-season">
            <span className="danger">{errorsValue.Dificultad}</span>
            <span className="danger">{errorsValue.Temporada}</span>
          </div>
        </div>

        {/* COUNTRIES */}

        <div>
          <select
            className="select"
            onChange={(e) => {
              e.preventDefault(e);
              setCountries([...countries, e.target.value]);
            }}
          >
            <option>Paises</option>
            {/* {console.log(props.countries)} */}
            {props.countries?.length > 0
              ? props.countries?.map((c) => {
                  return (
                    <option key={c.name} name={c.name} value={c.id}>
                      {c.name}
                    </option>
                  );
                })
              : null}
          </select>
          <p className="danger">{errorsValue.countries}</p>
        </div>
        <div>
          <button type="submit" className="createActivity">
            Crear Actividad
          </button>
        </div>
        <div className="countriesList">
          <ul>
            {countries?.map((el) => {
              let name = props.countries?.map((e) =>
                e.id === el ? e.name : null
              );
              return (
                <div className="CountriesList" key={el}>
                  {console.log(el)}
                  <span className="lista">
                    {name}
                    <button
                      key={el}
                      name={el}
                      className="closeButton"
                      onClick={(e) => {
                        removeCountry(e);
                      }}
                    >
                      ❌
                    </button>
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(Activities);

/* function Activities({ addActivities, activities }) {
  /* useEffect(() => {
    addActivities();
  }, [handleSubmit, handleChange]); 

  let [input, setInput] = useState({
    Nombre: "Nombre",
    Dificultad: 0,
    Duración: "Duración",
    Temporada: "Temporada",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatchEvent(
      addActivities({
        Nombre: input.Nombre,
        Dificultad: input.Dificultad,
        Duración: input.Duración,
        Temporada: input.Temporada,
      })
    );
    setInput({
      Nombre: "",
      Dificultad: 0,
      Duración: "",
      Temporada: "",
    });
  };

  let handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={input.Nombre}
        name={"Nombre"}
      ></input>
      <input
        onChange={handleChange}
        value={input.Dificultad}
        name={"Dificultad"}
      ></input>
      <input
        onChange={handleChange}
        value={input.Duración}
        name={"Duración"}
      ></input>
      <input
        onChange={handleChange}
        value={input.Temporada}
        name={"Temporada"}
      ></input>
      <button type="submit">Agregar</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { activities: state.activities };
}

export default connect(mapStateToProps, { addActivities })(Activities); */
