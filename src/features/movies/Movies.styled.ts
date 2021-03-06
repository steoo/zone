import styled from 'styled-components';
import { fill } from '../global.styles';

export const MoviesContainer = styled.div`
  display: grid;
  grid-auto-columns: 18%;
  grid-auto-flow: column;
  grid-column-gap: 24px;
  padding-bottom: 64px;
`;

export const MovieContainer = styled.div`
  position: relative;

  border-radius: 20px;

  height: 300px;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }

  &:before {
    ${fill};
    content: '';
    z-index: 0;
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
  }
`;

export const Background = styled.div<{ src: string }>`
  ${fill};

  background-size: cover;
  border-radius: 20px;

  ${({ src }) => `background-image: url('${src}')`};

  z-index: -1;
`;
