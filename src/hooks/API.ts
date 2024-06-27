const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
  },
};

export const getMovieRequest = async (
  pageNumber: number = 1,
  year: string = "",
  rating: { start: string; end: string } = { start: "", end: "" },
  genres: string = ""
) => {
  if (year !== "") {
    year = `releaseYears.start=${year}&`;
  }
  if (rating.start !== "") {
    rating.start = `rating.kp=${rating.start}&`;
  }
  if (rating.end !== "") {
    rating.end = `rating.kp=${rating.end}&`;
  }
  try {
    const response = await fetch(
      `${process.env.REACT_APP_OPEN_API}?page=${pageNumber}&limit=50${year}${rating.start}${rating.end}${genres}`,
      options
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.log("Ошибка");
  }
};

export const getMovieFromId = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_OPEN_API}/${id}`,
      options
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
