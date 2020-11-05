import { ArrayInterpolation } from "@emotion/core";
import { SROnlyCSS, SROnlyFocusCSS } from "..";

export interface ScrReaderProps {
  SROnly?: boolean;
  SROnlyFocus?: boolean;
}

const ScrReaderResolver = (
  params: ScrReaderProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.SROnly) css.push(SROnlyCSS);
  if (params.SROnlyFocus) css.push(SROnlyFocusCSS);

  return css;
};

export default ScrReaderResolver;
