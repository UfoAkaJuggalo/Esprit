import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const floatLeftCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    float: left !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const floatNoneCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    float: none !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const floatRightCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    float: right !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
