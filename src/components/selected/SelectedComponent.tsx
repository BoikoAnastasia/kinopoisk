import { TArrayGenre } from "../../d";
import "../ComponentsStyles.css";

export const SelectedComponent = ({
  selectedValues,
  setSelectedValues,
}: {
  selectedValues: TArrayGenre[];
  setSelectedValues: (selectedValues : TArrayGenre[]) => void;
}) => {
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

  const handleChange = (e: any) => {
    const addValue = {
      id: e.target.options[e.target.selectedIndex].index,
      name: e.target.selectedOptions[0].text,
    };
    if (!selectedValues.some((x) => x.name === addValue.name)) {
      setSelectedValues([
        ...selectedValues,
        {
          id: e.target.options[e.target.selectedIndex].index,
          name: e.target.selectedOptions[0].text,
        },
      ]);
    }
  };

  const removeValueFromSelectedValues = (e: any) => {
    console.log(selectedValues);
    setSelectedValues(
      selectedValues.filter((x) => x.id !== Number(e.target.value))
    );
  };

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
              <input
                type="checkbox"
                value={genre.id}
                checked
                onChange={removeValueFromSelectedValues}
              />
              {genre.name}
            </label>
          ))}
      </div>
    </div>
  );
};
