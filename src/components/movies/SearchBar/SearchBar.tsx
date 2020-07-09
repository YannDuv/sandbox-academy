import React from "react";
import "./SearchBar.css";
import { updateMovies } from "../../../store/movies/actions";
import { store } from "../../../store";

const apiKey="insert your key here";

function getMovies( key: string, keyword: string) {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${keyword}`)
    .then((response) => response.json()).then((json) => json.results);
}

export const SearchBar = () => {
  const [searchKey, setSearchKey] = React.useState<string>("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchKey(e.currentTarget.value);
  }

  function handleSubmit(e: any) {
    fetchMovies();
    e.preventDefault();
  }

  function fetchMovies(){
    getMovies(apiKey,searchKey)
    .then((result) =>store.dispatch(updateMovies(result)))
    .catch((err) => {
      console.error(`Failed to recover movies using DMDB API due to error : ${err}`);
    });
  }
  
  return (
      <form className="search" onSubmit={handleSubmit}>
        <input aria-label="Search" type="text" value={searchKey} onChange={handleChange} placeholder="Insert your movie title here."/>
        <button type="submit">
          search
        </button>
      </form>
  );
};