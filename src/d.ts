export type TPoster = {
  url: string;
  previewUrl: string;
};
export type TGenres = {
  name: string[];
};

export type TRating = {
  p: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type TMovie = {
  id: number;
  name: string;
  alternativeName: string;
  poster: TPoster;
  description: string;
  rating: TRating;
  year: number;
  genres: TGenres;
};
