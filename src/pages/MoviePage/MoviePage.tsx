import React, { useEffect } from 'react';
import './MoviePage.css';
import { Link } from 'react-router-dom';
import { Movie } from '../../store/movies/types';
import MovieFull from '../../components/movies/MovieFull/MovieFull';
import { apiKey } from '../../utils/api-key';

type IProps ={
    match: {params: {id: number}},
};

function getMovie ( key: string, movieId: string){
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
    .then(response=> response.json())
  }

let MoviePage = ( {match} : IProps) => {
    const [movie, setMovie] = React.useState<Movie>();
  
    useEffect(() => {
        getMovie(apiKey, `${match.params.id}`)
        .then(newMovie => {
            console.log(newMovie);
            setMovie(newMovie);
        });
    },[movie,match.params.id]);

    return (
        <div className="MovieDetails">
            {movie !== undefined ?
                <MovieFull movie={movie}/>
            : 
                <progress/>
            }
            <Link to="/">
                return
            </Link>
        </div>
    );
}

export default MoviePage;