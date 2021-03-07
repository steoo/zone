import React from 'react';
import MoviesReducer, { fetchMovies, fetchSuccessMovies, fetchFailedMovies, initialState } from '../Movies.slice';
import { movies } from './Movies.fixtures';
import { filterByGenres, filterByVoteAverage, orderByPopularity } from '../Movies.utils';
import Movies from '../Movies.component';
import renderWithStore from '../../../app/utils/testing';
import { genres } from '../../genres/test/Genres.fixtures';

describe('Features', () => {
  describe('Movies', () => {
    describe('Component', () => {
      it('should render, without crashing', () => {
        const { baseElement } = renderWithStore(<Movies movies={movies} />, {
          initialState: {
            movies: {
              ...initialState,
              data: movies
            },
            genres: {
              isFetching: false,
              data: genres
            }
          }
        });
        expect(baseElement).toMatchSnapshot();
      });
    });

    describe('Slice', () => {
      it('should set isFetching to true when fetchMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchMovies();

        expect(MoviesReducer(state, action)).toEqual({
          ...initialState,
          isFetching: true
        });
      });

      it('should set isFetching to false and a response when fetchSuccessMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchSuccessMovies(movies);

        expect(MoviesReducer(state, action)).toEqual({
          ...initialState,
          isFetching: false,
          data: movies
        });
      });

      it('should set isFetching to false and an error when fetchFailedMovies is dispatched', () => {
        const state = { ...initialState };
        const action = fetchFailedMovies({});

        expect(MoviesReducer(state, action)).toEqual({
          ...initialState,
          isFetching: false,
          data: [],
          error: true
        });
      });
    });

    describe('Utils', () => {
      it('should order by popularity in descending order', () => {
        const sorted = orderByPopularity(movies);
        const mappedMovies = [...sorted].map(({ popularity }) => ({ popularity }));
        expect(mappedMovies).toEqual([
          { popularity: 2407.318 },
          { popularity: 2119.969 },
          { popularity: 1362.714 },
          { popularity: 1267.391 },
          { popularity: 1175.056 },
          { popularity: 737.271 },
          { popularity: 719.222 },
          { popularity: 641.172 },
          { popularity: 541.71 },
          { popularity: 510.22 },
          { popularity: 458.087 },
          { popularity: 343.235 },
          { popularity: 271.001 },
          { popularity: 222.015 },
          { popularity: 219.665 },
          { popularity: 206.817 },
          { popularity: 203.367 },
          { popularity: 180.143 },
          { popularity: 135.304 },
          { popularity: 122.882 }
        ]);
      });

      it('should filter movies with certain ids', () => {
        expect(filterByGenres(movies, [14, 28])).toEqual([
          {
            adult: false,
            backdrop_path: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
            genre_ids: [14, 28, 12],
            id: 464052,
            original_language: 'en',
            original_title: 'Wonder Woman 1984',
            overview:
              'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
            popularity: 2407.318,
            poster_path: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg',
            release_date: '2020-12-16',
            title: 'Wonder Woman 1984',
            video: false,
            vote_average: 7,
            vote_count: 3437
          },
          {
            adult: false,
            backdrop_path: '/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg',
            genre_ids: [16, 28, 12, 14, 18],
            id: 635302,
            original_language: 'ja',
            original_title: '劇場版「鬼滅の刃」無限列車編',
            overview:
              "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
            popularity: 206.817,
            poster_path: '/yF45egpHwaYLn4jTyZAgk0Cmug9.jpg',
            release_date: '2020-10-16',
            title: 'Demon Slayer: Infinity Train',
            video: false,
            vote_average: 8,
            vote_count: 418
          }
        ]);
      });

      it('should filter movies above a certain vote average', () => {
        const averages = filterByVoteAverage(movies, 6).map(({ vote_average }) => ({ vote_average }));

        expect(averages).toEqual([
          { vote_average: 7 },
          { vote_average: 6.4 },
          { vote_average: 6.6 },
          { vote_average: 8.3 },
          { vote_average: 6.1 },
          { vote_average: 6.6 },
          { vote_average: 7.6 },
          { vote_average: 7 },
          { vote_average: 6.5 },
          { vote_average: 6.4 },
          { vote_average: 6.8 },
          { vote_average: 7 },
          { vote_average: 8 },
          { vote_average: 6.6 }
        ]);
      });
    });
  });
});
