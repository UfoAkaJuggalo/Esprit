import { ArrayInterpolation } from "@emotion/core";
import {
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
} from "..";

export interface BorderProps {
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
}

const BorderResolver = (params: BorderProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

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

export default BorderResolver;
