import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details (){

    let 
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ 
                    type: 'SET_DETAILS', 
                    payload: details 
                });
    }, []);
const handleButton() {


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
                        <button>Back To List</button>
                    </div>
                );
            })}
        </section>
    </main>


    )
}

export default Details;