import { ArrayInterpolation } from "@emotion/core";
import { clearfixCSS } from "..";

export interface ClearfixProps {
  clearfix?: boolean;
}

const ClearfixResolver = (
  params: ClearfixProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.clearfix) css.push(clearfixCSS);

  return css;
};

export default ClearfixResolver;
