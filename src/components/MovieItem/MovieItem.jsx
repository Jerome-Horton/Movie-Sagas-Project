// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// function MovieItem({movie}) {

//     // useHistory
//     let history = useHistory;
// // useDispatch
//     const dispatch = useDispatch();

// //Function to dispatch Fetch Details and history onClick     
//     const nextPage = () => {
//         dispatch ({
//             type: 'SET_DETAILS',
//             payload: movie.id
//         })
//     // useHistory to go to Details Page
//     history.push(`/details/${movie.id}`);
//     }

//     return (

//         <div key={movie.id}>
//             <h3>{movie.id}</h3>
//             <img onClick={nextPage} src={movie.poster} alt={movie.title} />

//         </div>

//     )
    
// }

// export default MovieItem;