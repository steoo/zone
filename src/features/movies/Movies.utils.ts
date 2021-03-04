import { Movie } from './Movies.slice';

export const orderByPopularity = (movies: Movie[], order: 'asc' | 'desc' = 'desc') => {
  const sorted = movies.sort((firstItem, secondItem) => firstItem.popularity - secondItem.popularity);

  return order === 'desc' ? sorted.reverse() : sorted;
};

export const filterByGenres = (movies: Movie[], genreIds: number[]) => {
  return movies.filter((item) => genreIds.every((innerId) => item.genre_ids.includes(innerId)));
};

export const filterByVoteAverage = (movies: Movie[], voteAverage: number) => {
  return movies.filter(({ vote_average }) => vote_average > voteAverage);
};
