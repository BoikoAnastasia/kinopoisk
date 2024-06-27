const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": `11ZABTG-XVW4FX3-HQD3ARG-S5KJC2N`,
  },
};
//TODO env
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
      `https://api.kinopoisk.dev/v1.4/movie?page=${pageNumber}&limit=50${year}${rating.start}${rating.end}${genres}`,
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
      `https://api.kinopoisk.dev/v1.4/movie/${id}`,
      options
    ).then((response) => response.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
