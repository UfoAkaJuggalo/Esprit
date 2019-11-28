import { ArrayInterpolation } from "@emotion/core";

import {
  alignContentAroundCSS,
  alignContentBetweenCSS,
  alignContentCenterCSS,
  alignContentEndCSS,
  alignContentStartCSS,
  alignContentStretchCSS
} from "..";

export interface alignContentProps {
  alignContentStart?: boolean;
  alignContentStartSm?: boolean;
  alignContentStartMd?: boolean;
  alignContentStartLg?: boolean;
  alignContentStartXl?: boolean;
  alignContentAround?: boolean;
  alignContentAroundSm?: boolean;
  alignContentAroundMd?: boolean;
  alignContentAroundLg?: boolean;
  alignContentAroundXl?: boolean;
  alignContentBetween?: boolean;
  alignContentBetweenSm?: boolean;
  alignContentBetweenMd?: boolean;
  alignContentBetweenLg?: boolean;
  alignContentBetweenXl?: boolean;
  alignContentCenter?: boolean;
  alignContentCenterSm?: boolean;
  alignContentCenterMd?: boolean;
  alignContentCenterLg?: boolean;
  alignContentCenterXl?: boolean;
  alignContentEnd?: boolean;
  alignContentEndSm?: boolean;
  alignContentEndMd?: boolean;
  alignContentEndLg?: boolean;
  alignContentEndXl?: boolean;
  alignContentStretch?: boolean;
  alignContentStretchSm?: boolean;
  alignContentStretchMd?: boolean;
  alignContentStretchLg?: boolean;
  alignContentStretchXl?: boolean;
}

const alignContentResolver = (
  params: alignContentProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignContentStart) css.push(alignContentStartCSS({}));
  if (params.alignContentStartSm)
    css.push(alignContentStartCSS({ mediaQuery: "xs" }));
  if (params.alignContentStartMd)
    css.push(alignContentStartCSS({ mediaQuery: "sm" }));
  if (params.alignContentStartLg)
    css.push(alignContentStartCSS({ mediaQuery: "md" }));
  if (params.alignContentStartXl)
    css.push(alignContentStartCSS({ mediaQuery: "lg" }));

  if (params.alignContentAround) css.push(alignContentAroundCSS({}));
  if (params.alignContentAroundSm)
    css.push(alignContentAroundCSS({ mediaQuery: "xs" }));
  if (params.alignContentAroundMd)
    css.push(alignContentAroundCSS({ mediaQuery: "sm" }));
  if (params.alignContentAroundLg)
    css.push(alignContentAroundCSS({ mediaQuery: "md" }));
  if (params.alignContentAroundXl)
    css.push(alignContentAroundCSS({ mediaQuery: "lg" }));

  if (params.alignContentBetween) css.push(alignContentBetweenCSS({}));
  if (params.alignContentBetweenSm)
    css.push(alignContentBetweenCSS({ mediaQuery: "xs" }));
  if (params.alignContentBetweenMd)
    css.push(alignContentBetweenCSS({ mediaQuery: "sm" }));
  if (params.alignContentBetweenLg)
    css.push(alignContentBetweenCSS({ mediaQuery: "md" }));
  if (params.alignContentBetweenXl)
    css.push(alignContentBetweenCSS({ mediaQuery: "lg" }));

  if (params.alignContentCenter) css.push(alignContentCenterCSS({}));
  if (params.alignContentCenterSm)
    css.push(alignContentCenterCSS({ mediaQuery: "xs" }));
  if (params.alignContentCenterMd)
    css.push(alignContentCenterCSS({ mediaQuery: "sm" }));
  if (params.alignContentCenterLg)
    css.push(alignContentCenterCSS({ mediaQuery: "md" }));
  if (params.alignContentCenterXl)
    css.push(alignContentCenterCSS({ mediaQuery: "lg" }));

  if (params.alignContentEnd) css.push(alignContentEndCSS({}));
  if (params.alignContentEndSm)
    css.push(alignContentEndCSS({ mediaQuery: "xs" }));
  if (params.alignContentEndMd)
    css.push(alignContentEndCSS({ mediaQuery: "sm" }));
  if (params.alignContentEndLg)
    css.push(alignContentEndCSS({ mediaQuery: "md" }));
  if (params.alignContentEndXl)
    css.push(alignContentEndCSS({ mediaQuery: "lg" }));

  if (params.alignContentStretch) css.push(alignContentStretchCSS({}));
  if (params.alignContentStretchSm)
    css.push(alignContentStretchCSS({ mediaQuery: "xs" }));
  if (params.alignContentStretchMd)
    css.push(alignContentStretchCSS({ mediaQuery: "sm" }));
  if (params.alignContentStretchLg)
    css.push(alignContentStretchCSS({ mediaQuery: "md" }));
  if (params.alignContentStretchXl)
    css.push(alignContentStretchCSS({ mediaQuery: "lg" }));

  return css;
};

export default alignContentResolver;
