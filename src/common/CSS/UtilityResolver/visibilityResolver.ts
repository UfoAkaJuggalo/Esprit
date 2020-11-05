import { ArrayInterpolation } from "@emotion/core";
import { VisibleCSS, InvisibleCSS } from "..";

export interface VisibilityProps {
  visible?: boolean;
  invisible?: boolean;
}

const VisibilityResolver = (
  params: VisibilityProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.visible) css.push(VisibleCSS);
  if (params.invisible) css.push(InvisibleCSS);

  return css;
};

export default VisibilityResolver;
