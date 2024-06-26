import { useEffect, useState } from "react";

export const SelectedComponent = () => {
  //TODO выборку
  const valuesGenres = [
    "аниме",
    "биография ",
    "боевик",
    "западный",
    "военный",
    "детектив",
    "детский",
    "для взрослых",
    "документальный",
    "драма",
    "игра",
    "история",
    "комедия",
    "концерт",
    "короткометражка",
    "преступление",
    "мелодрама",
    "музыка",
    "мультфильм",
    "музыкальный",
    "Новости",
    "приключения",
    "реальное ТВ",
    "семейный",
    "виды спорта",
    "ток-шоу",
    "триллер",
    "ужасы",
    "фантазия",
    "фильм-нуар",
    "фэнтези",
    "церемония",
  ];
  const [selectedValues, setSelectedValues] = useState<any[]>([]);

  const handleChange = (e: any) => {
    const values = [...e.target.selectedOptions].map((opt) => opt.value);
    setSelectedValues([...selectedValues, values]);
  };

  return (
    <>
      <select multiple onChange={handleChange}>
        {valuesGenres.map((select, index) => (
          <option key={index} value={select}>
            {select}
          </option>
        ))}
      </select>
      <div className="checkGenre">
      {selectedValues &&
        selectedValues.map((genre) => (
            <label>
              <input type="checkbox" />
              {genre}
            </label>
        ))}
        </div>
    </>
  );
};
