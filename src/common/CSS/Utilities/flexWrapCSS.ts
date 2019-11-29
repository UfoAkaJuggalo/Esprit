import { css, SerializedStyles } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexWrapCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
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

export const flexNoWrapCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
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

export const flexWrapReverseCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
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
