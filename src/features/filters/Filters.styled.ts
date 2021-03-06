import styled from 'styled-components';
import { GenreContainer } from '../genres/Genre.styled';

export const FiltersContainer = styled.div`
  padding-top: 48px;

  margin-bottom: 64px;
`;

export const GenresContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  overflow-x: scroll;

  ${GenreContainer}:not(:first-of-type) {
    margin-left: 16px;
  }
`;
