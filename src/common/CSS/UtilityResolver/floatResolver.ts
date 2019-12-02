import { ArrayInterpolation } from "@emotion/core";
import { floatLeftCSS, floatNoneCSS, floatRightCSS } from "..";

export interface FloatProps {
  floatLeft?: boolean;
  floatLeftSm?: boolean;
  floatLeftMd?: boolean;
  floatLeftLg?: boolean;
  floatLeftXl?: boolean;
  floatNone?: boolean;
  floatNoneSm?: boolean;
  floatNoneMd?: boolean;
  floatNoneLg?: boolean;
  floatNoneXl?: boolean;
  floatRight?: boolean;
  floatRightSm?: boolean;
  floatRightMd?: boolean;
  floatRightLg?: boolean;
  floatRightXl?: boolean;
}

const FloatResolver = (params: FloatProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.floatLeft) css.push(floatLeftCSS({}));
  if (params.floatLeftSm) css.push(floatLeftCSS({ mediaQuery: "xs" }));
  if (params.floatLeftMd) css.push(floatLeftCSS({ mediaQuery: "sm" }));
  if (params.floatLeftLg) css.push(floatLeftCSS({ mediaQuery: "md" }));
  if (params.floatLeftXl) css.push(floatLeftCSS({ mediaQuery: "lg" }));

  if (params.floatNone) css.push(floatNoneCSS({}));
  if (params.floatNoneSm) css.push(floatNoneCSS({ mediaQuery: "xs" }));
  if (params.floatNoneMd) css.push(floatNoneCSS({ mediaQuery: "sm" }));
  if (params.floatNoneLg) css.push(floatNoneCSS({ mediaQuery: "md" }));
  if (params.floatNoneXl) css.push(floatNoneCSS({ mediaQuery: "lg" }));

  if (params.floatRight) css.push(floatRightCSS({}));
  if (params.floatRightSm) css.push(floatRightCSS({ mediaQuery: "xs" }));
  if (params.floatRightMd) css.push(floatRightCSS({ mediaQuery: "sm" }));
  if (params.floatRightLg) css.push(floatRightCSS({ mediaQuery: "md" }));
  if (params.floatRightXl) css.push(floatRightCSS({ mediaQuery: "lg" }));

  return css;
};

export default FloatResolver;
