import { Link, Route } from "react-router";
const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.original_title}</h2>
        <p className=" text-pretty line-clamp-4"> {movie.overview}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link path="movie/:id">Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
