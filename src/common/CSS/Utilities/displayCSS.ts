import { css, SerializedStyles } from "@emotion/core";

import { MediaQueryWraper } from "./mediaQueryWraper";

interface Props {
  mediaQuery?: keyof MediaQuery;
}

export const dNoneCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: none !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dInlineCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dInlineBlockCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline-block !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dInlineFlexCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: inline-flex !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dBlockCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: block !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dTableCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dTableCellCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table-cell !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dTableRowCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: table-row !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
};

export const dFlexCSS = (params: Props): SerializedStyles => {
  const retCSS = css`
    display: flex !important;
  `;

  return MediaQueryWraper({ css: retCSS, mediaQuery: params.mediaQuery });
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
