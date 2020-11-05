import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const borderCSS = css`
  border: 1px solid ${GetColor({ primary: true })};
`;

export const borderTopCSS = css`
  border-top: 1px solid ${GetColor({ primary: true })};
`;

export const borderRightCSS = css`
  border-right: 1px solid ${GetColor({ primary: true })};
`;

export const borderLeftCSS = css`
  border-left: 1px solid ${GetColor({ primary: true })};
`;

export const borderBottomCSS = css`
  border-bottom: 1px solid ${GetColor({ primary: true })};
`;

export const border0CSS = css`
  border: 0 !important;
`;

export const borderTop0CSS = css`
  border-top: 0 !important;
`;

export const borderRight0CSS = css`
  border-right: 0 !important;
`;

export const borderLeft0CSS = css`
  border-left: 0 !important;
`;

export const borderBottom0CSS = css`
  border-bottom: 0 !important;
`;

export const borderDCSS = css`
  border-color ${GetColor({ Dprimary: true })}!important;
`;
export const borderLCSS = css`
  border-color ${GetColor({ Lprimary: true })}!important;
`;
export const borderAccentCSS = css`
  border-color ${GetColor({ accent: true })}!important;
`;
export const borderSuccessCSS = css`
  border-color ${GetColor({ success: true })}!important;
`;
export const borderSuccessLCSS = css`
  border-color ${GetColor({ successL: true })}!important;
`;
export const borderDangerCSS = css`
  border-color ${GetColor({ danger: true })}!important;
`;
export const borderDangerLCSS = css`
  border-color ${GetColor({ dangerL: true })}!important;
`;
export const borderInfoCSS = css`
  border-color ${GetColor({ info: true })}!important;
`;
export const borderInfoLCSS = css`
  border-color ${GetColor({ infoL: true })}!important;
`;
export const borderWarningCSS = css`
  border-color ${GetColor({ warning: true })}!important;
`;
export const borderWarningLCSS = css`
  border-color ${GetColor({ warningL: true })}!important;
`;
export const borderDisabledCSS = css`
  border-color ${GetColor({ Lgray: true })}!important;
`;
export const borderDisabledDCSS = css`
  border-color ${GetColor({ Dgray: true })}!important;
`;
export const brdRoundedCSS = css`
  border-radius: 0.25rem;
`;

export const brdRoundedTopCSS = css`
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
`;

export const brdRoundedTop2xCSS = css`
  border-top-left-radius: 0.5rem !important;
  border-top-right-radius: 0.5rem !important;
`;

export const brdRoundedRightCSS = css`
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
`;

export const brdRoundedRight2xCSS = css`
  border-top-right-radius: 0.5rem !important;
  border-bottom-right-radius: 0.5rem !important;
`;

export const brdRoundedBottomCSS = css`
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
`;

export const brdRoundedBottom2xCSS = css`
  border-bottom-right-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
`;
export const brdRoundedLeftCSS = css`
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
`;

export const brdRoundedLeft2xCSS = css`
  border-top-left-radius: 0.5rem !important;
  border-bottom-left-radius: 0.5rem !important;
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
