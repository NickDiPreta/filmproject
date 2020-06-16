import React from "react";
import FilmRow from "./FilmRow";

const FilmListing = (props) => {
  const allFilms = [];
  props.films.map((each) => {
    allFilms.push(<FilmRow film={each} />);
  });

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {allFilms}
    </div>
  );
};

export default FilmListing;
