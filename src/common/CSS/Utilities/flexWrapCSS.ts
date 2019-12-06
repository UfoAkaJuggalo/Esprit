import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexWrapCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexNoWrapCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexWrapReverseCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
