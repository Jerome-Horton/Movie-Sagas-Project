import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



function MoviePage () {
    console.log('in Movie Page 🎥');

// useHistory
    let history = useHistory;
// useDispatch
    const dispatch = useDispatch();
// use Selector
    const movies = useSelector(store => store.movies);

    // useState for inputs field 
    const [addMovie, setAddMovie] = useState("")
    const [addUrl, setAddUrl] = useState("")
    const [addDescription, setAddDescription] = useState("")
    const [addGenre, setAddGenre] = useState("")


    return (

        <div>
                    <h1>Enter New Movie</h1>

                <form>
                    <input  required
                            type='text'
                            value={addMovie.title}
                            onChange={(event) => setAddMovie({ ...addMovie, title: event.target.value })}
                            placeholder='Title' />

                    <input  required
                            type='text'
                            value={addMovie.poster}
                            onChange={(event) => setAddUrl({ ...addUrl, poster: event.target.value })}
                            placeholder='Add Poster Image url' />
                    
                    <input  required
                            type='text'
                            maxLength={500}
                            name="description" 
                            value={addDescription.poster}
                            onChange={(event) => setAddDescription({ ...addDescription, description: event.target.value })}
                            placeholder= 'Description' />

                    <select 
                        required
                        name="genre_id"
                        onChange={(event) => setAddGenre({ ...addGenre, genre_id: event.target.value })}
                        value={addMovie.genre_id}>
                        <option defaultValue=""> select here</option>
                        <option value="1">Adventure</option>
                        <option value="2">Animated</option>
                        <option value="3">Biographical</option>
                        <option value="4">Comedy</option>
                        <option value="5">Disaster</option>
                        <option value="6">Drama</option>
                        <option value="7">Epic</option>
                        <option value="8">Fantasy</option>
                        <option value="9">Musical</option>
                        <option value="10">Romantic</option>
                        <option value="11">Science Fiction</option>
                        <option value="12">Space-Opera</option>
                        <option value="13">Superhero</option>
                    </select>
                    <button>Submit Movie</button>
                    <button>Cancel Button</button>
                </form>
        </div>
    );
}

export default MoviePage;