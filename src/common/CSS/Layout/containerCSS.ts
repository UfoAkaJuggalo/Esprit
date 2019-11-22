import { css } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export const containerCSS = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
    max-width: 540px;
  }
  @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
    max-width: 720px;
  }
  @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
    max-width: 960px;
  }
  @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
    max-width: 1140px;
  }
`;

export const containerFluidCSS = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
