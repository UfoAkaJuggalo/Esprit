import { css, SerializedStyles } from "@emotion/core";
import GetColor from "../../colors/GetColor";
import GetProperty from "../../config/GetProperty";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const txtUpperCSS = css`
  text-transform: uppercase;
`;

export const txtCapitalCSS = css`
  text-transform: capitalize;
`;

// export const txtLeftCSS = css`
//   text-align: left;
// `;

// export const txtCenterCSS = css`
//   text-align: center;
// `;

// export const txtRightCSS = css`
//   text-align: right;
// `;

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

export const txtLeftCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: left;
  `;

  switch (params.mediaQuery) {
    case "xs":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
          ${retCSS};
        }
      `;
    case "sm":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
          ${retCSS};
        }
      `;
    case "md":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
          ${retCSS};
        }
      `;
    case "lg":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
          ${retCSS};
        }
      `;
    default:
      return retCSS;
  }
};

export const txtCenterCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: center;
  `;

  switch (params.mediaQuery) {
    case "xs":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
          ${retCSS};
        }
      `;
    case "sm":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
          ${retCSS};
        }
      `;
    case "md":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
          ${retCSS};
        }
      `;
    case "lg":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
          ${retCSS};
        }
      `;
    default:
      return retCSS;
  }
};

export const txtRightCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    text-align: right;
  `;

  switch (params.mediaQuery) {
    case "xs":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "xs" })}) {
          ${retCSS};
        }
      `;
    case "sm":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "sm" })}) {
          ${retCSS};
        }
      `;
    case "md":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "md" })}) {
          ${retCSS};
        }
      `;
    case "lg":
      return css`
        @media (min-width: ${GetProperty({ mediaQuery: "lg" })}) {
          ${retCSS};
        }
      `;
    default:
      return retCSS;
  }
};
