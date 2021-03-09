import React from 'react';
import renderWithStore from '../../../app/utils/testing';
import Filters from '../Filters.component';
import { initialState } from '../../movies/Movies.slice';
import { movies } from '../../movies/test/Movies.fixtures';
import { genres } from '../../genres/test/Genres.fixtures';

describe('Components', () => {
  describe('Features', () => {
    describe('Filters', () => {
      const mockState = {
        movies: {
          ...initialState,
          data: movies
        },
        genres: {
          isFetching: false,
          data: genres
        }
      };

      it('should render, without crashing', () => {
        const { baseElement } = renderWithStore(<Filters genres={genres} />, {
          initialState: mockState
        });

        expect(baseElement).toMatchSnapshot();
      });

      it('should have current vote average set to 4', () => {
        const localMockState = {
          ...mockState,
          movies: {
            ...mockState.movies,
            filters: {
              ...mockState.movies.filters,
              avg: 4
            }
          }
        };

        const { baseElement, getByLabelText } = renderWithStore(<Filters genres={genres} />, {
          initialState: localMockState
        });

        expect(getByLabelText('number')).toHaveValue(4);
        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
