import { css } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export const alignItemsStartCSS = css`
  -ms-flex-align: start !important;
  align-items: flex-start !important;
`;

export const alignItemsCenterCSS = css`
  -ms-flex-align: center !important;
  align-items: center !important;
`;

export const alignItemsEndCSS = css`
  -ms-flex-align: end !important;
  align-items: flex-end !important;
`;

export const alignItemsStartSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
`;

export const alignItemsCenterSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
`;

export const alignItemsEndSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
`;
export const alignItemsStartMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
`;

export const alignItemsCenterMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
`;

export const alignItemsEndMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
`;

export const alignItemsStartLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
`;

export const alignItemsCenterLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
`;

export const alignItemsEndLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
`;
export const alignItemsStartXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }
`;

export const alignItemsCenterXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-align: center !important;
    align-items: center !important;
  }
`;

export const alignItemsEndXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }
`;
