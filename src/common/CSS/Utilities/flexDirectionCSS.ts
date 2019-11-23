import { css } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export const flexRowCSS = css`
  -ms-flex-direction: row !important;
  flex-direction: row !important;
`;
export const flexRowSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
`;
export const flexRowMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
`;
export const flexRowLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
`;
export const flexRowXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }
`;

export const flexRowReverseCSS = css`
  -ms-flex-direction: row-reverse !important;
  flex-direction: row-reverse !important;
`;
export const flexRowReverseSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
`;
export const flexRowReverseMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
`;
export const flexRowReverseLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
`;
export const flexRowReverseXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }
`;

export const flexColumnCSS = css`
  -ms-flex-direction: column !important;
  flex-direction: column !important;
`;
export const flexColumnSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
`;
export const flexColumnMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
`;
export const flexColumnLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
`;
export const flexColumnXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }
`;

export const flexColumnReverseCSS = css`
  -ms-flex-direction: column-reverse !important;
  flex-direction: column-reverse !important;
`;
export const flexColumnReverseSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
`;
export const flexColumnReverseMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
`;
export const flexColumnReverseLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
`;
export const flexColumnReverseXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }
`;
