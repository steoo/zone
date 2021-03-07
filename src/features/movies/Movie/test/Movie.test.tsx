import React from 'react';
import { render } from '@testing-library/react';
import { movies } from '../../test/Movies.fixtures';

import Movie from '../Movie.component';

describe('Features', () => {
  describe('Movies', () => {
    describe('Component', () => {
      it('should render, without crashing', () => {
        const { baseElement } = render(<Movie {...movies[0]} />);

        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
