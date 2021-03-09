import React, { FunctionComponent, useMemo } from 'react';
import { Background, Metadata, MovieContainer, VoteAverage } from '../Movies.styled';
import { IMAGE_BASE_URL } from '../../../app/constants';
import { Movie } from '../Movies.slice';

const MovieComponent: FunctionComponent<Movie> = ({ vote_average, poster_path, title, popularity }) => {
  const emoji = useMemo(() => {
    if (vote_average < 6) {
      return (
        <span role="img" aria-label="thinking">
          🤔
        </span>
      );
    }

    if (vote_average < 7) {
      return (
        <span role="img" aria-label="smile">
          🙂
        </span>
      );
    }

    if (vote_average <= 10) {
      return (
        <span role="img" aria-label="laugh">
          😃
        </span>
      );
    }
  }, [vote_average]);

  return (
    <MovieContainer>
      <Background src={`${IMAGE_BASE_URL}${poster_path}`} />
      <VoteAverage>
        {vote_average} {emoji}
      </VoteAverage>

      <Metadata>
        <h1>{title}</h1>
        <p>Popularity: {popularity}</p>
      </Metadata>
    </MovieContainer>
  );
};

export default MovieComponent;
