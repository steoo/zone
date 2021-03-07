import React from 'react';
import { genres } from './Genres.fixtures';
import { getGenreById } from '../Genres.utils';
import Genre from '../Genre.component';
import renderWithStore from '../../../app/utils/testing';

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

      it('should call toggleIsSelected when clicked', () => {
        const { getByText } = renderWithStore(<Genre genreId={28} />, {
          initialState: {
            genres: {
              isFetching: false,
              data: genres
            }
          }
        });

        const button = getByText('Action');

        button.click();

        expect(button).toHaveStyle('border: 1px solid #eb0000');
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
