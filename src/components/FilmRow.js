import React from "react";
import Poster from "./FilmPosters"

const FilmRow = (props) => {
    let d = new Date(props.film.release_date)
    
  return (
    <div className="film-row" id={props.film.id}>
      <Poster posterUrl={props.film}/>
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{d.getFullYear()}</p>
      </div>
    </div>
  );
};

export default FilmRow;
