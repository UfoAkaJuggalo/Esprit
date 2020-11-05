import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const backgroundPrimaryCSS = css`
  background-color: ${GetColor({ primary: true })}!important;
`;
export const backgroundPrimaryDCSS = css`
  background-color: ${GetColor({ Dprimary: true })}!important;
`;
export const backgroundPrimaryLCSS = css`
  background-color: ${GetColor({ Lprimary: true })}!important;
`;
export const backgroundAccentCSS = css`
  background-color: ${GetColor({ accent: true })}!important;
`;
export const backgroundSuccessCSS = css`
  background-color: ${GetColor({ success: true })}!important;
`;
export const backgroundSuccessLCSS = css`
  background-color: ${GetColor({ successL: true })}!important;
`;
export const backgroundDangerCSS = css`
  background-color: ${GetColor({ danger: true })}!important;
`;
export const backgroundDangerLCSS = css`
  background-color: ${GetColor({ dangerL: true })}!important;
`;
export const backgroundInfoCSS = css`
  background-color: ${GetColor({ info: true })}!important;
`;
export const backgroundInfoLCSS = css`
  background-color: ${GetColor({ infoL: true })}!important;
`;
export const backgroundWarningCSS = css`
  background-color: ${GetColor({ warning: true })}!important;
`;
export const backgroundWarningLCSS = css`
  background-color: ${GetColor({ warningL: true })}!important;
`;
export const backgroundDisabledCSS = css`
  background-color: ${GetColor({ Lgray: true })}!important;
`;
export const backgroundDisabledDCSS = css`
  background-color: ${GetColor({ Dgray: true })}!important;
`;
export const backgroundTransparentCSS = css`
  background-color: transparent !important;
`;
