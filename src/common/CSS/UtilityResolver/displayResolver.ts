import { ArrayInterpolation } from "@emotion/core";

import {
  dBlockCSS,
  dBlockPrintCSS,
  dFlexCSS,
  dFlexPrintCSS,
  dInlineBlockCSS,
  dInlineBlockPrintCSS,
  dInlineCSS,
  dInlineFlexCSS,
  dInlineFlexPrintCSS,
  dInlinePrintCSS,
  dNoneCSS,
  dNonePrintCSS,
  dTableCellCSS,
  dTableCellPrintCSS,
  dTableCSS,
  dTablePrintCSS,
  dTableRowCSS,
  dTableRowPrintCSS
} from "..";

export interface DisplayProps {
  dNone?: boolean;
  dInline?: boolean;
  dInlineBlock?: boolean;
  dInlineFlex?: boolean;
  dBlock?: boolean;
  dTable?: boolean;
  dTableCell?: boolean;
  dTableRow?: boolean;
  dFlex?: boolean;
  dNoneSm?: boolean;
  dInlineSm?: boolean;
  dInlineBlockSm?: boolean;
  dInlineFlexSm?: boolean;
  dBlockSm?: boolean;
  dTableSm?: boolean;
  dTableCellSm?: boolean;
  dTableRowSm?: boolean;
  dFlexSm?: boolean;
  dNoneMd?: boolean;
  dInlineMd?: boolean;
  dInlineBlockMd?: boolean;
  dInlineFlexMd?: boolean;
  dBlockMd?: boolean;
  dTableMd?: boolean;
  dTableCellMd?: boolean;
  dTableRowMd?: boolean;
  dFlexMd?: boolean;
  dNoneLg?: boolean;
  dInlineLg?: boolean;
  dInlineBlockLg?: boolean;
  dInlineFlexLg?: boolean;
  dBlockLg?: boolean;
  dTableLg?: boolean;
  dTableCellLg?: boolean;
  dTableRowLg?: boolean;
  dFlexLg?: boolean;
  dNoneXl?: boolean;
  dInlineXl?: boolean;
  dInlineBlockXl?: boolean;
  dInlineFlexXl?: boolean;
  dBlockXl?: boolean;
  dTableXl?: boolean;
  dTableCellXl?: boolean;
  dTableRowXl?: boolean;
  dFlexXl?: boolean;
  dNonePrint?: boolean;
  dInlinePrint?: boolean;
  dInlineBlockPrint?: boolean;
  dInlineFlexPrint?: boolean;
  dBlockPrint?: boolean;
  dTablePrint?: boolean;
  dTableCellPrint?: boolean;
  dTableRowPrint?: boolean;
  dFlexPrint?: boolean;
}

