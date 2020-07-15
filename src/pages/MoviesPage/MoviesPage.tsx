import React from 'react';
import './MoviesPage.css';
import MovieList from '../../components/movies/MovieList/MovieList';
import MovieSearch from '../../components/movies/MovieSearch/MovieSearch';

function MoviesPage() {
  return (
    <div className="MovieSearch">
        <MovieSearch/>
        <MovieList/>
    </div>
  );
}

export default MoviesPage;
