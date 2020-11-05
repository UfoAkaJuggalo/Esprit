import { css, SerializedStyles } from "@emotion/core";
import GetColor from "../../colors/GetColor";
import GetProperty from "../../config/GetProperty";
import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const txtTruncateCSS = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const txtLowerCSS = css`
  text-transform: lowercase !important;
`;

export const txtUpperCSS = css`
  text-transform: uppercase !important;
`;

export const txtCapitalCSS = css`
  text-transform: capitalize !important;
`;
export const txtMonoCSS = css`
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
`;
export const txtBoldCSS = css`
  font-weight: ${GetProperty({ fontWeight: "bold" })} !important;
`;
export const txtNormalCSS = css`
  font-weight: ${GetProperty({ fontWeight: "normal" })} !important;
`;
export const txtLightCSS = css`
  font-weight: ${GetProperty({ fontWeight: "light" })} !important;
`;
export const txtItalicCSS = css`
  ont-style: italic !important;
`;
export const txtPrimaryCSS = css`
  color: ${GetColor({ primary: true })}!important;
`;
export const txtPrimaryDCSS = css`
  color: ${GetColor({ Dprimary: true })}!important;
`;
export const txtPrimaryLCSS = css`
  color: ${GetColor({ Lprimary: true })}!important;
`;
export const txtAccentCSS = css`
  color: ${GetColor({ accent: true })}!important;
`;
export const txtSuccessCSS = css`
  color: ${GetColor({ success: true })}!important;
`;
export const txtSuccessLCSS = css`
  color: ${GetColor({ successL: true })}!important;
`;
export const txtDangerCSS = css`
  color: ${GetColor({ danger: true })}!important;
`;
export const txtDangerLCSS = css`
  color: ${GetColor({ dangerL: true })}!important;
`;
export const txtInfoCSS = css`
  color: ${GetColor({ info: true })}!important;
`;
export const txtInfoLCSS = css`
  color: ${GetColor({ infoL: true })}!important;
`;
export const txtWarningCSS = css`
  color: ${GetColor({ warning: true })}!important;
`;
export const txtWarningLCSS = css`
  color: ${GetColor({ warningL: true })}!important;
`;
export const txtDisabledCSS = css`
  color: ${GetColor({ Lgray: true })}!important;
`;
export const txtDisabledDCSS = css`
  color: ${GetColor({ Dgray: true })}!important;
`;
export const txtNoWrapCSS = css`
  white-space: nowrap !important;
`;
export const txtLeftCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: left;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const txtCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: center;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const txtRightCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: right;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};
