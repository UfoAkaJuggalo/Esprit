import { css, SerializedStyles } from "@emotion/core";

import GetProperty from "../../config/GetProperty";
import { MediaQueryWraper } from "./mediaQueryWraper";

export enum SpaceType {
  margin = "margin",
  padding = "padding"
}

export enum Side {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
  x = "x",
  y = "y"
}

export enum Size {
  s0 = 0,
  s1 = 1,
  s2 = 2,
  s3 = 3,
  s4 = 4,
  s5 = 5,
  auto = "auto"
}

export interface SpaceCSSProps {
  spaceType: SpaceType;
  mediaQuery?: keyof MediaQuery;
  side?: Side;
  size: Size;
}

export const spaceCSS = (params: SpaceCSSProps): SerializedStyles => {
  let size: string;
  let retCSS: SerializedStyles;

  switch (params.size) {
    case Size.s0:
      size = "0 !important";
      break;
    case Size.s1:
      size = `${parseFloat(GetProperty({ utility: "spaceFactor" })) *
        0.25}rem !important`;
      break;
    case Size.s2:
      size = `${parseFloat(GetProperty({ utility: "spaceFactor" })) *
        0.5}rem !important`;
      break;
    case Size.s3:
      size = `${GetProperty({ utility: "spaceFactor" })}rem !important`;
      break;
    case Size.s4:
      size = `${parseFloat(GetProperty({ utility: "spaceFactor" })) *
        1.5}rem !important`;
      break;
    case Size.s5:
      size = `${parseFloat(GetProperty({ utility: "spaceFactor" })) *
        3}rem !important`;
      break;
    default:
      size = "auto !important";
      break;
  }

  if (params.side) {
    switch (params.side) {
      case Side.x:
        retCSS = css`
          ${params.spaceType.valueOf()}-left: ${size};
          ${params.spaceType.valueOf()}-right: ${size};
        `;
        break;
      case Side.y:
        retCSS = css`
          ${params.spaceType.valueOf()}-top: ${size};
          ${params.spaceType.valueOf()}-bottom: ${size};
        `;
        break;
      default:
        retCSS = css`${params.spaceType.valueOf()}-${params.side.valueOf()}: ${size};`;
        break;
    }
  } else {
    retCSS = css`
      ${params.spaceType.valueOf()}: ${size};
    `;
  }

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
