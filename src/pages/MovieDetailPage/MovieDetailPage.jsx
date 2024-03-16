import { useParams } from 'react-router-dom';
import { movies } from "../../data";


function MovieDetailPage() {
   const {moviename} = useParams();

   const movie = movies.find((movie) => movie.title === moviename);
   return(
    <div>
        <h2>Movie Details:</h2>
        <h3>{movie.title}</h3>
        <h3>Release Date: {movie.releaseDate}</h3>
        <h3>Cast: {movie.cast.join()}</h3>
        <img src={movie.posterPath} />
    </div>
   );
}

export default MovieDetailPage;