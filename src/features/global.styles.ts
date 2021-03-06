import { css } from 'styled-components';

export interface Color {
  [colorName: string]: string;
}

export const colors: Color = {
  red: '#eb0000',
  gray: '#333333'
};

export const fill = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
