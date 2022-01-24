import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import {useEffect} from 'react';


function MoviePage () {
    console.log('in Movie Page 🎥');

// useEffect = (() => {
//         dispatch({
//             type: 'FETCH_GENRES'
//         })
// }, [])

// useHistory
    let history = useHistory();
// useDispatch
    const dispatch = useDispatch();
// use Selector
    const genres = useSelector(store => store.genres);

    // useState for inputs field 
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');
    let [genre_id, setGenre_id] = useState(0);

// useEffect = (() => {
//         dispatch({
//             type: 'FETCH_GENRES'
//         })
// }, [])

// function to Submit Movie Inputs form
function submitInputs () {
    console.log('in SubmitInputs')
// prevent default for form
    // event.preventDefault()

        dispatch ({
            type: 'ADD_MOVIES',
            payload: { 
                title: title, 
                poster: poster, 
                description: description, 
                genre_id: genre_id
            }
        })
// This will route to home page, which Movie List
        history.push('/')

}

// function cancel button to allow the user to return to Home Page, which is Movie List
function cancelButton () {
// useHistory
        history.push('/')
}


    return (

        <div>
                    <h1>Enter New Movie</h1>

                <div>
                    <input  required
                            type='text'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder='Title' />

                    <input  required
                            type='text'
                            value={poster}
                            onChange={(event) => setPoster(event.target.value)}
                            placeholder='Add Poster Image url' />
                    
                    <input  required
                            type='text'
                            maxLength={500}
                            name="description" 
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder= 'Description' />

                    <select 
                        placeholder="Choose a Genre"
                        type="text"
                        value={genre_id}
                        onChange={(event) => setGenre_id(event.target.value)} 
                        className="select-genre">
                        {genres.map((genre) => {
                            return(<option key={genre.id} value={genre.id}>{genre.name}</option>);
                        })}
                    </select>
                    <button onClick={submitInputs}>Submit</button>
                    <button onClick={cancelButton}>Cancel Button</button>
                </div>
        </div>
    );
}

export default MoviePage;