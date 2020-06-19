import React, { useState } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "../TMDB";

function App() {
  const [films, setFilms] = useState(TMDB.films);
  const [faves, setFaves] = useState([]);
  const [current, setCurrent] = useState({});

  const handleFaveToggle = (film) => {
    const favesArray = [...faves];
    const filmIndex = favesArray.indexOf(film);
    if (filmIndex == -1) {
      favesArray.push(film);
    } else {
      favesArray.splice(filmIndex, 1);
    }
    setFaves(favesArray);
  };

 
  return (
    <div className="film-library">
      <FilmListing
        films={films}
        faves={faves}
        onFaveToggle={handleFaveToggle}
        
      />
      <FilmDetails films={current} />
    </div>
  );
}

export default App;
