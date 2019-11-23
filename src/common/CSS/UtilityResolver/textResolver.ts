import { ArrayInterpolation } from "@emotion/core";
import {
  txtPrimaryCSS,
  txtPrimaryDCSS,
  txtPrimaryLCSS,
  txtAccentCSS,
  txtSuccessCSS,
  txtSuccessLCSS,
  txtDangerCSS,
  txtDangerLCSS,
  txtInfoCSS,
  txtInfoLCSS,
  txtWarningCSS,
  txtWarningLCSS,
  txtDisabledCSS,
  txtDisabledDCSS
} from "..";

export interface TextProps {
  txtPrimary?: boolean;
  txtPrimaryD?: boolean;
  txtPrimaryL?: boolean;
  txtAccent?: boolean;
  txtSuccess?: boolean;
  txtSuccessL?: boolean;
  txtDanger?: boolean;
  txtDangerL?: boolean;
  txtInfo?: boolean;
  txtInfoL?: boolean;
  txtWarning?: boolean;
  txtWarningL?: boolean;
  txtDisabled?: boolean;
  txtDisabledD?: boolean;
}

const TextResolver = (params: TextProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.txtPrimary) css.push(txtPrimaryCSS);
  if (params.txtPrimaryD) css.push(txtPrimaryDCSS);
  if (params.txtPrimaryL) css.push(txtPrimaryLCSS);
  if (params.txtAccent) css.push(txtAccentCSS);
  if (params.txtSuccess) css.push(txtSuccessCSS);
  if (params.txtSuccessL) css.push(txtSuccessLCSS);
  if (params.txtDanger) css.push(txtDangerCSS);
  if (params.txtDangerL) css.push(txtDangerLCSS);
  if (params.txtInfo) css.push(txtInfoCSS);
  if (params.txtInfoL) css.push(txtInfoLCSS);
  if (params.txtWarning) css.push(txtWarningCSS);
  if (params.txtWarningL) css.push(txtWarningLCSS);
  if (params.txtDisabled) css.push(txtDisabledCSS);
  if (params.txtDisabledD) css.push(txtDisabledDCSS);

  return css;
};

export default TextResolver;
