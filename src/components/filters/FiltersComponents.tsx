import { SelectedComponent } from "../selected/SelectedComponent";
import { TArrayGenre } from "../../d";
import { CreateStringFromArray } from "../../hooks/CreateStringFromArray";

export const FiltersComponents = ({
  setRating,
  rating,
  selectedValues,
  setYear,
  setSelectedValues,
  fetchMovies,
}: {
  setRating: (rating: any) => void;
  rating: {start: string, end: string};
  setYear: (year: string) => void;
  selectedValues: TArrayGenre[];
  setSelectedValues: (selectedValues: TArrayGenre[]) => void;
  fetchMovies: () => void
}) => {
  const changeYear = (e: any) => {
    return e.target.value > 1990 ? setYear(e.target.value) : setYear("");
  };

  const changeRaitingStart = (e: any) => {
    if (e.target.value < "0" || e.target.value > "10") {
      //TODO
      return;
    } else {
      setRating({
        ...rating,
        start: e.target.value,
      });
    }
  };

  const changeRaitingEnd = (e: any) => {
    if (e.target.value < "0" || e.target.value > "10") {
      //TODO
      return;
    } else {
      setRating({
        ...rating,
        end: e.target.value,
      });
    }
  };

  // const postSearchData = () => {
  //   if(selectedValues === null) {
  //     getMovieRequest(rating, year);
  //   }else{
  //     getMovieRequest(rating, year, CreateStringFromArray(selectedValues));
  //   }
  // };

  return (
    <>
      <div className="mainPage__filter">
        <h1>Поиск лучших фильмов</h1>
        <div className="mainPage__filter-grid">
          <span>По жанру</span>
          <span>По году выпуска</span>
          <span>По рейтингу</span>
          <button className="btn_submit" onClick={fetchMovies}>Отправить</button>
          <SelectedComponent
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
          />
          <input type="number" min={1990} onChange={changeYear} />
          <div className="mainPage__filter-grid-raiting">
            <label>
              От
              <input
                type="number"
                min={0}
                max={10}
                onChange={changeRaitingStart}
              />
            </label>
            <label>
              До
              <input
                type="number"
                max={10}
                min={0}
                onChange={changeRaitingEnd}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
