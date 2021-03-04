import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  justify-content: center;
`;

export const MovieContainer = styled.div`
  border: 1px solid #222222;
  border-radius: 2px;
`;
