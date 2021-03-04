import React, { FunctionComponent } from 'react';
import { Movie } from './Movies.slice';
import { MoviesContainer, MovieContainer } from './Movies.styled';

/*
 * A simple component showing a set of movies.
 * It takes the movies property from the parent component.
 * */
const Movies: FunctionComponent<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title }) => (
        <MovieContainer key={id}>
          <h1>{title}</h1>
        </MovieContainer>
      ))}
    </MoviesContainer>
  );
};

export default Movies;
