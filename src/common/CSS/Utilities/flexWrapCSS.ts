import css from "@emotion/css";

import GetProperty from "../../config/GetProperty";

export const flexWrapCSS = css`
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
`;
export const flexWrapSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
`;
export const flexWrapMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
`;
export const flexWrapLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
`;
export const flexWrapXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }
`;
export const flexNoWrapCSS = css`
  -ms-flex-wrap: nowrap !important;
  flex-wrap: nowrap !important;
`;
export const flexNoWrapSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
`;
export const flexNoWrapMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
`;
export const flexNoWrapLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
`;
export const flexNoWrapXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }
`;
export const flexWrapReverseCSS = css`
  -ms-flex-wrap: wrap-reverse !important;
  flex-wrap: wrap-reverse !important;
`;
export const flexWrapReverseSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
`;
export const flexWrapReverseMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
`;
export const flexWrapReverseLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
`;
export const flexWrapReverseXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }
`;
