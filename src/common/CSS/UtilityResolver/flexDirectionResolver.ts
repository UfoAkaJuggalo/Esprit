import { ArrayInterpolation } from "@emotion/core";

import {
  flexColumnCSS,
  flexColumnReverseCSS,
  flexRowCSS,
  flexRowReverseCSS
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

  if (params.flexRow) css.push(flexRowCSS({}));
  if (params.flexRowSm) css.push(flexRowCSS({ mediaQuery: "xs" }));
  if (params.flexRowMd) css.push(flexRowCSS({ mediaQuery: "sm" }));
  if (params.flexRowLg) css.push(flexRowCSS({ mediaQuery: "md" }));
  if (params.flexRowXl) css.push(flexRowCSS({ mediaQuery: "lg" }));

  if (params.flexRowReverse) css.push(flexRowReverseCSS({}));
  if (params.flexRowReverseSm)
    css.push(flexRowReverseCSS({ mediaQuery: "xs" }));
  if (params.flexRowReverseMd)
    css.push(flexRowReverseCSS({ mediaQuery: "sm" }));
  if (params.flexRowReverseLg)
    css.push(flexRowReverseCSS({ mediaQuery: "md" }));
  if (params.flexRowReverseXl)
    css.push(flexRowReverseCSS({ mediaQuery: "lg" }));

  if (params.flexColumn) css.push(flexColumnCSS({}));
  if (params.flexColumnSm) css.push(flexColumnCSS({ mediaQuery: "xs" }));
  if (params.flexColumnMd) css.push(flexColumnCSS({ mediaQuery: "sm" }));
  if (params.flexColumnLg) css.push(flexColumnCSS({ mediaQuery: "md" }));
  if (params.flexColumnXl) css.push(flexColumnCSS({ mediaQuery: "lg" }));

  if (params.flexColumnReverse) css.push(flexColumnReverseCSS({}));
  if (params.flexColumnReverseSm)
    css.push(flexColumnReverseCSS({ mediaQuery: "xs" }));
  if (params.flexColumnReverseMd)
    css.push(flexColumnReverseCSS({ mediaQuery: "sm" }));
  if (params.flexColumnReverseLg)
    css.push(flexColumnReverseCSS({ mediaQuery: "md" }));
  if (params.flexColumnReverseXl)
    css.push(flexColumnReverseCSS({ mediaQuery: "lg" }));

  return css;
};

export default FlexDirectionResolver;