const DisplayResolver = (
  params: DisplayProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.dNone) css.push(dNoneCSS({}));
  if (params.dNoneSm) css.push(dNoneCSS({ mediaQuery: "xs" }));
  if (params.dNoneMd) css.push(dNoneCSS({ mediaQuery: "sm" }));
  if (params.dNoneLg) css.push(dNoneCSS({ mediaQuery: "md" }));
  if (params.dNoneXl) css.push(dNoneCSS({ mediaQuery: "lg" }));

  if (params.dInline) css.push(dInlineCSS({}));
  if (params.dInlineSm) css.push(dInlineCSS({ mediaQuery: "xs" }));
  if (params.dInlineMd) css.push(dInlineCSS({ mediaQuery: "sm" }));
  if (params.dInlineLg) css.push(dInlineCSS({ mediaQuery: "md" }));
  if (params.dInlineXl) css.push(dInlineCSS({ mediaQuery: "lg" }));

  if (params.dInlineBlock) css.push(dInlineBlockCSS({}));
  if (params.dInlineBlockSm) css.push(dInlineBlockCSS({ mediaQuery: "xs" }));
  if (params.dInlineBlockMd) css.push(dInlineBlockCSS({ mediaQuery: "sm" }));
  if (params.dInlineBlockLg) css.push(dInlineBlockCSS({ mediaQuery: "md" }));
  if (params.dInlineBlockXl) css.push(dInlineBlockCSS({ mediaQuery: "lg" }));

  if (params.dInlineFlex) css.push(dInlineFlexCSS({}));
  if (params.dInlineFlexSm) css.push(dInlineFlexCSS({ mediaQuery: "xs" }));
  if (params.dInlineFlexMd) css.push(dInlineFlexCSS({ mediaQuery: "sm" }));
  if (params.dInlineFlexLg) css.push(dInlineFlexCSS({ mediaQuery: "md" }));
  if (params.dInlineFlexXl) css.push(dInlineFlexCSS({ mediaQuery: "lg" }));

  if (params.dBlock) css.push(dBlockCSS({}));
  if (params.dBlockSm) css.push(dBlockCSS({ mediaQuery: "xs" }));
  if (params.dBlockMd) css.push(dBlockCSS({ mediaQuery: "sm" }));
  if (params.dBlockLg) css.push(dBlockCSS({ mediaQuery: "md" }));
  if (params.dBlockXl) css.push(dBlockCSS({ mediaQuery: "lg" }));

  if (params.dTable) css.push(dTableCSS({}));
  if (params.dTableSm) css.push(dTableCSS({ mediaQuery: "xs" }));
  if (params.dTableMd) css.push(dTableCSS({ mediaQuery: "sm" }));
  if (params.dTableLg) css.push(dTableCSS({ mediaQuery: "md" }));
  if (params.dTableXl) css.push(dTableCSS({ mediaQuery: "lg" }));

  if (params.dTableCell) css.push(dTableCellCSS({}));
  if (params.dTableCellSm) css.push(dTableCellCSS({ mediaQuery: "xs" }));
  if (params.dTableCellMd) css.push(dTableCellCSS({ mediaQuery: "sm" }));
  if (params.dTableCellLg) css.push(dTableCellCSS({ mediaQuery: "md" }));
  if (params.dTableCellXl) css.push(dTableCellCSS({ mediaQuery: "lg" }));

  if (params.dTableRow) css.push(dTableRowCSS({}));
  if (params.dTableRowSm) css.push(dTableRowCSS({ mediaQuery: "xs" }));
  if (params.dTableRowMd) css.push(dTableRowCSS({ mediaQuery: "sm" }));
  if (params.dTableRowLg) css.push(dTableRowCSS({ mediaQuery: "md" }));
  if (params.dTableRowXl) css.push(dTableRowCSS({ mediaQuery: "lg" }));

  if (params.dFlex) css.push(dFlexCSS({}));
  if (params.dFlexSm) css.push(dFlexCSS({ mediaQuery: "xs" }));
  if (params.dFlexMd) css.push(dFlexCSS({ mediaQuery: "sm" }));
  if (params.dFlexLg) css.push(dFlexCSS({ mediaQuery: "md" }));
  if (params.dFlexXl) css.push(dFlexCSS({ mediaQuery: "lg" }));

  if (params.dNonePrint) css.push(dNonePrintCSS);
  if (params.dInlinePrint) css.push(dInlinePrintCSS);
  if (params.dInlineBlockPrint) css.push(dInlineBlockPrintCSS);
  if (params.dInlineFlexPrint) css.push(dInlineFlexPrintCSS);
  if (params.dBlockPrint) css.push(dBlockPrintCSS);
  if (params.dTablePrint) css.push(dTablePrintCSS);
  if (params.dTableCellPrint) css.push(dTableCellPrintCSS);
  if (params.dTableRowPrint) css.push(dTableRowPrintCSS);
  if (params.dFlexPrint) css.push(dFlexPrintCSS);

  return css;
};

export default DisplayResolver;
