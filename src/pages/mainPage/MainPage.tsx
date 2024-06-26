import { useEffect, useState } from "react";
import { TMovie, TPoster } from "../../d";
import { getMovieRequest } from "../../hooks/API";
import "./MainPageStyle.css";
import { PaginationComponent } from "../../components/pagination/PaginationComponent";
import { FiltersComponents } from "../../components/filters/FiltersComponents";

export const MainPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  //TODO убрать
  useEffect(() => {
    setMovies(
      Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `Фильм ${index + 1}`,
        alternativeName: `Alternative Name ${index + 1}`,
        poster: {
          url: "",
          previewUrl: ``,
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

    console.log(movies);
  }, []);

  //запрос на вытягивание фильмов
  useEffect(() => {
    const fetchMovies = async () => {
      //TODO вернуть
      // const responce = await getMovieRequest(pageNumber);
      // const data = await responce;
      // setMovies(data.docs);
    };
    fetchMovies();
  }, [pageNumber, movies]);

  //добавление изображения по url/previewUrl
  const urlPoster = (posterArr: TPoster) => {
    //TODO убрать
    if (posterArr?.url === "" && posterArr?.previewUrl === "") {
      // if (posterArr?.url === undefined && posterArr?.previewUrl === undefined) {
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
    <FiltersComponents/>
      <div className="movies">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="movie">
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
