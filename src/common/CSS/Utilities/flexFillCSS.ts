import { css, SerializedStyles } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexFillCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
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
