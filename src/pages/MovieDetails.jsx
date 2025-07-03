import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import BreadCrumbs from "../components/BreadCrumbs";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  console.log(movie);
  useEffect(() => {
    const controller = new AbortController();
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDViZGVkOTBiMGUzYTc3NjQxNzdiZjI4ZDVkZWY3ZCIsIm5iZiI6MTc1MDE2NjY2Mi41MDg5OTk4LCJzdWIiOiI2ODUxNmM4Njc1YmUzODk2MjEwNjVkZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DWVStGexBgO90tumCY3h3UFtoNP7lYZ4AIxrYQoIX5g",
      },
    }; //API Cridential
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options,
          {
            signal: controller.signal, //We connect the fetch req to the controller above
          }
        );

        if (!response.ok) {
          throw new Error("Something went wrong!!!");
        }
        const data = await response.json();
        const movieList = data.results;
        const theMovie = movieList.find((movie) => movie.id === Number(id));
        setMovie(theMovie);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);
  console.log(movie);

  return (
    <div>
      <BreadCrumbs />
      <div className="card lg:card-side bg-base-100 ">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="Poster"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="btn btn-primary"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
