import styled from 'styled-components';
import { colors } from '../global.styles';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-content: center;
  padding: 0 20px 64px;
`;

export const MovieContainer = styled.div`
  position: relative;

  border: 1px solid ${colors.gray};
  border-radius: 2px;

  height: 300px;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }
`;

export const Background = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-size: cover;
  ${({ src }) => `background-image: url('${src}')`};

  z-index: -1;
`;
