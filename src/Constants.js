const SORT_TYPES = {
  title: "title",
  genres: "genres",
  drama: "drama",
  release_date: "release_date",
  vote_average: "vote_average",
  none: "none",
};

export default SORT_TYPES;

const genreList = [
  "Action",
  "Drama",
  "Romance",
  "Adventure",
  "Fantasy",
  "Animation",
  "Family",
  "Comedy",
  "Science Fiction",
  "Mystery",
  "Thriller",
];

export const options = genreList.map((value) => ({ value, label: value }));
