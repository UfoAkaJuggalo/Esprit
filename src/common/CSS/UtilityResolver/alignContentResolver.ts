import { ArrayInterpolation } from "@emotion/core";
import {
  alignContentStartCSS,
  alignContentStartSmCSS,
  alignContentStartMdCSS,
  alignContentStartLgCSS,
  alignContentStartXlCSS,
  alignContentAroundCSS,
  alignContentAroundSmCSS,
  alignContentAroundMdCSS,
  alignContentAroundLgCSS,
  alignContentAroundXlCSS,
  alignContentBetweenCSS,
  alignContentBetweenSmCSS,
  alignContentBetweenMdCSS,
  alignContentBetweenLgCSS,
  alignContentBetweenXlCSS,
  alignContentCenterCSS,
  alignContentCenterSmCSS,
  alignContentCenterMdCSS,
  alignContentCenterLgCSS,
  alignContentCenterXlCSS,
  alignContentEndCSS,
  alignContentEndSmCSS,
  alignContentEndMdCSS,
  alignContentEndLgCSS,
  alignContentEndXlCSS,
  alignContentStretchCSS,
  alignContentStretchSmCSS,
  alignContentStretchMdCSS,
  alignContentStretchLgCSS,
  alignContentStretchXlCSS
} from "..";

export interface alignContentProps {
  alignContentStart?: boolean;
  alignContentStartSm?: boolean;
  alignContentStartMd?: boolean;
  alignContentStartLg?: boolean;
  alignContentStartXl?: boolean;
  alignContentAround?: boolean;
  alignContentAroundSm?: boolean;
  alignContentAroundMd?: boolean;
  alignContentAroundLg?: boolean;
  alignContentAroundXl?: boolean;
  alignContentBetween?: boolean;
  alignContentBetweenSm?: boolean;
  alignContentBetweenMd?: boolean;
  alignContentBetweenLg?: boolean;
  alignContentBetweenXl?: boolean;
  alignContentCenter?: boolean;
  alignContentCenterSm?: boolean;
  alignContentCenterMd?: boolean;
  alignContentCenterLg?: boolean;
  alignContentCenterXl?: boolean;
  alignContentEnd?: boolean;
  alignContentEndSm?: boolean;
  alignContentEndMd?: boolean;
  alignContentEndLg?: boolean;
  alignContentEndXl?: boolean;
  alignContentStretch?: boolean;
  alignContentStretchSm?: boolean;
  alignContentStretchMd?: boolean;
  alignContentStretchLg?: boolean;
  alignContentStretchXl?: boolean;
}

const alignContentResolver = (
  params: alignContentProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignContentStart) css.push(alignContentStartCSS);
  if (params.alignContentStartSm) css.push(alignContentStartSmCSS);
  if (params.alignContentStartMd) css.push(alignContentStartMdCSS);
  if (params.alignContentStartLg) css.push(alignContentStartLgCSS);
  if (params.alignContentStartXl) css.push(alignContentStartXlCSS);

  if (params.alignContentAround) css.push(alignContentAroundCSS);
  if (params.alignContentAroundSm) css.push(alignContentAroundSmCSS);
  if (params.alignContentAroundMd) css.push(alignContentAroundMdCSS);
  if (params.alignContentAroundLg) css.push(alignContentAroundLgCSS);
  if (params.alignContentAroundXl) css.push(alignContentAroundXlCSS);

  if (params.alignContentBetween) css.push(alignContentBetweenCSS);
  if (params.alignContentBetweenSm) css.push(alignContentBetweenSmCSS);
  if (params.alignContentBetweenMd) css.push(alignContentBetweenMdCSS);
  if (params.alignContentBetweenLg) css.push(alignContentBetweenLgCSS);
  if (params.alignContentBetweenXl) css.push(alignContentBetweenXlCSS);

  if (params.alignContentCenter) css.push(alignContentCenterCSS);
  if (params.alignContentCenterSm) css.push(alignContentCenterSmCSS);
  if (params.alignContentCenterMd) css.push(alignContentCenterMdCSS);
  if (params.alignContentCenterLg) css.push(alignContentCenterLgCSS);
  if (params.alignContentCenterXl) css.push(alignContentCenterXlCSS);

  if (params.alignContentEnd) css.push(alignContentEndCSS);
  if (params.alignContentEndSm) css.push(alignContentEndSmCSS);
  if (params.alignContentEndMd) css.push(alignContentEndMdCSS);
  if (params.alignContentEndLg) css.push(alignContentEndLgCSS);
  if (params.alignContentEndXl) css.push(alignContentEndXlCSS);

  if (params.alignContentStretch) css.push(alignContentStretchCSS);
  if (params.alignContentStretchSm) css.push(alignContentStretchSmCSS);
  if (params.alignContentStretchMd) css.push(alignContentStretchMdCSS);
  if (params.alignContentStretchLg) css.push(alignContentStretchLgCSS);
  if (params.alignContentStretchXl) css.push(alignContentStretchXlCSS);

  return css;
};

export default alignContentResolver;
