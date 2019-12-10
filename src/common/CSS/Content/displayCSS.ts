import { css, SerializedStyles } from "@emotion/core";

export enum DisplaySize {
  d1 = 2.5,
  d2 = 2,
  d3 = 1,
  d4 = 0
}

interface DisplayCSSProps {
  displaySize: DisplaySize;
}

export const displayCSS = (params: DisplayCSSProps): SerializedStyles => {
  const fontSize: number = params.displaySize + 3;
  return css`
    font-size: ${fontSize}rem;
    font-weight: 300;
    line-height: 1.2;
  `;
};
