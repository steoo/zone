import React, { FunctionComponent } from 'react';
import { Movie } from './Movies.slice';
import { MoviesContainer } from './Movies.styled';
import MovieComponent from './Movie/Movie.component';

/*
 * A simple component showing a set of movies.
 * It takes the movies property from the parent component.
 * */
const Movies: FunctionComponent<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieComponent key={movie.id} {...movie} />
      ))}
    </MoviesContainer>
  );
};

export default Movies;
