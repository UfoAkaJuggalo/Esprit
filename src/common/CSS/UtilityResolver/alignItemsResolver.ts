import { ArrayInterpolation } from "@emotion/core";
import {
  alignItemsStartCSS,
  alignItemsCenterCSS,
  alignItemsEndCSS,
  alignItemsStartSmCSS,
  alignItemsCenterSmCSS,
  alignItemsEndSmCSS,
  alignItemsStartMdCSS,
  alignItemsCenterMdCSS,
  alignItemsEndMdCSS,
  alignItemsStartLgCSS,
  alignItemsCenterLgCSS,
  alignItemsEndLgCSS,
  alignItemsStartXlCSS,
  alignItemsCenterXlCSS,
  alignItemsEndXlCSS
} from "..";

export interface AlignItemsProps {
  alignItemsStart?: boolean;
  alignItemsEnd?: boolean;
  alignItemsCenter?: boolean;
  alignItemsStartSm?: boolean;
  alignItemsEndSm?: boolean;
  alignItemsCenterSm?: boolean;
  alignItemsStartMd?: boolean;
  alignItemsEndMd?: boolean;
  alignItemsCenterMd?: boolean;
  alignItemsStartLg?: boolean;
  alignItemsEndLg?: boolean;
  alignItemsCenterLg?: boolean;
  alignItemsStartXl?: boolean;
  alignItemsEndXl?: boolean;
  alignItemsCenterXl?: boolean;
}

const AlignItemsResolver = (
  params: AlignItemsProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignItemsStart) css.push(alignItemsStartCSS);
  if (params.alignItemsCenter) css.push(alignItemsCenterCSS);
  if (params.alignItemsEnd) css.push(alignItemsEndCSS);
  if (params.alignItemsStartSm) css.push(alignItemsStartSmCSS);
  if (params.alignItemsCenterSm) css.push(alignItemsCenterSmCSS);
  if (params.alignItemsEndSm) css.push(alignItemsEndSmCSS);
  if (params.alignItemsStartMd) css.push(alignItemsStartMdCSS);
  if (params.alignItemsCenterMd) css.push(alignItemsCenterMdCSS);
  if (params.alignItemsEndMd) css.push(alignItemsEndMdCSS);
  if (params.alignItemsStartLg) css.push(alignItemsStartLgCSS);
  if (params.alignItemsCenterLg) css.push(alignItemsCenterLgCSS);
  if (params.alignItemsEndLg) css.push(alignItemsEndLgCSS);
  if (params.alignItemsStartXl) css.push(alignItemsStartXlCSS);
  if (params.alignItemsCenterXl) css.push(alignItemsCenterXlCSS);
  if (params.alignItemsEndXl) css.push(alignItemsEndXlCSS);

  return css;
};

export default AlignItemsResolver;
