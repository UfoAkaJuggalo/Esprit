import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const flexFillCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
