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
//images
import defaultPoter from '../../images/poster.png'
// css
import "./MainPageStyle.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const [error, setError] = useState(false);

  //Заглушка, так как данные с кинопоиска ограниченные по запросам
  //можно раскомментировать и тогда на странице будут фильмы-заглушки 
  useEffect(() => {
    setMovies(
      Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `Фильм ${index + 1}`,
        alternativeName: `Alternative Name ${index + 1}`,
        poster: {
          url: undefined,
          previewUrl: undefined,
        },
        description: `Описание фильма ${
          index + 1
        }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        rating: {
          p: Math.floor(Math.random() * 100) / 10,
          imdb: Math.floor(Math.random() * 100) / 10,
          filmCritics: Math.floor(Math.random() * 100) / 10,
          russianFilmCritics: Math.floor(Math.random() * 100) / 10,
          await: Math.floor(Math.random() * 100) / 10,
        },
        year: 1980 + Math.floor(Math.random() * 40), // Годы с 1980 по 2020
        genres: {
          name: [`Жанр ${(index % 5) + 1}`, `Жанр ${((index + 2) % 5) + 1}`],
        },
      }))
    );
  }, []);

  //fecth request
  const fetchMovies = async () => {
    if (error) {
      return;
    }
    if (selectedValues.length > 0) {
      setGenres(CreateStringFromArray(selectedValues));
    }
    const responce = await getMovieRequest(pageNumber, year, rating, genres);
    const data = await responce;
    // setMovies(data.docs);
  };

  //navigation on movie
  const navigateToPageMovie = (id: number) => {
    setIdMovie(id);
    navigate(`/movie/:${id}`);
  };

  //get movies
  useEffect(() => {
    fetchMovies();
  }, [pageNumber, movies]);


  //add favorite in array movies
  const addFavoriteFilm = (id: number) => {
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return movie.isFavorite ? {...movie, isFavorite: false} : { ...movie, isFavorite: true };
      }
      return movie;
    });
    setMovies(updatedMovies);

    // save favorite movies in localStorage
    const favoriteMovies = updatedMovies.filter(movie => movie.isFavorite);
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  };

  //check url/previewUrl in movie
  const urlPoster = (posterArr: TPoster) => {
    if (posterArr?.url === undefined && posterArr?.previewUrl === undefined) {
      return <img className="default-poster" src={defaultPoter}/>;
    } else {
      return posterArr?.url !== undefined ? (
        <img src={posterArr?.url} alt="постер"/>
      ) : (
        <img src={posterArr?.previewUrl} alt="постер"/>
      );
    }
  };

  return (
    <>
      <FiltersComponents
        setError={setError}
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
            <div key={movie.id}>
              <div onClick={() => navigateToPageMovie(movie.id)} className="movie">
                {urlPoster(movie.poster)}
                <span>{movie.name}</span>
                <span>{movie.year}</span>
                <span>{movie.rating.p}</span>
              </div>
              <FavoriteIcon className={movie.isFavorite ? 'favoriteIcon pink' : 'favoriteIcon'} onClick={() => addFavoriteFilm(movie.id)} />
            </div>
          ))}
      </div>
      <PaginationComponent setPageNumber={setPageNumber} />
    </>
  );
};
