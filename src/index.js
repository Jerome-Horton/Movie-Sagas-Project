import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_MOVIE_DETAILS', fetchDetails);
    // yield takeEvery('ADD_MOVIES', addMovies);
    yield takeEvery('FETCH_GENRES', fetchGenre);
    yield takeEvery('FETCH_GENRES_DETAILS', fetchGenreDetails);
    

}

// fetchAllMovies GET route
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('fetchAllMovies GET /route:', movies.data);
        yield put({ 
            type: 'SET_MOVIES', 
            payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// fetchDetails GET route
function* fetchDetails (action) {
        // get all movies detail from the DB
        try {
            const selectMovie = action.payload
            const details = yield axios.get(`/api/movie/movie-details/${selectMovie.id}`);
            console.log('get all movie details:', details.data);
            yield put({ type: 'SET_MOVIE_DETAILS', payload: details.data });
    
        } catch (error) {
            console.log('get all error');
        }
            
    }

    function* fetchGenreDetails (action) {
        // get all movies detail from the DB
        try {
            const selectMovie = action.payload
            const details = yield axios.get(`/api/selected-movie-genre/${selectMovie.id}`);
            console.log('get all movie details:', details.data);
            yield put({ type: 'SET_MOVIE_GENRE', payload: details.data });
    
        } catch (error) {
            console.log('get all error');
        }
            
    }

// POST route to grab new movie data to POST it to the DB
// function* addMovies (action) {
//     console.log('addMovie is Working', action.payload);
//     // get all movies detail from the DB
//     try {
//         const response = yield axios.post('/api/movie', action.payload);
//         yield put({ 
//             type: 'FETCH_MOVIES',
//             payload: details.data 
//         });

//     } catch {
//         console.log('addMovie POST error');
//         alert('New Movie Did NOT POST')
//     }
        
// }   

function* fetchGenre() {
    // get all movies from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('fetchGenre GET /route:', genres.data);
        yield put({ 
            type: 'SET_GENRES', 
            payload: genres.data });

    } catch {
        console.log('get all error');
    }
        
}


// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details
const selectDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details
const genreDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectDetails,
        genreDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
