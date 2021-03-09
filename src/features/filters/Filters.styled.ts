import styled from 'styled-components';
import { GenreContainer } from '../genres/Genre.styled';
import { colors } from '../global.styles';

export const FiltersContainer = styled.div`
  padding-top: 48px;

  margin-bottom: 64px;
`;

export const GenresContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  ${GenreContainer} {
    margin-top: 6px;
    margin-right: 18px;
  }
`;

export const VoteAverageContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 24px;

  h3 {
    color: white;
    font-weight: 400;
  }

  input {
    border: 0;
    background-color: transparent;
    color: ${colors.red};
    font-weight: 600;
    font-size: 24px;

    height: 20px;
    width: 50px;
    padding: 6px;
    outline: 0;
  }
`;
