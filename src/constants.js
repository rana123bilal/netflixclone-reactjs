const SORT_TYPES = {
  title: "title",
  genres: "genres",
  drama: "drama",
  release_date: "release_date",
  vote_average: "vote_average",
  none: "none",
};

export default SORT_TYPES;

export const genreList = [
  "action",
  "drama",
  "romance",
  "adventure",
  "fantasy",
  "animation",
  "family",
  "comedy",
  "science fiction",
  "mystery",
  "thriller",
];

export const genreListforNav = [
  "all",
  "action",
  "drama",
  "romance",
  "adventure",
  "fantasy",
];

export const options = genreList.map((value) => ({ value, label: value }));
