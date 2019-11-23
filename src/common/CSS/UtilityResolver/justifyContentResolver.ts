import { ArrayInterpolation } from "@emotion/core";
import {
  justifyContentStartCSS,
  justifyContentCenterCSS,
  justifyContentEndCSS,
  justifyContentAroundCSS,
  justifyContentBetweenCSS,
  justifyContentStartSmCSS,
  justifyContentCenterSmCSS,
  justifyContentEndSmCSS,
  justifyContentAroundSmCSS,
  justifyContentBetweenSmCSS,
  justifyContentStartMdCSS,
  justifyContentCenterMdCSS,
  justifyContentEndMdCSS,
  justifyContentAroundMdCSS,
  justifyContentBetweenMdCSS,
  justifyContentStartLgCSS,
  justifyContentCenterLgCSS,
  justifyContentEndLgCSS,
  justifyContentAroundLgCSS,
  justifyContentBetweenLgCSS,
  justifyContentStartXlCSS,
  justifyContentCenterXlCSS,
  justifyContentEndXlCSS,
  justifyContentAroundXlCSS,
  justifyContentBetweenXlCSS
} from "..";

export interface JustifyContentProps {
  justifyContentStart?: boolean;
  justifyContentCenter?: boolean;
  justifyContentEnd?: boolean;
  justifyContentAround?: boolean;
  justifyContentBetween?: boolean;
  justifyContentStartSm?: boolean;
  justifyContentCenterSm?: boolean;
  justifyContentEndSm?: boolean;
  justifyContentAroundSm?: boolean;
  justifyContentBetweenSm?: boolean;
  justifyContentStartMd?: boolean;
  justifyContentCenterMd?: boolean;
  justifyContentEndMd?: boolean;
  justifyContentAroundMd?: boolean;
  justifyContentBetweenMd?: boolean;
  justifyContentStartLg?: boolean;
  justifyContentCenterLg?: boolean;
  justifyContentEndLg?: boolean;
  justifyContentAroundLg?: boolean;
  justifyContentBetweenLg?: boolean;
  justifyContentStartXl?: boolean;
  justifyContentCenterXl?: boolean;
  justifyContentEndXl?: boolean;
  justifyContentAroundXl?: boolean;
  justifyContentBetweenXl?: boolean;
}

const JustifyContentResolver = (
  params: JustifyContentProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.justifyContentStart) css.push(justifyContentStartCSS);
  if (params.justifyContentCenter) css.push(justifyContentCenterCSS);
  if (params.justifyContentEnd) css.push(justifyContentEndCSS);
  if (params.justifyContentAround) css.push(justifyContentAroundCSS);
  if (params.justifyContentBetween) css.push(justifyContentBetweenCSS);

  if (params.justifyContentStartSm) css.push(justifyContentStartSmCSS);
  if (params.justifyContentCenterSm) css.push(justifyContentCenterSmCSS);
  if (params.justifyContentEndSm) css.push(justifyContentEndSmCSS);
  if (params.justifyContentAroundSm) css.push(justifyContentAroundSmCSS);
  if (params.justifyContentBetweenSm) css.push(justifyContentBetweenSmCSS);

  if (params.justifyContentStartMd) css.push(justifyContentStartMdCSS);
  if (params.justifyContentCenterMd) css.push(justifyContentCenterMdCSS);
  if (params.justifyContentEndMd) css.push(justifyContentEndMdCSS);
  if (params.justifyContentAroundMd) css.push(justifyContentAroundMdCSS);
  if (params.justifyContentBetweenMd) css.push(justifyContentBetweenMdCSS);

  if (params.justifyContentStartLg) css.push(justifyContentStartLgCSS);
  if (params.justifyContentCenterLg) css.push(justifyContentCenterLgCSS);
  if (params.justifyContentEndLg) css.push(justifyContentEndLgCSS);
  if (params.justifyContentAroundLg) css.push(justifyContentAroundLgCSS);
  if (params.justifyContentBetweenLg) css.push(justifyContentBetweenLgCSS);

  if (params.justifyContentStartXl) css.push(justifyContentStartXlCSS);
  if (params.justifyContentCenterXl) css.push(justifyContentCenterXlCSS);
  if (params.justifyContentEndXl) css.push(justifyContentEndXlCSS);
  if (params.justifyContentAroundXl) css.push(justifyContentAroundXlCSS);
  if (params.justifyContentBetweenXl) css.push(justifyContentBetweenXlCSS);

  return css;
};

export default JustifyContentResolver;
