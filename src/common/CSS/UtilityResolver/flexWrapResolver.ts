import { ArrayInterpolation } from "@emotion/core";
import {
  flexWrapCSS,
  flexWrapSmCSS,
  flexWrapMdCSS,
  flexWrapLgCSS,
  flexWrapXlCSS,
  flexNoWrapCSS,
  flexNoWrapSmCSS,
  flexNoWrapMdCSS,
  flexNoWrapLgCSS,
  flexNoWrapXlCSS,
  flexWrapReverseCSS,
  flexWrapReverseSmCSS,
  flexWrapReverseMdCSS,
  flexWrapReverseLgCSS,
  flexWrapReverseXlCSS
} from "..";

export interface FlexWrapProps {
  flexWrap?: boolean;
  flexWrapSm?: boolean;
  flexWrapMd?: boolean;
  flexWrapLg?: boolean;
  flexWrapXl?: boolean;
  flexNoWrap?: boolean;
  flexNoWrapSm?: boolean;
  flexNoWrapMd?: boolean;
  flexNoWrapLg?: boolean;
  flexNoWrapXl?: boolean;
  flexWrapReverse?: boolean;
  flexWrapReverseSm?: boolean;
  flexWrapReverseMd?: boolean;
  flexWrapReverseLg?: boolean;
  flexWrapReverseXl?: boolean;
}

const FlexWrapResolver = (
  params: FlexWrapProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexWrap) css.push(flexWrapCSS);
  if (params.flexWrapSm) css.push(flexWrapSmCSS);
  if (params.flexWrapMd) css.push(flexWrapMdCSS);
  if (params.flexWrapLg) css.push(flexWrapLgCSS);
  if (params.flexWrapXl) css.push(flexWrapXlCSS);

  if (params.flexNoWrap) css.push(flexNoWrapCSS);
  if (params.flexNoWrapSm) css.push(flexNoWrapSmCSS);
  if (params.flexNoWrapMd) css.push(flexNoWrapMdCSS);
  if (params.flexNoWrapLg) css.push(flexNoWrapLgCSS);
  if (params.flexNoWrapXl) css.push(flexNoWrapXlCSS);

  if (params.flexWrapReverse) css.push(flexWrapReverseCSS);
  if (params.flexWrapReverseSm) css.push(flexWrapReverseSmCSS);
  if (params.flexWrapReverseMd) css.push(flexWrapReverseMdCSS);
  if (params.flexWrapReverseLg) css.push(flexWrapReverseLgCSS);
  if (params.flexWrapReverseXl) css.push(flexWrapReverseXlCSS);

  return css;
};

export default FlexWrapResolver;
