import React from "react";
import MovieSearch from "../../components/movies/MovieSearch/MovieSearch";
import MovieGrid from "../../components/movies/MovieGrid/MovieGrid";

function MoviesPage() {
  return (
    <div className="MovieSearch">
      <MovieSearch />
      <MovieGrid />
    </div>
  );
}

export default MoviesPage;
