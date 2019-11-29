import { css, SerializedStyles } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export interface Props {
  mediaQuery?: keyof MediaQuery;
  number: number;
}

export const orderCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-order: ${params.number};
    order: ${params.number};
  `;

  switch (params.mediaQuery) {
    case "xs":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
          ${retCSS};
        }
      `;
    case "sm":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
          ${retCSS};
        }
      `;
    case "md":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
          ${retCSS};
        }
      `;
    case "lg":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
          ${retCSS};
        }
      `;
    default:
      return retCSS;
  }
};
