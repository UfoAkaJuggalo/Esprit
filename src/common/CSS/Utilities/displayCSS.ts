import { css, SerializedStyles } from "@emotion/core";
import GetProperty from "../../config/GetProperty";

export interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const dNoneCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: none !important;
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

export const dInlineCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline !important;
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

export const dInlineBlockCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline-block !important;
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

export const dInlineFlexCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline-flex !important;
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

export const dBlockCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: block !important;
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

export const dTableCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table !important;
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

export const dTableCellCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table-cell !important;
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

export const dTableRowCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table-row !important;
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

export const dFlexCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: flex !important;
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

export const dNonePrintCSS = css`
  @media print {
    display: none !important;
  }
`;
export const dInlinePrintCSS = css`
  @media print {
    display: inline !important;
  }
`;
export const dInlineBlockPrintCSS = css`
  @media print {
    display: inline-block !important;
  }
`;
export const dInlineFlexPrintCSS = css`
  @media print {
    display: inline-flex !important;
  }
`;
export const dBlockPrintCSS = css`
  @media print {
    display: block !important;
  }
`;
export const dTablePrintCSS = css`
  @media print {
    display: table !important;
  }
`;
export const dTableCellPrintCSS = css`
  @media print {
    display: table-cell !important;
  }
`;
export const dTableRowPrintCSS = css`
  @media print {
    display: table-row !important;
  }
`;
export const dFlexPrintCSS = css`
  @media print {
    display: flex !important;
  }
`;
