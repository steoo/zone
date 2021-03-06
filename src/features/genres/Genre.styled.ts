import styled from 'styled-components';
import { colors } from '../global.styles';

export const GenreContainer = styled.button<{ selected: boolean | undefined }>`
  border-radius: 20px;

  border: 1px solid ${({ selected }) => (selected ? colors.red : colors.gray)};
  background-color: black;

  cursor: pointer;
  color: ${({ selected }) => (selected ? 'white' : colors.gray)};
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;

  outline: 0;
  padding: 6px 24px;

  flex: 0 0 auto;
`;
