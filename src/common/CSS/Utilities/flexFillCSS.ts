import css from "@emotion/css";

import GetProperty from "../../config/GetProperty";

export const flexFillCSS = css`
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
`;
export const flexFillSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
`;
export const flexFillMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
`;
export const flexFillLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
`;
export const flexFillXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }
`;
