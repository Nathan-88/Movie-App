import PropTypes from 'prop-types';
const MovieCard = ({ movie }) => {
   const { imdbID, Year, Poster, Title, Type } = movie;
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imdbID: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Type: PropTypes.string
    })
    }