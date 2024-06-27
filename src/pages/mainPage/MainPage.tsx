import { useEffect, useState } from "react";
import { TArrayGenre, TMovie, TPoster } from "../../d";
import { getMovieRequest } from "../../hooks/API";
import "./MainPageStyle.css";
import { PaginationComponent } from "../../components/pagination/PaginationComponent";
import { FiltersComponents } from "../../components/filters/FiltersComponents";
import { CreateStringFromArray } from "../../hooks/CreateStringFromArray";

export const MainPage = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rating, setRating] = useState({
    start: "",
    end: "",
  });
  const [year, setYear] = useState<string>();
  const [selectedValues, setSelectedValues] = useState<TArrayGenre[]>([]);
  const [genres, setGenres] = useState("")

  //TODO убрать
  // useEffect(() => {
  //   setMovies(
  //     Array.from({ length: 50 }, (_, index) => ({
  //       id: index + 1,
  //       name: `Фильм ${index + 1}`,
  //       alternativeName: `Alternative Name ${index + 1}`,
  //       poster: {
  //         url: "",
  //         previewUrl: ``,
  //       },
  //       description: `Описание фильма ${
  //         index + 1
  //       }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  //       rating: {
  //         p: Math.floor(Math.random() * 100) / 10,
  //         imdb: Math.floor(Math.random() * 100) / 10,
  //         filmCritics: Math.floor(Math.random() * 100) / 10,
  //         russianFilmCritics: Math.floor(Math.random() * 100) / 10,
  //         await: Math.floor(Math.random() * 100) / 10,
  //       },
  //       year: 1980 + Math.floor(Math.random() * 40), // Годы с 1980 по 2020
  //       genres: {
  //         name: [`Жанр ${(index % 5) + 1}`, `Жанр ${((index + 2) % 5) + 1}`],
  //       },
  //     }))
  //   );

  //   console.log(movies);
  // }, []);


  const fetchMovies = async () => {
    if(selectedValues.length > 0){
      setGenres(CreateStringFromArray(selectedValues));
    }
    const responce = await getMovieRequest(pageNumber, year, rating, genres);
    const data = await responce;
    setMovies(data.docs);
  };

  //запрос на вытягивание фильмов
  useEffect(() => {
    fetchMovies();
  }, [pageNumber, movies]);

  //добавление изображения по url/previewUrl
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
