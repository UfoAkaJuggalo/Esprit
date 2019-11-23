import { ArrayInterpolation } from "@emotion/core";

import {
  dBlockCSS,
  dBlockLgCSS,
  dBlockMdCSS,
  dBlockPrintCSS,
  dBlockSmCSS,
  dBlockXlCSS,
  dFlexCSS,
  dFlexLgCSS,
  dFlexMdCSS,
  dFlexPrintCSS,
  dFlexSmCSS,
  dFlexXlCSS,
  dInlineBlockCSS,
  dInlineBlockLgCSS,
  dInlineBlockMdCSS,
  dInlineBlockPrintCSS,
  dInlineBlockSmCSS,
  dInlineBlockXlCSS,
  dInlineCSS,
  dInlineFlexCSS,
  dInlineFlexLgCSS,
  dInlineFlexMdCSS,
  dInlineFlexPrintCSS,
  dInlineFlexSmCSS,
  dInlineFlexXlCSS,
  dInlineLgCSS,
  dInlineMdCSS,
  dInlinePrintCSS,
  dInlineSmCSS,
  dInlineXlCSS,
  dNoneCSS,
  dNoneLgCSS,
  dNoneMdCSS,
  dNonePrintCSS,
  dNoneSmCSS,
  dNoneXlCSS,
  dTableCellCSS,
  dTableCellLgCSS,
  dTableCellMdCSS,
  dTableCellPrintCSS,
  dTableCellSmCSS,
  dTableCellXlCSS,
  dTableCSS,
  dTableLgCSS,
  dTableMdCSS,
  dTablePrintCSS,
  dTableRowCSS,
  dTableRowLgCSS,
  dTableRowMdCSS,
  dTableRowPrintCSS,
  dTableRowSmCSS,
  dTableRowXlCSS,
  dTableSmCSS,
  dTableXlCSS
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

  if (params.dNone) css.push(dNoneCSS);
  if (params.dInline) css.push(dInlineCSS);
  if (params.dInlineBlock) css.push(dInlineBlockCSS);
  if (params.dInlineFlex) css.push(dInlineFlexCSS);
  if (params.dBlock) css.push(dBlockCSS);
  if (params.dTable) css.push(dTableCSS);
  if (params.dTableCell) css.push(dTableCellCSS);
  if (params.dTableRow) css.push(dTableRowCSS);
  if (params.dFlex) css.push(dFlexCSS);

  if (params.dNoneSm) css.push(dNoneSmCSS);
  if (params.dInlineSm) css.push(dInlineSmCSS);
  if (params.dInlineBlockSm) css.push(dInlineBlockSmCSS);
  if (params.dInlineFlexSm) css.push(dInlineFlexSmCSS);
  if (params.dBlockSm) css.push(dBlockSmCSS);
  if (params.dTableSm) css.push(dTableSmCSS);
  if (params.dTableCellSm) css.push(dTableCellSmCSS);
  if (params.dTableRowSm) css.push(dTableRowSmCSS);
  if (params.dFlexSm) css.push(dFlexSmCSS);

  if (params.dNoneMd) css.push(dNoneMdCSS);
  if (params.dInlineMd) css.push(dInlineMdCSS);
  if (params.dInlineBlockMd) css.push(dInlineBlockMdCSS);
  if (params.dInlineFlexMd) css.push(dInlineFlexMdCSS);
  if (params.dBlockMd) css.push(dBlockMdCSS);
  if (params.dTableMd) css.push(dTableMdCSS);
  if (params.dTableCellMd) css.push(dTableCellMdCSS);
  if (params.dTableRowMd) css.push(dTableRowMdCSS);
  if (params.dFlexMd) css.push(dFlexMdCSS);

  if (params.dNoneLg) css.push(dNoneLgCSS);
  if (params.dInlineLg) css.push(dInlineLgCSS);
  if (params.dInlineBlockLg) css.push(dInlineBlockLgCSS);
  if (params.dInlineFlexLg) css.push(dInlineFlexLgCSS);
  if (params.dBlockLg) css.push(dBlockLgCSS);
  if (params.dTableLg) css.push(dTableLgCSS);
  if (params.dTableCellLg) css.push(dTableCellLgCSS);
  if (params.dTableRowLg) css.push(dTableRowLgCSS);
  if (params.dFlexLg) css.push(dFlexLgCSS);

  if (params.dNoneXl) css.push(dNoneXlCSS);
  if (params.dInlineXl) css.push(dInlineXlCSS);
  if (params.dInlineBlockXl) css.push(dInlineBlockXlCSS);
  if (params.dInlineFlexXl) css.push(dInlineFlexXlCSS);
  if (params.dBlockXl) css.push(dBlockXlCSS);
  if (params.dTableXl) css.push(dTableXlCSS);
  if (params.dTableCellXl) css.push(dTableCellXlCSS);
  if (params.dTableRowXl) css.push(dTableRowXlCSS);
  if (params.dFlexXl) css.push(dFlexXlCSS);

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
