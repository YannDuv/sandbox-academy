import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage/MoviePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

function App() {
  return (
    <div className="App">
        <div>
            <Route exact path="/" component={MoviesPage} />
            <Route exact path="/q=:id?" component={MoviePage} />
        </div>
    </div>
  );
}

export default App;
