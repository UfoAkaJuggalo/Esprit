import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexShrink0CSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexShrink1CSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
