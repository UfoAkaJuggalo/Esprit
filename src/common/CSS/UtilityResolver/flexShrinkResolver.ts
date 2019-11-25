import { ArrayInterpolation } from "@emotion/core";
import {
  flexShrink0CSS,
  flexShrink0SmCSS,
  flexShrink0MdCSS,
  flexShrink0LgCSS,
  flexShrink0XlCSS,
  flexShrink1CSS,
  flexShrink1SmCSS,
  flexShrink1MdCSS,
  flexShrink1LgCSS,
  flexShrink1XlCSS
} from "..";

export interface FlexShrinkProps {
  flexShrink0?: boolean;
  flexShrink0Sm?: boolean;
  flexShrink0Md?: boolean;
  flexShrink0Lg?: boolean;
  flexShrink0Xl?: boolean;
  flexShrink1?: boolean;
  flexShrink1Sm?: boolean;
  flexShrink1Md?: boolean;
  flexShrink1Lg?: boolean;
  flexShrink1Xl?: boolean;
}

const FlexShrinkResolver = (
  params: FlexShrinkProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexShrink0) css.push(flexShrink0CSS);
  if (params.flexShrink0Sm) css.push(flexShrink0SmCSS);
  if (params.flexShrink0Md) css.push(flexShrink0MdCSS);
  if (params.flexShrink0Lg) css.push(flexShrink0LgCSS);
  if (params.flexShrink0Xl) css.push(flexShrink0XlCSS);

  if (params.flexShrink1) css.push(flexShrink1CSS);
  if (params.flexShrink1Sm) css.push(flexShrink1SmCSS);
  if (params.flexShrink1Md) css.push(flexShrink1MdCSS);
  if (params.flexShrink1Lg) css.push(flexShrink1LgCSS);
  if (params.flexShrink1Xl) css.push(flexShrink1XlCSS);

  return css;
};

export default FlexShrinkResolver;
