// react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// type
import { TMovie, TPoster } from "../../d";
//styles
import "../mainPage/MainPageStyle.css";

export const FavoriteMovie = ({setIdMovie}:{setIdMovie: (id: number) => void}) => {
  const [favorite, setFavorite] = useState<TMovie[]>([]);
  const navigate = useNavigate();

  useEffect(()=>{
    setFavorite(JSON.parse(localStorage.getItem("favoriteMovies") || '{}'));
  },[])


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

  //navigation on movie
  const navigateToPageMovie = (id: number) => {
    setIdMovie(id);
    navigate(`/movie/:${id}`);
  };
  
  return (
    <>
      <div>
        {favorite.length === 0 ? (
          <h1>У вас нет добавленных любимых фильмов</h1>
        ) : (
          <div className="movies">
            {favorite.map((movie) => (
             <div  key={movie.id} onClick={() => navigateToPageMovie(movie.id)} className="movie">
               {urlPoster(movie.poster)}
               <span>{movie.name}</span>
               <span>{movie.year}</span>
               <span>{movie.rating.p}</span>
             </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
