import { css } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export const justifyContentStartCSS = css`
  -ms-flex-pack: start !important;
  justify-content: flex-start !important;
`;
export const justifyContentCenterCSS = css`
  -ms-flex-pack: center !important;
  justify-content: center !important;
`;
export const justifyContentEndCSS = css`
  -ms-flex-pack: end !important;
  justify-content: flex-end !important;
`;
export const justifyContentAroundCSS = css`
  -ms-flex-pack: distribute !important;
  justify-content: space-around !important;
`;
export const justifyContentBetweenCSS = css`
  -ms-flex-pack: justify !important;
  justify-content: space-between !important;
`;

export const justifyContentStartSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
`;
export const justifyContentCenterSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
`;
export const justifyContentEndSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
`;
export const justifyContentAroundSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
`;
export const justifyContentBetweenSmCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
`;

export const justifyContentStartMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
`;
export const justifyContentCenterMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
`;
export const justifyContentEndMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
`;
export const justifyContentAroundMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
`;
export const justifyContentBetweenMdCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
`;

export const justifyContentStartLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
`;
export const justifyContentCenterLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
`;
export const justifyContentEndLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
`;
export const justifyContentAroundLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
`;
export const justifyContentBetweenLgCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
`;

export const justifyContentStartXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }
`;
export const justifyContentCenterXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }
`;
export const justifyContentEndXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
`;
export const justifyContentAroundXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }
`;
export const justifyContentBetweenXlCSS = css`
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }
`;
