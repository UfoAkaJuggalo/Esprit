import { ArrayInterpolation } from "@emotion/core";
import {
  alignItemsStartCSS,
  alignItemsCenterCSS,
  alignItemsEndCSS,
  justifyContentStartCSS,
  justifyContentCenterCSS,
  justifyContentEndCSS,
  justifyContentAroundCSS,
  justifyContentBetweenCSS,
  alignItemsStartSmCSS,
  alignItemsCenterSmCSS,
  alignItemsEndSmCSS,
  justifyContentStartSmCSS,
  justifyContentCenterSmCSS,
  justifyContentEndSmCSS,
  justifyContentAroundSmCSS,
  justifyContentBetweenSmCSS,
  alignItemsStartMdCSS,
  alignItemsCenterMdCSS,
  alignItemsEndMdCSS,
  justifyContentStartMdCSS,
  justifyContentCenterMdCSS,
  justifyContentEndMdCSS,
  justifyContentAroundMdCSS,
  justifyContentBetweenMdCSS,
  alignItemsStartLgCSS,
  alignItemsCenterLgCSS,
  alignItemsEndLgCSS,
  justifyContentStartLgCSS,
  justifyContentCenterLgCSS,
  justifyContentEndLgCSS,
  justifyContentAroundLgCSS,
  justifyContentBetweenLgCSS,
  alignItemsStartXlCSS,
  alignItemsCenterXlCSS,
  alignItemsEndXlCSS,
  justifyContentStartXlCSS,
  justifyContentCenterXlCSS,
  justifyContentEndXlCSS,
  justifyContentAroundXlCSS,
  justifyContentBetweenXlCSS
} from ".";

export interface UtilityProps {
  alignItemsStart?: boolean;
  alignItemsEnd?: boolean;
  alignItemsCenter?: boolean;
  justifyContentStart?: boolean;
  justifyContentCenter?: boolean;
  justifyContentEnd?: boolean;
  justifyContentAround?: boolean;
  justifyContentBetween?: boolean;
  alignItemsStartSm?: boolean;
  alignItemsEndSm?: boolean;
  alignItemsCenterSm?: boolean;
  justifyContentStartSm?: boolean;
  justifyContentCenterSm?: boolean;
  justifyContentEndSm?: boolean;
  justifyContentAroundSm?: boolean;
  justifyContentBetweenSm?: boolean;
  alignItemsStartMd?: boolean;
  alignItemsEndMd?: boolean;
  alignItemsCenterMd?: boolean;
  justifyContentStartMd?: boolean;
  justifyContentCenterMd?: boolean;
  justifyContentEndMd?: boolean;
  justifyContentAroundMd?: boolean;
  justifyContentBetweenMd?: boolean;
  alignItemsStartLg?: boolean;
  alignItemsEndLg?: boolean;
  alignItemsCenterLg?: boolean;
  justifyContentStartLg?: boolean;
  justifyContentCenterLg?: boolean;
  justifyContentEndLg?: boolean;
  justifyContentAroundLg?: boolean;
  justifyContentBetweenLg?: boolean;
  alignItemsStartXl?: boolean;
  alignItemsEndXl?: boolean;
  alignItemsCenterXl?: boolean;
  justifyContentStartXl?: boolean;
  justifyContentCenterXl?: boolean;
  justifyContentEndXl?: boolean;
  justifyContentAroundXl?: boolean;
  justifyContentBetweenXl?: boolean;
}

const UtilityResolver = (
  params: UtilityProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignItemsStart) css.push(alignItemsStartCSS);
  if (params.alignItemsCenter) css.push(alignItemsCenterCSS);
  if (params.alignItemsEnd) css.push(alignItemsEndCSS);

  if (params.justifyContentStart) css.push(justifyContentStartCSS);
  if (params.justifyContentCenter) css.push(justifyContentCenterCSS);
  if (params.justifyContentEnd) css.push(justifyContentEndCSS);
  if (params.justifyContentAround) css.push(justifyContentAroundCSS);
  if (params.justifyContentBetween) css.push(justifyContentBetweenCSS);

  if (params.alignItemsStartSm) css.push(alignItemsStartSmCSS);
  if (params.alignItemsCenterSm) css.push(alignItemsCenterSmCSS);
  if (params.alignItemsEndSm) css.push(alignItemsEndSmCSS);

  if (params.justifyContentStartSm) css.push(justifyContentStartSmCSS);
  if (params.justifyContentCenterSm) css.push(justifyContentCenterSmCSS);
  if (params.justifyContentEndSm) css.push(justifyContentEndSmCSS);
  if (params.justifyContentAroundSm) css.push(justifyContentAroundSmCSS);
  if (params.justifyContentBetweenSm) css.push(justifyContentBetweenSmCSS);

  if (params.alignItemsStartMd) css.push(alignItemsStartMdCSS);
  if (params.alignItemsCenterMd) css.push(alignItemsCenterMdCSS);
  if (params.alignItemsEndMd) css.push(alignItemsEndMdCSS);

  if (params.justifyContentStartMd) css.push(justifyContentStartMdCSS);
  if (params.justifyContentCenterMd) css.push(justifyContentCenterMdCSS);
  if (params.justifyContentEndMd) css.push(justifyContentEndMdCSS);
  if (params.justifyContentAroundMd) css.push(justifyContentAroundMdCSS);
  if (params.justifyContentBetweenMd) css.push(justifyContentBetweenMdCSS);

  if (params.alignItemsStartLg) css.push(alignItemsStartLgCSS);
  if (params.alignItemsCenterLg) css.push(alignItemsCenterLgCSS);
  if (params.alignItemsEndLg) css.push(alignItemsEndLgCSS);

  if (params.justifyContentStartLg) css.push(justifyContentStartLgCSS);
  if (params.justifyContentCenterLg) css.push(justifyContentCenterLgCSS);
  if (params.justifyContentEndLg) css.push(justifyContentEndLgCSS);
  if (params.justifyContentAroundLg) css.push(justifyContentAroundLgCSS);
  if (params.justifyContentBetweenLg) css.push(justifyContentBetweenLgCSS);

  if (params.alignItemsStartXl) css.push(alignItemsStartXlCSS);
  if (params.alignItemsCenterXl) css.push(alignItemsCenterXlCSS);
  if (params.alignItemsEndXl) css.push(alignItemsEndXlCSS);

  if (params.justifyContentStartXl) css.push(justifyContentStartXlCSS);
  if (params.justifyContentCenterXl) css.push(justifyContentCenterXlCSS);
  if (params.justifyContentEndXl) css.push(justifyContentEndXlCSS);
  if (params.justifyContentAroundXl) css.push(justifyContentAroundXlCSS);
  if (params.justifyContentBetweenXl) css.push(justifyContentBetweenXlCSS);

  return css;
};

export default UtilityResolver;
