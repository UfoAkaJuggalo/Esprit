import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const alignItemsStartCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignItemsCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-align: center !important;
    align-items: center !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignItemsEndCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
