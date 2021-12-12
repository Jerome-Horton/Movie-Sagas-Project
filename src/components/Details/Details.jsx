import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// Details array is showing empty....figured out why?

function Details (){
    console.log('in Detail page 🎥')

    // use History
    let history = useHistory;

    //Dispatch
    const dispatch = useDispatch();

    //useSelector Details Reducer
    const details = useSelector(store => store.details);


    // To fetch movie details in component
    useEffect(() => {
        dispatch({ 
                    type: 'SET_DETAILS', 
                    payload: details 
                });
    }, []);

    // For back To List Button
const handleClick = () => {
// use history to go back to Home/Movie List page.
    history.push ('/');
}

    return (

        <main>
        <h1>Movie Details</h1>
        <section className="details">
            {details.map(details => {
                return (
                    <div key={details.id} >
                        <h3>{details.title}</h3>
                        <img src={details.poster}/>
                        <h3>{details.genres}</h3>
                        <h3>{details.description}</h3>
                        <button onClick={handleClick}>Back To List</button>
                    </div>
                );
            })}
        </section>
    </main>


    )
}

export default Details;