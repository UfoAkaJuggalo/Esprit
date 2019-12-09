import { ArrayInterpolation } from "@emotion/core";
import { fontMontserratCSS, fontWorkSansCSS } from "..";

export interface FontProps {
  fontMontserrat?: boolean;
  fontWorkSans?: boolean;
}

const FontResolver = (params: FontProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.fontMontserrat) css.push(fontMontserratCSS);
  if (params.fontWorkSans) css.push(fontWorkSansCSS);

  return css;
};

export default FontResolver;
