import { css, SerializedStyles } from "@emotion/core";
import GetProperty from "../../config/GetProperty";
import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexGrow0CSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexGrow1CSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
