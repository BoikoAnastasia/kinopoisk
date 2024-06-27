import { useState } from "react";
import { TArrayGenre } from "../../d";

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
  const [selectedValues, setSelectedValues] = useState<TArrayGenre[]>([]);

  const handleChange = (e: any) => {
    setSelectedValues([...selectedValues, {
      id: e.target.options[e.target.selectedIndex].index, 
      name: e.target.selectedOptions[0].text}]
    )
  };
  //TODO убирает несколько вариантов + сделать что нельзя добавлять тот же
  const removeValueFromSelectedValues = (e:any) => {
    setSelectedValues(selectedValues.filter(x => x.id !== Number(e.target.value)))
  }



  return (
    <div>
      <select onChange={handleChange}>
        {valuesGenres.map((select, index) => (
          <option key={index} value={select}>
            {select}
          </option>
        ))}
      </select>
      <div className="checkGenre">
      {selectedValues &&
        selectedValues.map((genre) => (
            <label className="checkbox">
              <input type="checkbox" value={genre.id} checked onChange={removeValueFromSelectedValues}/>
              {genre.name}
            </label>
        ))}
        </div>
    </div>
  );
};
