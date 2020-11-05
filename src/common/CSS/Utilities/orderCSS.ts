import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
  number: number;
}

export const orderCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    -ms-flex-order: ${params.number};
    order: ${params.number};
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
