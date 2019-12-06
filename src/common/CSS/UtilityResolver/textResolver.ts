import { ArrayInterpolation } from "@emotion/core";
import {
  txtNoWrapCSS,
  txtTruncateCSS,
  txtLowerCSS,
  txtUpperCSS,
  txtCapitalCSS,
  txtMonoCSS,
  txtBoldCSS,
  txtNormalCSS,
  txtLightCSS,
  txtItalicCSS,
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
  txtDisabledDCSS,
  txtLeftCSS,
  txtCenterCSS,
  txtRightCSS
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
  textLeft?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  textLeftSm?: boolean;
  textCenterSm?: boolean;
  textRightSm?: boolean;
  textLeftMd?: boolean;
  textCenterMd?: boolean;
  textRightMd?: boolean;
  textLeftLg?: boolean;
  textCenterLg?: boolean;
  textRightLg?: boolean;
  textLeftXl?: boolean;
  textCenterXl?: boolean;
  textRightXl?: boolean;
  textNoWrap?: boolean;
  txtTruncate?: boolean;
  txtLower?: boolean;
  txtUpper?: boolean;
  txtCapital?: boolean;
  txtMono?: boolean;
  txtBold?: boolean;
  txtNormal?: boolean;
  txtLight?: boolean;
  txtItalic?: boolean;
}

const TextResolver = (params: TextProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.textNoWrap) css.push(txtNoWrapCSS);
  if (params.txtTruncate) css.push(txtTruncateCSS);
  if (params.txtLower) css.push(txtLowerCSS);
  if (params.txtUpper) css.push(txtUpperCSS);
  if (params.txtCapital) css.push(txtCapitalCSS);
  if (params.txtMono) css.push(txtMonoCSS);
  if (params.txtBold) css.push(txtBoldCSS);
  if (params.txtNormal) css.push(txtNormalCSS);
  if (params.txtLight) css.push(txtLightCSS);
  if (params.txtItalic) css.push(txtItalicCSS);

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

  if (params.textLeft) css.push(txtLeftCSS({}));
  if (params.textLeftSm) css.push(txtLeftCSS({ mediaQuery: "xs" }));
  if (params.textLeftMd) css.push(txtLeftCSS({ mediaQuery: "sm" }));
  if (params.textLeftLg) css.push(txtLeftCSS({ mediaQuery: "md" }));
  if (params.textLeftXl) css.push(txtLeftCSS({ mediaQuery: "lg" }));

  if (params.textCenter) css.push(txtCenterCSS({}));
  if (params.textCenterSm) css.push(txtCenterCSS({ mediaQuery: "xs" }));
  if (params.textCenterMd) css.push(txtCenterCSS({ mediaQuery: "sm" }));
  if (params.textCenterLg) css.push(txtCenterCSS({ mediaQuery: "md" }));
  if (params.textCenterXl) css.push(txtCenterCSS({ mediaQuery: "lg" }));

  if (params.textRight) css.push(txtRightCSS({}));
  if (params.textRightSm) css.push(txtRightCSS({ mediaQuery: "xs" }));
  if (params.textRightMd) css.push(txtRightCSS({ mediaQuery: "sm" }));
  if (params.textRightLg) css.push(txtRightCSS({ mediaQuery: "md" }));
  if (params.textRightXl) css.push(txtRightCSS({ mediaQuery: "lg" }));

  return css;
};

export default TextResolver;
