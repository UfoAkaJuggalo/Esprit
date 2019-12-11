import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const markCSS = css`
  padding: 0.2em;
  background-color: ${GetColor({ mark: true })};
  color: ${GetColor({ text: true })};
`;

export const strikeCSS = css`
  text-decoration: line-through;
`;

export const underlineCSS = css`
  text-decoration: underline;
`;
export const smallCSS = css`
  font-size: 80%;
  font-weight: 400;
`;
export const boldCSS = css`
  font-weight: bolder;
`;
export const italicCSS = css`
  font-style: italic;
`;
export const abbrCSS = css`
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
`;
export const abbrInitialismCSS = css`
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  font-size: 90%;
  text-transform: uppercase;
`;
