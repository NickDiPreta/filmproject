import React from "react";
import Poster from "./FilmPosters";
import Fave from "./Fave";

const FilmRow = (props) => {
  let d = new Date(props.film.release_date);

  const handleDetailsClick = (film) => {
    console.log("Fetching details for " + props.film.title);
  };

  return (
    <div
      className="film-row"
      id={props.film.id}
      onClick={() => handleDetailsClick("film")}
    >
      <Poster posterUrl={props.film} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{d.getFullYear()}</p>
      </div>
      <Fave />
    </div>
  );
};

export default FilmRow;
