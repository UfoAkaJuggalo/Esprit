import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const txtUpperCSS = css`
  text-transform: uppercase;
`;

export const txtCapitalCSS = css`
  text-transform: capitalize;
`;

export const txtLeftCSS = css`
  text-align: left;
`;

export const txtCenterCSS = css`
  text-align: center;
`;

export const txtRightCSS = css`
  text-align: right;
`;

export const txtPrimaryCSS = css`
  color: ${GetColor({ primary: true })};
`;
export const txtPrimaryDCSS = css`
  color: ${GetColor({ Dprimary: true })};
`;
export const txtPrimaryLCSS = css`
  color: ${GetColor({ Lprimary: true })};
`;
export const txtAccentCSS = css`
  color: ${GetColor({ accent: true })};
`;
export const txtSuccessCSS = css`
  color: ${GetColor({ success: true })};
`;
export const txtSuccessLCSS = css`
  color: ${GetColor({ successL: true })};
`;
export const txtDangerCSS = css`
  color: ${GetColor({ danger: true })};
`;
export const txtDangerLCSS = css`
  color: ${GetColor({ dangerL: true })};
`;
export const txtInfoCSS = css`
  color: ${GetColor({ info: true })};
`;
export const txtInfoLCSS = css`
  color: ${GetColor({ infoL: true })};
`;
export const txtWarningCSS = css`
  color: ${GetColor({ warning: true })};
`;
export const txtWarningLCSS = css`
  color: ${GetColor({ warningL: true })};
`;
export const txtDisabledCSS = css`
  color: ${GetColor({ Lgray: true })};
`;
export const txtDisabledDCSS = css`
  color: ${GetColor({ Dgray: true })};
`;
