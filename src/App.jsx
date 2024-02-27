import { useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard'
import { searchMovies } from './util'
//c11e9d41

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = async () => {
    const data = await searchMovies(searchTerm); // Using searchMovies from util.js
    setMovies(data);
  };

  useEffect(() => {
    searchMovies('batman').then(data => setMovies(data));
  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={handleSearch}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App
