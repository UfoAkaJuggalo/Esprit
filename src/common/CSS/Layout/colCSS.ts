import { css, SerializedStyles } from "@emotion/core";
import { MediaQueryWraper } from "../Utilities/mediaQueryWraper";

export enum ColSize {
  s1 = 1,
  s2 = 2,
  s3 = 3,
  s4 = 4,
  s5 = 5,
  s6 = 6,
  s7 = 7,
  s8 = 8,
  s9 = 9,
  s10 = 10,
  s11 = 11,
  s12 = 12,
  auto = "auto"
}
export interface ColCSSProps {
  mediaQuery?: keyof MediaQuery;
  size?: ColSize;
}

interface OffsetCSSProps {
  mediaQuery?: keyof MediaQuery;
  offset: number;
}

export const colCSS = (params: ColCSSProps): SerializedStyles => {
  let retCSS: SerializedStyles;
  let size = `-ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;`;

  switch (params.size) {
    case ColSize.s1:
      size = `-ms-flex: 0 0 8.333333%;
              flex: 0 0 8.333333%;
              max-width: 8.333333%;`;
      break;
    case ColSize.s2:
      size = `-ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;`;
      break;
    case ColSize.s3:
      size = `-ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;`;
      break;
    case ColSize.s4:
      size = `-ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;`;
      break;
    case ColSize.s5:
      size = `-ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;`;
      break;
    case ColSize.s6:
      size = `-ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;`;
      break;
    case ColSize.s7:
      size = `-ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;`;
      break;
    case ColSize.s8:
      size = `-ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;`;
      break;
    case ColSize.s9:
      size = `-ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;`;
      break;
    case ColSize.s10:
      size = `-ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;`;
      break;
    case ColSize.s11:
      size = `-ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;`;
      break;
    case ColSize.s12:
      size = `-ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;`;
      break;
    case ColSize.auto:
      size = `-ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;`;
      break;
  }

  retCSS = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    ${size}
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const offsetCSS = (params: OffsetCSSProps): SerializedStyles => {
  const retCSS: SerializedStyles = css`
    margin-left: ${(params.offset * 100) / 12}%;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
