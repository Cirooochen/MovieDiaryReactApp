import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

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
        setMovies(data.results);
        // return data;
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <div className="w-full mx-auto md:w-2/3 text-center flex justify-center py-24">
        <h1 className="text-5xl mb-6">
          Introducing today's Most Popular Movies around the world.
        </h1>
      </div>

      <div className="p-4 w-full flex flex-wrap gap-4 justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
