import { ArrayInterpolation } from "@emotion/core";
import {
  clearfixCSS,
  flexFillCSS,
  flexFillSmCSS,
  flexFillMdCSS,
  flexFillLgCSS,
  flexFillXlCSS
} from "..";

export interface FlexFillProps {
  flexFill?: boolean;
  flexFillSm?: boolean;
  flexFillMd?: boolean;
  flexFillLg?: boolean;
  flexFillXl?: boolean;
}

const FlexFillfResolver = (
  params: FlexFillProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexFill) css.push(flexFillCSS);
  if (params.flexFillSm) css.push(flexFillSmCSS);
  if (params.flexFillMd) css.push(flexFillMdCSS);
  if (params.flexFillLg) css.push(flexFillLgCSS);
  if (params.flexFillXl) css.push(flexFillXlCSS);

  return css;
};

export default FlexFillfResolver;
