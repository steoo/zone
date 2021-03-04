import { genres } from './Genres.fixtures';
import { getGenreById } from '../Genres.utils';

describe('Features', () => {
  describe('Genres', () => {
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
