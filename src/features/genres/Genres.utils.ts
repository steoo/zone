import { Genre } from './Genres.slice';

export const getGenreById = (genres: Genre[], genreId: number) => genres.find(({ id }) => id === genreId);
