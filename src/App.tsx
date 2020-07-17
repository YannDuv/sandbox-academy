import React from "react";
import { Route, MemoryRouter } from "react-router-dom";
import MoviePage from "./pages/MoviePage/MoviePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Route exact path="/" component={MoviesPage} />
        <Route exact path="/q=:id?" component={MoviePage} />
      </div>
    </MemoryRouter>
  );
}

export default App;
