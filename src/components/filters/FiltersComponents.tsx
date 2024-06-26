import { useEffect, useState } from "react";
import { SelectedComponent } from "../selected/SelectedComponent";

export const FiltersComponents = () => {
  const [genres, setGenres] = useState();
  const [rating, setRating] = useState();
  const [year, setYear] = useState<number | null>();
  
  const changeYear = (e: any) => {
    return e.target.value > 1990 ? setYear(e.target.value) : setYear(null);
  }
  


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
          <input type="number" min={1990} onChange={changeYear}/>
          <div className="mainPage__filter-grid-raiting">
            <label>
                От
                <input type="number" min={0}/>
            </label>
            <br />
            <label>
                До
                <input type="number" max={10}/>
            </label>
          </div>
          <button className="btn_submit">Отправить</button>
        </div>
      </div>
    </>
  );
};
