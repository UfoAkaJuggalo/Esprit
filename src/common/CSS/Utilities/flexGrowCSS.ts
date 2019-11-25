import css from "@emotion/css";

import GetProperty from "../../config/GetProperty";

export const flexGrow0CSS = css`
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
`;
export const flexGrow0SmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
`;
export const flexGrow0MdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
`;
export const flexGrow0LgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
`;
export const flexGrow0XlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }
`;
export const flexGrow1CSS = css`
  -ms-flex-positive: 1 !important;
  flex-grow: 1 !important;
`;
export const flexGrow1SmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
`;
export const flexGrow1MdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
`;
export const flexGrow1LgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
`;
export const flexGrow1XlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }
`;
