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
  justifyContentBetweenXlCSS,
  borderCSS,
  borderTopCSS,
  borderRightCSS,
  borderLeftCSS,
  borderBottomCSS,
  border0CSS,
  borderTop0CSS,
  borderRight0CSS,
  borderLeft0CSS,
  borderBottom0CSS,
  borderDCSS,
  borderLCSS,
  borderAccentCSS,
  borderSuccessCSS,
  borderSuccessLCSS,
  borderDangerCSS,
  borderDangerLCSS,
  borderInfoCSS,
  borderInfoLCSS,
  borderWarningCSS,
  borderWarningLCSS,
  borderDisabledCSS,
  borderDisabledDCSS,
  brdRoundedCSS,
  brdRoundedTopCSS,
  brdRoundedTop2xCSS,
  brdRoundedRightCSS,
  brdRoundedRight2xCSS,
  brdRoundedBottomCSS,
  brdRoundedBottom2xCSS,
  brdRoundedLeftCSS,
  brdRoundedLeft2xCSS,
  brdRounded2xCSS,
  brdRounded0CSS,
  brdCircleCSS,
  brdPillCSS,
  brdNoneCSS
} from ".";
import {
  clearfixCSS,
  backgroundPrimaryCSS,
  backgroundPrimaryDCSS,
  backgroundPrimaryLCSS,
  backgroundAccentCSS,
  backgroundSuccessCSS,
  backgroundSuccessLCSS,
  backgroundDangerCSS,
  backgroundDangerLCSS,
  backgroundInfoCSS,
  backgroundInfoLCSS,
  backgroundWarningCSS,
  backgroundWarningLCSS,
  backgroundDisabledCSS,
  backgroundDisabledDCSS,
  backgroundTransparentCSS
} from ".";

export interface UtilityProps {
  clearfix?: boolean;
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
  border?: boolean;
  borderTop?: boolean;
  borderRight?: boolean;
  borderLeft?: boolean;
  borderBottom?: boolean;
  border0?: boolean;
  borderTop0?: boolean;
  borderRight0?: boolean;
  borderLeft0?: boolean;
  borderBottom0?: boolean;
  borderD?: boolean;
  borderL?: boolean;
  borderAccent?: boolean;
  borderSuccess?: boolean;
  borderSuccessL?: boolean;
  borderDanger?: boolean;
  borderDangerL?: boolean;
  borderInfo?: boolean;
  borderInfoL?: boolean;
  borderWarning?: boolean;
  borderWarningL?: boolean;
  borderDisabled?: boolean;
  borderDisabledD?: boolean;
  brdRounded?: boolean;
  brdRoundedTop?: boolean;
  brdRoundedTop2x?: boolean;
  brdRoundedRight?: boolean;
  brdRoundedRight2x?: boolean;
  brdRoundedBottom?: boolean;
  brdRoundedBottom2x?: boolean;
  brdRoundedLeft?: boolean;
  brdRoundedLeft2x?: boolean;
  brdRounded2x?: boolean;
  brdRounded0?: boolean;
  brdCircle?: boolean;
  brdPill?: boolean;
  brdNone?: boolean;
  BgPrimary?: boolean;
  BgPrimaryD?: boolean;
  BgPrimaryL?: boolean;
  BgAccent?: boolean;
  BgSuccess?: boolean;
  BgSuccessL?: boolean;
  BgDanger?: boolean;
  BgDangerL?: boolean;
  BgInfo?: boolean;
  BgInfoL?: boolean;
  BgWarning?: boolean;
  BgWarningL?: boolean;
  BgDisabled?: boolean;
  BgDisabledD?: boolean;
  BgTransparent?: boolean;
}

const UtilityResolver = (
  params: UtilityProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.clearfix) css.push(clearfixCSS);

  if (params.BgPrimary) css.push(backgroundPrimaryCSS);
  if (params.BgPrimaryD) css.push(backgroundPrimaryDCSS);
  if (params.BgPrimaryL) css.push(backgroundPrimaryLCSS);
  if (params.BgAccent) css.push(backgroundAccentCSS);
  if (params.BgSuccess) css.push(backgroundSuccessCSS);
  if (params.BgSuccessL) css.push(backgroundSuccessLCSS);
  if (params.BgDanger) css.push(backgroundDangerCSS);
  if (params.BgDangerL) css.push(backgroundDangerLCSS);
  if (params.BgInfo) css.push(backgroundInfoCSS);
  if (params.BgInfoL) css.push(backgroundInfoLCSS);
  if (params.BgWarning) css.push(backgroundWarningCSS);
  if (params.BgWarningL) css.push(backgroundWarningLCSS);
  if (params.BgDisabled) css.push(backgroundDisabledCSS);
  if (params.BgDisabledD) css.push(backgroundDisabledDCSS);
  if (params.BgTransparent) css.push(backgroundTransparentCSS);

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

  if (params.border) css.push(borderCSS);
  if (params.borderTop) css.push(borderTopCSS);
  if (params.borderRight) css.push(borderRightCSS);
  if (params.borderLeft) css.push(borderLeftCSS);
  if (params.borderBottom) css.push(borderBottomCSS);
  if (params.border0) css.push(border0CSS);
  if (params.borderTop0) css.push(borderTop0CSS);
  if (params.borderRight0) css.push(borderRight0CSS);
  if (params.borderLeft0) css.push(borderLeft0CSS);
  if (params.borderBottom0) css.push(borderBottom0CSS);

  if (params.borderD) css.push(borderDCSS);
  if (params.borderL) css.push(borderLCSS);
  if (params.borderAccent) css.push(borderAccentCSS);
  if (params.borderSuccess) css.push(borderSuccessCSS);
  if (params.borderSuccessL) css.push(borderSuccessLCSS);
  if (params.borderDanger) css.push(borderDangerCSS);
  if (params.borderDangerL) css.push(borderDangerLCSS);
  if (params.borderInfo) css.push(borderInfoCSS);
  if (params.borderInfoL) css.push(borderInfoLCSS);
  if (params.borderWarning) css.push(borderWarningCSS);
  if (params.borderWarningL) css.push(borderWarningLCSS);
  if (params.borderDisabled) css.push(borderDisabledCSS);
  if (params.borderDisabledD) css.push(borderDisabledDCSS);

  if (params.brdRounded) css.push(brdRoundedCSS);
  if (params.brdRoundedTop) css.push(brdRoundedTopCSS);
  if (params.brdRoundedTop2x) css.push(brdRoundedTop2xCSS);
  if (params.brdRoundedRight) css.push(brdRoundedRightCSS);
  if (params.brdRoundedRight2x) css.push(brdRoundedRight2xCSS);
  if (params.brdRoundedBottom) css.push(brdRoundedBottomCSS);
  if (params.brdRoundedBottom2x) css.push(brdRoundedBottom2xCSS);
  if (params.brdRoundedLeft) css.push(brdRoundedLeftCSS);
  if (params.brdRoundedLeft2x) css.push(brdRoundedLeft2xCSS);
  if (params.brdRounded2x) css.push(brdRounded2xCSS);
  if (params.brdRounded0) css.push(brdRounded0CSS);

  if (params.brdCircle) css.push(brdCircleCSS);
  if (params.brdPill) css.push(brdPillCSS);
  if (params.brdNone) css.push(brdNoneCSS);

  return css;
};

export default UtilityResolver;
