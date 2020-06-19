import React from "react";
import Poster from "./FilmPosters";
import Fave from "./Fave";

const FilmRow = (props) => {
  let d = new Date(props.film.release_date);

  return (
    <div
      className="film-row"
      id={props.film.id}
      onClick={()=>props.onDetailsClick}
    >
      <Poster posterUrl={props.film} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{d.getFullYear()}</p>
      </div>
      <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave} />
    </div>
  );
};

export default FilmRow;
