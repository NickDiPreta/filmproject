import React, { useState } from "react";
import FilmRow from "./FilmRow";

const FilmListing = (props) => {
  const allFilms = [];
  props.films.map((each) => {
    allFilms.push(<FilmRow film={each} />);
  });
  const [filter, setFilter] = useState("all");
  const handleFilterClick = (filter) => setFilter(filter);
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div
          className={`film-list-filter ${filter === "all" ? "is-active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div
          className={`film-list-filter ${
            filter === "faves" ? "is-active" : ""
          }`}
          onClick={() => handleFilterClick("faves")}
        >
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>

      {allFilms}
    </div>
  );
};

export default FilmListing;
