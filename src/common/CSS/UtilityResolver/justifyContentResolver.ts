import { ArrayInterpolation } from "@emotion/core";

import {
  justifyContentAroundCSS,
  justifyContentBetweenCSS,
  justifyContentCenterCSS,
  justifyContentEndCSS,
  justifyContentStartCSS
} from "..";

export interface JustifyContentProps {
  justifyContentStart?: boolean;
  justifyContentCenter?: boolean;
  justifyContentEnd?: boolean;
  justifyContentAround?: boolean;
  justifyContentBetween?: boolean;
  justifyContentStartSm?: boolean;
  justifyContentCenterSm?: boolean;
  justifyContentEndSm?: boolean;
  justifyContentAroundSm?: boolean;
  justifyContentBetweenSm?: boolean;
  justifyContentStartMd?: boolean;
  justifyContentCenterMd?: boolean;
  justifyContentEndMd?: boolean;
  justifyContentAroundMd?: boolean;
  justifyContentBetweenMd?: boolean;
  justifyContentStartLg?: boolean;
  justifyContentCenterLg?: boolean;
  justifyContentEndLg?: boolean;
  justifyContentAroundLg?: boolean;
  justifyContentBetweenLg?: boolean;
  justifyContentStartXl?: boolean;
  justifyContentCenterXl?: boolean;
  justifyContentEndXl?: boolean;
  justifyContentAroundXl?: boolean;
  justifyContentBetweenXl?: boolean;
}

const JustifyContentResolver = (
  params: JustifyContentProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.justifyContentStart) css.push(justifyContentStartCSS({}));
  if (params.justifyContentStartSm)
    css.push(justifyContentStartCSS({ mediaQuery: "xs" }));
  if (params.justifyContentStartMd)
    css.push(justifyContentStartCSS({ mediaQuery: "sm" }));
  if (params.justifyContentStartLg)
    css.push(justifyContentStartCSS({ mediaQuery: "md" }));
  if (params.justifyContentStartXl)
    css.push(justifyContentStartCSS({ mediaQuery: "lg" }));

  if (params.justifyContentCenter) css.push(justifyContentCenterCSS({}));
  if (params.justifyContentCenterSm)
    css.push(justifyContentCenterCSS({ mediaQuery: "xs" }));
  if (params.justifyContentCenterMd)
    css.push(justifyContentCenterCSS({ mediaQuery: "sm" }));
  if (params.justifyContentCenterLg)
    css.push(justifyContentCenterCSS({ mediaQuery: "md" }));
  if (params.justifyContentCenterXl)
    css.push(justifyContentCenterCSS({ mediaQuery: "lg" }));

  if (params.justifyContentEnd) css.push(justifyContentEndCSS({}));
  if (params.justifyContentEndSm)
    css.push(justifyContentEndCSS({ mediaQuery: "xs" }));
  if (params.justifyContentEndMd)
    css.push(justifyContentEndCSS({ mediaQuery: "sm" }));
  if (params.justifyContentEndLg)
    css.push(justifyContentEndCSS({ mediaQuery: "md" }));
  if (params.justifyContentEndXl)
    css.push(justifyContentEndCSS({ mediaQuery: "lg" }));

  if (params.justifyContentAround) css.push(justifyContentAroundCSS({}));
  if (params.justifyContentAroundSm)
    css.push(justifyContentAroundCSS({ mediaQuery: "xs" }));
  if (params.justifyContentAroundMd)
    css.push(justifyContentAroundCSS({ mediaQuery: "sm" }));
  if (params.justifyContentAroundLg)
    css.push(justifyContentAroundCSS({ mediaQuery: "md" }));
  if (params.justifyContentAroundXl)
    css.push(justifyContentAroundCSS({ mediaQuery: "lg" }));

  if (params.justifyContentBetween) css.push(justifyContentBetweenCSS({}));
  if (params.justifyContentBetweenSm)
    css.push(justifyContentBetweenCSS({ mediaQuery: "xs" }));
  if (params.justifyContentBetweenMd)
    css.push(justifyContentBetweenCSS({ mediaQuery: "sm" }));
  if (params.justifyContentBetweenLg)
    css.push(justifyContentBetweenCSS({ mediaQuery: "md" }));
  if (params.justifyContentBetweenXl)
    css.push(justifyContentBetweenCSS({ mediaQuery: "lg" }));

  return css;
};

export default JustifyContentResolver;
