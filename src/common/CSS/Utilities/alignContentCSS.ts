import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const alignContentStartCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignContentCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignContentEndCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: flex-end !important;
    align-content: flex-end !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignContentStretchCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: space-around !important;
    align-content: space-around !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignContentAroundCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: distribute !important;
    align-content: around !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const alignContentBetweenCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-line-pack: distribute !important;
    align-content: around !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
