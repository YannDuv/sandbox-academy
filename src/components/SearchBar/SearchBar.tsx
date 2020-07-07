import React from "react";
import "./SearchBar.css";

const apiKey="insert your key here";

type Movie = {
  id: string;
  title: string;
  poster_path: string;
}

function getMovie(listMovies: (movies: Array<Movie>) => void, key: string, keyword: string) {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${keyword}`)
    .then((response) => response.json())
    .then(({ results }) => {
      listMovies(results);
    })
}

export const SearchBar = () => {
  const [movies, setMovies] = React.useState<Array<Movie>>([]);
  const [searchKey, setSearchKey] = React.useState<string>("");
  
  function handleClick() {
    getMovie(setMovies,apiKey,searchKey).then((result) =>console.log("ok", result)
    ).catch((err) => {
      console.error(`Failed to recover movies using DMDB API due to error : ${err}`);
    });
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchKey(e.currentTarget.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter'){
      handleClick();
    }
  }
  
  return (
    <div className="search-movies">
      <div className="search">
        <input type="text" value={searchKey} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button onClick={handleClick}>
          search
        </button>
      </div>
      <ul className="movies">
        {movies.map((movie, index) => {
          return <li key={index} className={`movie ${movie.id}`}>
            <div className="title">
              <h2>{movie.title}</h2>
            </div>
            <div className="poster">
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
            </div>
          </li>
        })}
      </ul>
    </div>
  );
};