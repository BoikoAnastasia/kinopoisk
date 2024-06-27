// react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// types
import { TArrayGenre, TMovie, TPoster } from "../../d";
// hooks
import { getMovieRequest } from "../../hooks/API";
import { CreateStringFromArray } from "../../hooks/CreateStringFromArray";
// pages
import { PaginationComponent } from "../../components/pagination/PaginationComponent";
import { FiltersComponents } from "../../components/filters/FiltersComponents";
// css
import "./MainPageStyle.css";

export const MainPage = ({
  setIdMovie,
}: {
  setIdMovie: (id: number) => void;
}) => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<TMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rating, setRating] = useState({
    start: "",
    end: "",
  });
  const [year, setYear] = useState<string>();
  const [selectedValues, setSelectedValues] = useState<TArrayGenre[]>([]);
  const [genres, setGenres] = useState("");

  //fecth request
  const fetchMovies = async () => {
    if (selectedValues.length > 0) {
      setGenres(CreateStringFromArray(selectedValues));
    }
    const responce = await getMovieRequest(pageNumber, year, rating, genres);
    const data = await responce;
    setMovies(data.docs);
  };

  //navigation on movie
  const navigateToPageMovie = (id: number) => {
    setIdMovie(id);
    navigate(`/movie/:${id}`);
  };

  //get movies
  useEffect(() => {
    fetchMovies();
  }, [pageNumber, movies, fetchMovies]);

  //check url/previewUrl in movie
  const urlPoster = (posterArr: TPoster) => {
    if (posterArr?.url === undefined && posterArr?.previewUrl === undefined) {
      return <div className="default-poster"></div>;
    } else {
      return posterArr?.url !== undefined ? (
        <img src={posterArr?.url} alt="постер"></img>
      ) : (
        <img src={posterArr?.previewUrl} alt="постер"></img>
      );
    }
  };

  return (
    <>
      <FiltersComponents
        setRating={setRating}
        rating={rating}
        setYear={setYear}
        setSelectedValues={setSelectedValues}
        selectedValues={selectedValues}
        fetchMovies={fetchMovies}
      />
      <div className="movies">
        {movies &&
          movies.map((movie) => (
            <div
              key={movie.id}
              className="movie"
              onClick={() => navigateToPageMovie(movie.id)}
            >
              {urlPoster(movie.poster)}
              <span>{movie.name}</span>
              <span>{movie.year}</span>
              <span>{movie.rating.p}</span>
            </div>
          ))}
      </div>
      <PaginationComponent setPageNumber={setPageNumber} />
    </>
  );
};
