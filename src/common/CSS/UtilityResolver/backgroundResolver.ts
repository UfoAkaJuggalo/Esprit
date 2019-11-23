import { ArrayInterpolation } from "@emotion/core";
import {
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
} from "..";

export interface BackgroundProps {
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

const BackgroundResolver = (
  params: BackgroundProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

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

  return css;
};

export default BackgroundResolver;
