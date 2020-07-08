import React from 'react';
import './App.css';
import { SearchBar } from './components/movies/SearchBar/SearchBar';
import { MovieList } from './components/movies/MovieList/MovieList';
import { Movie } from './store/movies/types';

function App() {
  const [movies, setMovies] = React.useState<Array<Movie>>([]);

  function handleChange(movies: Array<Movie>){
    setMovies(movies);
  }

  return (
    <div className="App">
      <div className="search-movies">
        <SearchBar onChange={handleChange}/>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
