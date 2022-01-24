import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,useParams } from 'react-router-dom';

function movieDetails() {

    //functionality to route to a page
    const history = useHistory();
    const params = useParams();
    console.log('params',)
    //functionality to dispatch information to a saga or reducer
    const dispatch = useDispatch();

    //creates a redux store instance for movieDetails reducer
    const movieDetails = useSelector(store => store.movieDetails);

    //routes to home page and clears movie details reducer
    const HomePage = () => {
        dispatch({ type: 'CLEAR_MOVIE_DETAILS', payload: [] }); 
        history.push('/');
    }

    return (
        <>
        <div>
           
                
                    <div key={movieDetails.id} >
                    <h3>{movieDetails.title}</h3>
                    <img 
                        style={{height:275}}
                        src={movieDetails.poster}
                        alt={movieDetails.title}
                    />
                    {movieDetails?.genres?.map(genre => {
                        return (<h4>{genre}</h4>)
                    })}
                    {movieDetails.description}
                </div>
            
            <br />
            <button id="back-button" onClick={HomePage}>Back to List</button>
            </div> 
        </>
    )
}

export default movieDetails;