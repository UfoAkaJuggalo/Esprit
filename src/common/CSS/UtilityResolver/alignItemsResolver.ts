import { ArrayInterpolation } from "@emotion/core";

import { alignItemsCenterCSS, alignItemsEndCSS, alignItemsStartCSS } from "..";

export interface AlignItemsProps {
  alignItemsStart?: boolean;
  alignItemsEnd?: boolean;
  alignItemsCenter?: boolean;
  alignItemsStartSm?: boolean;
  alignItemsEndSm?: boolean;
  alignItemsCenterSm?: boolean;
  alignItemsStartMd?: boolean;
  alignItemsEndMd?: boolean;
  alignItemsCenterMd?: boolean;
  alignItemsStartLg?: boolean;
  alignItemsEndLg?: boolean;
  alignItemsCenterLg?: boolean;
  alignItemsStartXl?: boolean;
  alignItemsEndXl?: boolean;
  alignItemsCenterXl?: boolean;
}

const AlignItemsResolver = (
  params: AlignItemsProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignItemsStart) css.push(alignItemsStartCSS({}));
  if (params.alignItemsStartSm)
    css.push(alignItemsStartCSS({ mediaQuery: "xs" }));
  if (params.alignItemsStartMd)
    css.push(alignItemsStartCSS({ mediaQuery: "sm" }));
  if (params.alignItemsStartLg)
    css.push(alignItemsStartCSS({ mediaQuery: "md" }));
  if (params.alignItemsStartXl)
    css.push(alignItemsStartCSS({ mediaQuery: "lg" }));

  if (params.alignItemsCenter) css.push(alignItemsCenterCSS({}));
  if (params.alignItemsCenterSm)
    css.push(alignItemsCenterCSS({ mediaQuery: "xs" }));
  if (params.alignItemsCenterMd)
    css.push(alignItemsCenterCSS({ mediaQuery: "sm" }));
  if (params.alignItemsCenterLg)
    css.push(alignItemsCenterCSS({ mediaQuery: "md" }));
  if (params.alignItemsCenterXl)
    css.push(alignItemsCenterCSS({ mediaQuery: "lg" }));

  if (params.alignItemsEnd) css.push(alignItemsEndCSS({}));
  if (params.alignItemsEndSm) css.push(alignItemsEndCSS({ mediaQuery: "xs" }));
  if (params.alignItemsEndMd) css.push(alignItemsEndCSS({ mediaQuery: "sm" }));
  if (params.alignItemsEndLg) css.push(alignItemsEndCSS({ mediaQuery: "md" }));
  if (params.alignItemsEndXl) css.push(alignItemsEndCSS({ mediaQuery: "lg" }));

  return css;
};

export default AlignItemsResolver;
