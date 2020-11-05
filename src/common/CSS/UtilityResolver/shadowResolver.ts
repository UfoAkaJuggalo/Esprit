import { ArrayInterpolation } from "@emotion/core";
import { ShadowCSS, ShadowNoneCSS, ShadowSmCSS, ShadowLgCSS } from "..";

export interface ShadowProps {
  shadow?: boolean;
  shadowNone?: boolean;
  shadowSm?: boolean;
  shadowLg?: boolean;
}

const ShadowResolver = (params: ShadowProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.shadow) css.push(ShadowCSS);
  if (params.shadowNone) css.push(ShadowNoneCSS);
  if (params.shadowSm) css.push(ShadowSmCSS);
  if (params.shadowLg) css.push(ShadowLgCSS);

  return css;
};

export default ShadowResolver;
