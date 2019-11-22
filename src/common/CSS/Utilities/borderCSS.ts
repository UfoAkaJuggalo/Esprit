import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const borderCSS = css`
  border: 1px solid ${GetColor({ primary: true })};
`;
export const borderDCSS = css`
  border: 1px solid ${GetColor({ Dprimary: true })};
`;
export const borderLCSS = css`
  border: 1px solid ${GetColor({ Lprimary: true })};
`;
export const borderAccentCSS = css`
  border: 1px solid ${GetColor({ accent: true })};
`;
export const borderSuccessCSS = css`
  border: 1px solid ${GetColor({ success: true })};
`;
export const borderSuccessLCSS = css`
  border: 1px solid ${GetColor({ successL: true })};
`;
export const borderDangerCSS = css`
  border: 1px solid ${GetColor({ danger: true })};
`;
export const borderDangerLCSS = css`
  border: 1px solid ${GetColor({ dangerL: true })};
`;
export const borderInfoCSS = css`
  border: 1px solid ${GetColor({ info: true })};
`;
export const borderInfoLCSS = css`
  border: 1px solid ${GetColor({ infoL: true })};
`;
export const borderWarningCSS = css`
  border: 1px solid ${GetColor({ warning: true })};
`;
export const borderWarningLCSS = css`
  border: 1px solid ${GetColor({ warningL: true })};
`;
export const borderDisabledCSS = css`
  border: 1px solid ${GetColor({ Lgray: true })};
`;
export const borderDisabledDCSS = css`
  border: 1px solid ${GetColor({ Dgray: true })};
`;
export const brdRoundedCSS = css`
  border-radius: 0.25rem;
`;
export const brdRounded2xCSS = css`
  border-radius: 0.5rem;
`;
export const brdRounded0CSS = css`
  border-radius: 0;
`;
export const brdCircleCSS = css`
  border-radius: 50%;
`;
export const brdPillCSS = css`
  border-radius: 50rem;
`;
export const brdNoneCSS = css`
  border: none;
`;
