import { ArrayInterpolation } from "@emotion/core";
import {
  positionAbsCSS,
  positionFixCSS,
  positionRelativeCSS,
  positionStatCSS,
  positionStickyCSS,
  positionFixTopCSS,
  positionFixBottomCSS,
  positionStickyTopCSS
} from "..";

export interface PositionProps {
  positionAbs?: boolean;
  positionFix?: boolean;
  positionRelative?: boolean;
  positionStat?: boolean;
  positionSticky?: boolean;
  positionFixTop?: boolean;
  positionFixBottom?: boolean;
  positionStickyTop?: boolean;
}

const PositionResolver = (
  params: PositionProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.positionAbs) css.push(positionAbsCSS);
  if (params.positionFix) css.push(positionFixCSS);
  if (params.positionRelative) css.push(positionRelativeCSS);
  if (params.positionStat) css.push(positionStatCSS);
  if (params.positionSticky) css.push(positionStickyCSS);
  if (params.positionFixTop) css.push(positionFixTopCSS);
  if (params.positionFixBottom) css.push(positionFixBottomCSS);
  if (params.positionStickyTop) css.push(positionStickyTopCSS);

  return css;
};

export default PositionResolver;
