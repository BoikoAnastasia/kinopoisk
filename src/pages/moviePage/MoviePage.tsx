// react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// hooks
import { getMovieFromId } from "../../hooks/API";
// types
import { TMovie } from "../../d";
// css
import "./MoviePageStyle.css";

export const MoviePage = ({ id }: { id: number }) => {
  const [film, setFilms] = useState<TMovie>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await getMovieFromId(id);
      const data = await response;
      setFilms(data);
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="wrapper moviePage">
      <button onClick={() => navigate("/")} className="button_nav">
        Назад
      </button>
      {film && (
        <div key={film.id} className="filmInfo">
          <div className="filmInfo_poster">
            <h2>{film.name}</h2>
            {film.poster?.url !== undefined ? (
              <img src={film.poster.url} alt="poster" />
            ) : (
              <img src={film.poster?.previewUrl} alt="poster" />
            )}
            <button className="button_watch">Смотреть</button>
          </div>
          <div className="filmInfo_info">
            <p>
              Описание: {film.description} <br />
            </p>
            <p>
              Рейтинг: {film.rating.p} <br />
            </p>
            <p>
              Релиз: {film.year} <br />
            </p>
            Жанры:
            <p className="filmInfo_genres">
              {film.genres.name.map((genre: string) => (
                <span>{genre}</span>
              ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
