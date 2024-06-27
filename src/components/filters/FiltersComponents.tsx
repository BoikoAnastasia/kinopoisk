// react
import { useState } from "react";
// pages
import { SelectedComponent } from "../selected/SelectedComponent";
// types
import { TArrayGenre } from "../../d";
//styles
import { TextField } from "@mui/material";

export const FiltersComponents = ({
  setRating,
  setError,
  rating,
  selectedValues,
  setYear,
  setSelectedValues,
  fetchMovies,
}: {
  setRating: (rating: { start: string; end: string }) => void;
  setError: (error: boolean) => void;
  rating: { start: string; end: string };
  setYear: (year: string) => void;
  selectedValues: TArrayGenre[];
  setSelectedValues: (selectedValues: TArrayGenre[]) => void;
  fetchMovies: () => void;
}) => {
  const [yearError, setYearError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const changeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const year = e.target.value;

    if (
      year === "" ||
      (Number(year) >= 1990 && Number(year) <= new Date().getFullYear())
    ) {
      setYearError("");
      setYear(e.target.value);
      setError(false);
    } else {
      setYearError("Год должен быть больше 1990 и меньше текущего");
      setError(true);
    }
  };

  const changeRaitingStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value === "" ||
      (e.target.value >= "0" && e.target.value <= "10")
    ) {
      setError(false);
      setRatingError("");
      setRating({
        ...rating,
        start: e.target.value,
      });
    } else {
      setRatingError("Установите рейтинг в пределах 0 - 10");
      setError(true);
    }
  };

  const changeRaitingEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value === "" ||
      (e.target.value >= "0" && e.target.value <= "10")
    ) {
      setRatingError("");
      setError(false);
      setRating({
        ...rating,
        end: e.target.value,
      });
    } else {
      setError(true);
      setRatingError("Установите рейтинг в пределах 0 - 10");
    }
  };

  return (
    <>
      <div className="mainPage__filter">
        <h1>Поиск лучших фильмов</h1>
        <div className="mainPage__filter-grid">
          <span>По жанру</span>
          <span>По году выпуска</span>
          <span>По рейтингу</span>
          <button className="btn_submit" onClick={fetchMovies}>
            Отправить
          </button>
          <SelectedComponent
            selectedValues={selectedValues}
            setSelectedValues={setSelectedValues}
          />

          <TextField
            id="standard-error"
            helperText={yearError}
            error={yearError !== ""}
            sx={{
              "& .MuiOutlinedInput-input": {
                background: "white",
              },
            }}
            type="number"
            onChange={changeYear}
          />

          <div className="mainPage__filter-grid-raiting">
            <label>
              От
              <TextField
                id="standard-error"
                error={ratingError !== ""}
                helperText={ratingError}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    background: "white",
                  },
                }}
                type="number"
                onChange={changeRaitingStart}
              />
            </label>
            <label>
              До
              <TextField
                id="standard-error"
                error={ratingError !== ""}
                helperText={ratingError}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    background: "white",
                  },
                }}
                type="number"
                onChange={changeRaitingEnd}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
