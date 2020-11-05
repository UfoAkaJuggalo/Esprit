import { css } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export const positionAbsCSS = css`
  position: absolute !important;
`;

export const positionFixCSS = css`
  position: fixed !important;
`;
export const positionRelativeCSS = css`
  position: relative !important;
`;
export const positionStatCSS = css`
  position: static !important;
`;
export const positionStickyCSS = css`
  position: -webkit-sticky !important;
  position: sticky !important;
`;

export const positionFixTopCSS = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${GetProperty({ zIndex: "fixed" })};
`;

export const positionFixBottomCSS = css`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${GetProperty({ zIndex: "fixed" })};
`;

export const positionStickyTopCSS = css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: ${GetProperty({ zIndex: "sticky" })};
`;
