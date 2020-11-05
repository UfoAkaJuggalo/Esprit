import { css } from "@emotion/core";

export const clearfixCSS = css`
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;
