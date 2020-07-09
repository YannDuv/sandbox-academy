import React from 'react';
import './App.css';
import { SearchBar } from './components/movies/SearchBar/SearchBar';
import { MovieList } from './components/movies/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <div className="search-movies">
        <SearchBar/>
        <MovieList/>
      </div>
    </div>
  );
}

export default App;
