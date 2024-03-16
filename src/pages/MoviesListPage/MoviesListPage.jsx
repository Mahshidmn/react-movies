import { movies } from "../../data";
import MovieCard from "../../components/MovieCard/MovieCard";


function MoviesListPage() {
   const MovieCards = movies.map((m, index) => <MovieCard key={index} movie={m} />);
   return <ul className="movies-list">{MovieCards}</ul>;
}

export default MoviesListPage;

