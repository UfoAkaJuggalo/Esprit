import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexRowCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexRowReverseCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexColumnCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const flexColumnReverseCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
