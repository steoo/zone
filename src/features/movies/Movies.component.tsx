import React, { FunctionComponent } from 'react';
import { Movie } from './Movies.slice';
import { MoviesContainer, MovieContainer, Background } from './Movies.styled';
import { IMAGE_BASE_URL } from '../../app/constants';
import Genre from '../genres/Genre.component';

/*
 * A simple component showing a set of movies.
 * It takes the movies property from the parent component.
 * */
const Movies: FunctionComponent<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, popularity, poster_path, genre_ids }) => {
        return (
          <MovieContainer key={id}>
            {genre_ids.map((id) => (
              <Genre key={id} genreId={id} />
            ))}
            <Background src={`${IMAGE_BASE_URL}/${poster_path}`} />
            <h1>{title}</h1>
            <p>{popularity}</p>
          </MovieContainer>
        );
      })}
    </MoviesContainer>
  );
};

export default Movies;
