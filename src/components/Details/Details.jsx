import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';


// Details array is showing empty....figured out why?

function Details (){
    console.log('in Detail page 🎥')

    // use History
    let history = useHistory();

    //Dispatch
    const dispatch = useDispatch();

    //useSelector Details Reducer
    const details = useSelector(store => store.selectDetails);
    const genres = useSelector(store => store.genreDetails);

    //useParams
    const {id} = useParams();


    // To fetch movie details in component
    useEffect(() => {
        dispatch({ 
                    type: 'FETCH_MOVIE_DETAILS', 
                    payload: { id: id }
                });
    });

    // For back To List Button
const handleClick = () => {
// use history to go back to Home/Movie List page.
    history.push ('/');
}

    return (
                    <div>
                            <h1>Details for {details.title}</h1>
                            <img width="300px" src={details.poster}/>
                            <p>{details.description}</p>
                            <h2>Genres</h2>
                            <ul>
                                {genres.map((genre) => 
                                   <li key={genre.name}>{genre.name}</li>

                                  
                                   
                                   )}
                            </ul>
                                     <button onClick={() => handleClick()}>Back To List</button>
                    </div>
            )
    }

export default Details;