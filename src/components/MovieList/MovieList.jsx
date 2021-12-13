import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
// import MovieItem from '../MovieItem/MovieItem';
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIES' 
        });
        dispatch ({
            type: 'FETCH_GENRES'
        })

    }, []);

    //Function to dispatch Fetch Details and history onClick     
    const handleClick = (movie) => {
        dispatch ({
            type: 'FETCH_DETAILS', payload: movie
        })
        dispatch ({
            type: 'FETCH_GENRES_DETAILS', payload: movie
        })
    // useHistory to go to Details Page
    history.push(`/movie-details/${movie.id}`);
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}> 
                            <div key={movie.id} className="poster-title">
                                <h3 onClick={() => handleClick(movie)}>{movie.title}</h3>
                                <img className="moviePosters" onClick={() => handleClick(movie)} src={movie.poster} alt={movie} />

                            </div>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;