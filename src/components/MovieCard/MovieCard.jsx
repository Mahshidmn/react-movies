import { useNavigate } from 'react-router-dom';
import './MovieCard.css';



function MovieCard({movie}) {

    const navigate = useNavigate();

    function _handleClick() {
        navigate(`/movies/${movie.title}`); 
    }

    return (  
        <div className="movie-card" style={{backgroundImage: `url(${movie.posterPath})`}} onClick={_handleClick}>
            <h2>{movie.title}</h2>
            <h3>{movie.releaseDate}</h3>
        </div>
    );
}

export default MovieCard;