import { Movie } from './Movies.slice';

export const orderByPopularity = (movies: Movie[], order: 'asc' | 'desc' = 'desc') => {
  const sorted = [...movies].sort((firstItem, secondItem) => firstItem.popularity - secondItem.popularity);
  
  return order === 'desc' ? sorted.reverse() : sorted;
};
