import { ArrayInterpolation } from "@emotion/core";
import {
  flexRowCSS,
  flexRowSmCSS,
  flexRowMdCSS,
  flexRowLgCSS,
  flexRowXlCSS,
  flexRowReverseCSS,
  flexRowReverseSmCSS,
  flexRowReverseMdCSS,
  flexRowReverseLgCSS,
  flexRowReverseXlCSS,
  flexColumnCSS,
  flexColumnSmCSS,
  flexColumnMdCSS,
  flexColumnLgCSS,
  flexColumnXlCSS,
  flexColumnReverseCSS,
  flexColumnReverseSmCSS,
  flexColumnReverseMdCSS,
  flexColumnReverseLgCSS,
  flexColumnReverseXlCSS
} from "..";

export interface FlexDirectionProps {
  flexRow?: boolean;
  flexRowSm?: boolean;
  flexRowMd?: boolean;
  flexRowLg?: boolean;
  flexRowXl?: boolean;
  flexRowReverse?: boolean;
  flexRowReverseSm?: boolean;
  flexRowReverseMd?: boolean;
  flexRowReverseLg?: boolean;
  flexRowReverseXl?: boolean;
  flexColumn?: boolean;
  flexColumnSm?: boolean;
  flexColumnMd?: boolean;
  flexColumnLg?: boolean;
  flexColumnXl?: boolean;
  flexColumnReverse?: boolean;
  flexColumnReverseSm?: boolean;
  flexColumnReverseMd?: boolean;
  flexColumnReverseLg?: boolean;
  flexColumnReverseXl?: boolean;
}

const FlexDirectionResolver = (
  params: FlexDirectionProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.flexRow) css.push(flexRowCSS);
  if (params.flexRowSm) css.push(flexRowSmCSS);
  if (params.flexRowMd) css.push(flexRowMdCSS);
  if (params.flexRowLg) css.push(flexRowLgCSS);
  if (params.flexRowXl) css.push(flexRowXlCSS);

  if (params.flexRowReverse) css.push(flexRowReverseCSS);
  if (params.flexRowReverseSm) css.push(flexRowReverseSmCSS);
  if (params.flexRowReverseMd) css.push(flexRowReverseMdCSS);
  if (params.flexRowReverseLg) css.push(flexRowReverseLgCSS);
  if (params.flexRowReverseXl) css.push(flexRowReverseXlCSS);

  if (params.flexColumn) css.push(flexColumnCSS);
  if (params.flexColumnSm) css.push(flexColumnSmCSS);
  if (params.flexColumnMd) css.push(flexColumnMdCSS);
  if (params.flexColumnLg) css.push(flexColumnLgCSS);
  if (params.flexColumnXl) css.push(flexColumnXlCSS);

  if (params.flexColumnReverse) css.push(flexColumnReverseCSS);
  if (params.flexColumnReverseSm) css.push(flexColumnReverseSmCSS);
  if (params.flexColumnReverseMd) css.push(flexColumnReverseMdCSS);
  if (params.flexColumnReverseLg) css.push(flexColumnReverseLgCSS);
  if (params.flexColumnReverseXl) css.push(flexColumnReverseXlCSS);

  return css;
};

export default FlexDirectionResolver;
