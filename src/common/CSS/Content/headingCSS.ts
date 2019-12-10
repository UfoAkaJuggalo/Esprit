import { css, SerializedStyles } from "@emotion/core";

export enum HeadingSize {
  h1 = 5,
  h2 = 4,
  h3 = 3,
  h4 = 2,
  h5 = 1,
  h6 = 0
}

interface HeadingCSSProps {
  headingSize: HeadingSize;
}

export const headingCSS = (params: HeadingCSSProps): SerializedStyles => {
  const fontSize: number = params.headingSize * 0.25 + 1;
  return css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    font-size: ${fontSize}rem;
  `;
};
