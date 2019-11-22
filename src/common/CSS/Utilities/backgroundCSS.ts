import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const backgroundPrimaryCSS = css`
  background: ${GetColor({ primary: true })};
`;
export const backgroundPrimaryDCSS = css`
  background: ${GetColor({ Dprimary: true })};
`;
export const backgroundPrimaryLCSS = css`
  background: ${GetColor({ Lprimary: true })};
`;
export const backgroundAccentCSS = css`
  background: ${GetColor({ accent: true })};
`;
export const backgroundSuccessCSS = css`
  background: ${GetColor({ success: true })};
`;
export const backgroundSuccessLCSS = css`
  background: ${GetColor({ successL: true })};
`;
export const backgroundDangerCSS = css`
  background: ${GetColor({ danger: true })};
`;
export const backgroundDangerLCSS = css`
  background: ${GetColor({ dangerL: true })};
`;
export const backgroundInfoCSS = css`
  background: ${GetColor({ info: true })};
`;
export const backgroundInfoLCSS = css`
  background: ${GetColor({ infoL: true })};
`;
export const backgroundWarningCSS = css`
  background: ${GetColor({ warning: true })};
`;
export const backgroundWarningLCSS = css`
  background: ${GetColor({ warningL: true })};
`;
export const backgroundDisabledCSS = css`
  background: ${GetColor({ Lgray: true })};
`;
export const backgroundDisabledDCSS = css`
  background: ${GetColor({ Dgray: true })};
`;
