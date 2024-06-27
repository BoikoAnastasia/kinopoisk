export type TPoster = {
  url: string | undefined;
  previewUrl: string | undefined;
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
  isFavorite?: boolean;
};

export type TArrayGenre = {
  id: number;
  name: string;
}
