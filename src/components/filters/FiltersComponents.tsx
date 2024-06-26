import { useEffect, useState } from "react";
import { SelectedComponent } from "../selected/SelectedComponent";

export const FiltersComponents = () => {
  const [genres, setGenres] = useState();
  const [rating, setRating] = useState();
  const [year, setYear] = useState();



  useEffect(() => {

  }, [genres, rating, year]);

  return (
    <>
    {/* TODO доделать grid красивым */}
      <div className="mainPage__filter">
        <h1>Поиск лучших фильмов</h1>
        <div className="mainPage__filter-grid">
          <span>По жанру</span>
          <span>По году выпуска</span>
          <span>По рейтингу</span>
          <SelectedComponent />
          <input type="number" min={1990} />
          <div className="mainPage__filter-grid-raiting">
            <label>
                От
                <input type="number" />
            </label>
            <br />
            <label>
                До
                <input type="number" />
            </label>
          </div>
          <button className="btn_submit">Отправить</button>
        </div>
      </div>
    </>
  );
};
