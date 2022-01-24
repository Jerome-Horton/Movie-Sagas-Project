import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
// import MovieItem from '../MovieItem/MovieItem';
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movies = useSelector(store => store.movies);
    // const genres = useSelector(store => store.genres);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    //     window.scrollTo(0, 0);
    // }, []);

// This routes to Movie Page form to add a new movie
    const addNewMovie = () => {
        history.push('/MoviePage')
    }

// this will route to detail page for a specific movie based on the id
//and dispatch action to saga to fetch movie details from reducer   
    const movieDetails = (id) => {
        dispatch ({
            type: 'FETCH_MOVIE_DETAILS', 
            payload: id
        })
// useHistory to go to Details Page
    history.push(`/details`);
    }

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIES' 
        });
        dispatch({ 
            type: 'FETCH_GENRES' 
        });

    }, []);

    return (
        <main>
            <div>
            <h1>Movie List</h1>
            <p className='instruction'>To view details of a movie, please click on the movie poster</p>
            </div>
            <button onClick={addNewMovie}>Add a Movie!</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}> 
                                <h3>{movie.title}</h3>
                                <img 
                                style={{height:275}}
                                    src={movie.poster} 
                                    alt={movie.title}
                                    onClick={(event) => movieDetails(movie.id)}  />
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;