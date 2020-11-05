import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const alignSelfStartCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignSelfAutoCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignSelfBaselineCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignSelfCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: center !important;
    align-self: center !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignSelfEndCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: flex-end !important;
    align-self: flex-end !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignSelfStretchCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
