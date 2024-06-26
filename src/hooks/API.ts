const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": `11ZABTG-XVW4FX3-HQD3ARG-S5KJC2N`,
  },
};
//TODO env
export const getMovieRequest = async (pageNumber:number) => {
  try {
    // fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=&year=&releaseYears.start=&rating.kp=&genres.name=%D0%B2%D1%84%D1%8B%D0%B2%D1%84%D1%8B%D0%B2', options)
    const response = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?page=${pageNumber}&limit=50`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
      return response;
  } catch (error) {
    console.log("Ошибка");
  }
};
