import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details.jsx';
// import MoviePage from '../MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/movie-details/:id">
          <Details />
        </Route>

        {/* Add Movie page */}
        {/* <Route exact path="/moviePage">
          <MoviePage />
        </Route> */}
      </Router>
    </div>
  );
}


export default App;
