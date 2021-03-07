import styled from 'styled-components';
import { fill } from '../global.styles';

export const MoviesContainer = styled.div`
  display: grid;
  grid-auto-columns: 35%;
  grid-auto-flow: column;
  grid-column-gap: 24px;
  padding-bottom: 64px;

  overflow-x: scroll;

  @media (min-width: 768px) {
    grid-auto-columns: 25%;
  }

  @media (min-width: 1024px) {
    grid-auto-columns: 20%;
  }

  @media (min-width: 1200px) {
    grid-auto-columns: 18%;
  }
`;

export const MovieContainer = styled.div`
  position: relative;

  border-radius: 20px;

  height: 350px;

  h1 {
    font-size: 28px;
    font-weight: 500;
  }

  &:before {
    ${fill};
    content: '';
    z-index: 0;
    background: linear-gradient(to top, black, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0));
  }
`;

export const VoteAverage = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  text-align: center;

  display: flex;
  align-items: center;

  border-radius: 20px;
  background-color: white;
  color: black;
  font-size: 14px;

  height: 12px;
  padding: 6px 10px;

  span {
    margin-left: 6px;
    font-size: 18px;
  }
`;

export const Background = styled.div<{ src: string }>`
  ${fill};

  background-size: cover;
  border-radius: 20px;

  ${({ src }) => `background-image: url('${src}')`};

  z-index: -1;
`;

export const Metadata = styled.div`
  position: absolute;
  left: 6px;
  bottom: 6px;
  color: white;

  h1 {
    font-size: 20px;
  }
`;
