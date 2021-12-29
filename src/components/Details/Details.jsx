import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    //functionality to route to a page
    const history = useHistory();

    //functionality to dispatch information to a saga or reducer
    const dispatch = useDispatch();

    //creates a redux store instance for movieDetails reducer
    const movieDetails = useSelector(store => store.Details);

    //routes to home page and clears movie details reducer
    const HomePage = () => {
        dispatch({ type: 'CLEAR_MOVIE_DETAILS', payload: [] });
        history.push('/');
    }

    return (
        <>
            {movieDetails.map(movieDetails => {
                return (<div key={movieDetails.id} >
                    <h3>{movieDetails.title}</h3>
                    <img src={movieDetails.poster}
                        alt={movieDetails.title}
                    />
                    {movieDetails.genres.map(genre => {
                        return (<h4>{genre}</h4>)
                    })}
                    {movieDetails.description}
                </div>)
            })}
            <br />
            <button id="back-button" onClick={HomePage}>Back to List</button>
        </>
    )
}

export default Details;