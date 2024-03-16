import { movies } from "../../data";
import ActorCard from "../../components/ActorCard/ActorCard";
import "./ActorsListPage.css"


function ActorsListPage() {

    // const castArray = movies.flatMap((movie) => movie.cast)
     const castArray = [];

    movies.forEach((movie) => castArray.push(movie.cast));
    // console.log(castArray);
    const flatCastArray = castArray.flatMap((c) => c);
    // console.log(flatCastArray);
    const castArraySet = new Set(flatCastArray);
    // console.log(castArraySet);
    const actors = Array.from(castArraySet).sort();
    //  console.log(actors);

    // Another approach
     // Aggregate all cast members from all movies
    //  const castArray = movies.flatMap(movie => movie.cast);
     // Create a unique set of actor names to remove duplicates
    //  const uniqueActors = [...new Set(castArray)];
  

   const ActorCards = actors.map((a, index) => <ActorCard key={index} actor={a} />);

    console.log(ActorCards);
   return <ul className="actors-list">{ActorCards}</ul>;
}

export default ActorsListPage;

