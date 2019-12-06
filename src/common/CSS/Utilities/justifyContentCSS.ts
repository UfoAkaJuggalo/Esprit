import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const justifyContentStartCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const justifyContentCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-pack: center !important;
    justify-content: center !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const justifyContentEndCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const justifyContentAroundCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const justifyContentBetweenCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
