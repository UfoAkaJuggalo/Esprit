import { ArrayInterpolation } from "@emotion/core";
import {
  AlignBaselineCSS,
  AlignTopCSS,
  AlignMiddleCSS,
  AlignBottomCSS,
  AlignTxtBottomCSS,
  AlignTxtTopCSS
} from "..";

export interface AlignVerticalProps {
  AlignBaseline?: boolean;
  AlignTop?: boolean;
  AlignMiddle?: boolean;
  AlignBottom?: boolean;
  AlignTxtBottom?: boolean;
  AlignTxtTop?: boolean;
}

const AlignVerticalResolver = (
  params: AlignVerticalProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.AlignBaseline) css.push(AlignBaselineCSS);
  if (params.AlignTop) css.push(AlignTopCSS);
  if (params.AlignMiddle) css.push(AlignMiddleCSS);
  if (params.AlignBottom) css.push(AlignBottomCSS);
  if (params.AlignTxtBottom) css.push(AlignTxtBottomCSS);
  if (params.AlignTxtTop) css.push(AlignTxtTopCSS);

  return css;
};

export default AlignVerticalResolver;
