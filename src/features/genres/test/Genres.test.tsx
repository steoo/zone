import React from 'react';
import { genres } from './Genres.fixtures';
import { getGenreById } from '../Genres.utils';
import renderWithStore from '../../../app/utils/testing';
import Genre from '../Genre.component';

describe('Features', () => {
  describe('Genres', () => {
    describe('Component', () => {
      it('should render the correct genre', () => {
        const { baseElement, getByText } = renderWithStore(<Genre genreId={28} />, {
          initialState: {
            genres: {
              isFetching: false,
              data: genres
            }
          }
        });

        expect(getByText('Action')).toBeInTheDocument();
        expect(baseElement).toMatchSnapshot();
      });
    });

    describe('Utils', () => {
      it('should return the id by genre', () => {
        expect(getGenreById(genres, 12)).toEqual({
          id: 12,
          name: 'Adventure'
        });
      });
    });
  });
});
