import React from "react";
import { updateMovies } from "../../../store/movies/actions";
import { connect } from "react-redux";
import { apiKey } from "../../../utils/api-key";

function getMovies(key: string, keyword: string) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${keyword}`
  )
    .then((response) => response.json())
    .then((json) => json.results);
}

const MovieSearch = ({ dispatch }: any) => {
  const [searchKey, setSearchKey] = React.useState<string>("");

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchKey(e.currentTarget.value);
  }

  function handleSubmit(e: any) {
    fetchMovies();
    e.preventDefault();
  }

  function fetchMovies() {
    getMovies(apiKey, searchKey)
      .then((result) => dispatch(updateMovies(result)))
      .catch((err) => {
        console.error(
          `Failed to recover movies using DMDB API due to error : ${err}`
        );
      });
  }

  return (
    <form className="movie-search" onSubmit={handleSubmit}>
      <input
        aria-label="Search"
        type="text"
        value={searchKey}
        onChange={handleChange}
        placeholder="Insert your movie title here."
        className="movie-keyword"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default connect()(MovieSearch);
