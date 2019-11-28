import { ArrayInterpolation } from "@emotion/core";
import {
  alignSelfStartCSS,
  alignSelfStartSmCSS,
  alignSelfStartMdCSS,
  alignSelfStartLgCSS,
  alignSelfStartXlCSS,
  alignSelfAutoCSS,
  alignSelfAutoSmCSS,
  alignSelfAutoMdCSS,
  alignSelfAutoLgCSS,
  alignSelfAutoXlCSS,
  alignSelfBaselineCSS,
  alignSelfBaselineSmCSS,
  alignSelfBaselineMdCSS,
  alignSelfBaselineLgCSS,
  alignSelfBaselineXlCSS,
  alignSelfCenterCSS,
  alignSelfCenterSmCSS,
  alignSelfCenterMdCSS,
  alignSelfCenterLgCSS,
  alignSelfCenterXlCSS,
  alignSelfEndCSS,
  alignSelfEndSmCSS,
  alignSelfEndMdCSS,
  alignSelfEndLgCSS,
  alignSelfEndXlCSS,
  alignSelfStretchCSS,
  alignSelfStretchSmCSS,
  alignSelfStretchMdCSS,
  alignSelfStretchLgCSS,
  alignSelfStretchXlCSS
} from "..";

export interface AlignSelfProps {
  alignSelfStart?: boolean;
  alignSelfStartSm?: boolean;
  alignSelfStartMd?: boolean;
  alignSelfStartLg?: boolean;
  alignSelfStartXl?: boolean;
  alignSelfAuto?: boolean;
  alignSelfAutoSm?: boolean;
  alignSelfAutoMd?: boolean;
  alignSelfAutoLg?: boolean;
  alignSelfAutoXl?: boolean;
  alignSelfBaseline?: boolean;
  alignSelfBaselineSm?: boolean;
  alignSelfBaselineMd?: boolean;
  alignSelfBaselineLg?: boolean;
  alignSelfBaselineXl?: boolean;
  alignSelfCenter?: boolean;
  alignSelfCenterSm?: boolean;
  alignSelfCenterMd?: boolean;
  alignSelfCenterLg?: boolean;
  alignSelfCenterXl?: boolean;
  alignSelfEnd?: boolean;
  alignSelfEndSm?: boolean;
  alignSelfEndMd?: boolean;
  alignSelfEndLg?: boolean;
  alignSelfEndXl?: boolean;
  alignSelfStretch?: boolean;
  alignSelfStretchSm?: boolean;
  alignSelfStretchMd?: boolean;
  alignSelfStretchLg?: boolean;
  alignSelfStretchXl?: boolean;
}

const AlignSelfResolver = (
  params: AlignSelfProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.alignSelfStart) css.push(alignSelfStartCSS({}));
  if (params.alignSelfStartSm)
    css.push(alignSelfStartCSS({ mediaQuery: "xs" }));
  if (params.alignSelfStartMd)
    css.push(alignSelfStartCSS({ mediaQuery: "sm" }));
  if (params.alignSelfStartLg)
    css.push(alignSelfStartCSS({ mediaQuery: "md" }));
  if (params.alignSelfStartXl)
    css.push(alignSelfStartCSS({ mediaQuery: "lg" }));

  if (params.alignSelfAuto) css.push(alignSelfAutoCSS({}));
  if (params.alignSelfAutoSm) css.push(alignSelfAutoCSS({ mediaQuery: "xs" }));
  if (params.alignSelfAutoMd) css.push(alignSelfAutoCSS({ mediaQuery: "sm" }));
  if (params.alignSelfAutoLg) css.push(alignSelfAutoCSS({ mediaQuery: "md" }));
  if (params.alignSelfAutoXl) css.push(alignSelfAutoCSS({ mediaQuery: "lg" }));

  if (params.alignSelfBaseline) css.push(alignSelfBaselineCSS({}));
  if (params.alignSelfBaselineSm)
    css.push(alignSelfBaselineCSS({ mediaQuery: "xs" }));
  if (params.alignSelfBaselineMd)
    css.push(alignSelfBaselineCSS({ mediaQuery: "sm" }));
  if (params.alignSelfBaselineLg)
    css.push(alignSelfBaselineCSS({ mediaQuery: "md" }));
  if (params.alignSelfBaselineXl)
    css.push(alignSelfBaselineCSS({ mediaQuery: "lg" }));

  if (params.alignSelfCenter) css.push(alignSelfCenterCSS({}));
  if (params.alignSelfCenterSm)
    css.push(alignSelfCenterCSS({ mediaQuery: "xs" }));
  if (params.alignSelfCenterMd)
    css.push(alignSelfCenterCSS({ mediaQuery: "sm" }));
  if (params.alignSelfCenterLg)
    css.push(alignSelfCenterCSS({ mediaQuery: "md" }));
  if (params.alignSelfCenterXl)
    css.push(alignSelfCenterCSS({ mediaQuery: "lg" }));

  if (params.alignSelfEnd) css.push(alignSelfEndCSS({}));
  if (params.alignSelfEndSm) css.push(alignSelfEndCSS({ mediaQuery: "xs" }));
  if (params.alignSelfEndMd) css.push(alignSelfEndCSS({ mediaQuery: "sm" }));
  if (params.alignSelfEndLg) css.push(alignSelfEndCSS({ mediaQuery: "md" }));
  if (params.alignSelfEndXl) css.push(alignSelfEndCSS({ mediaQuery: "lg" }));

  if (params.alignSelfStretch) css.push(alignSelfStretchCSS({}));
  if (params.alignSelfStretchSm)
    css.push(alignSelfStretchCSS({ mediaQuery: "xs" }));
  if (params.alignSelfStretchMd)
    css.push(alignSelfStretchCSS({ mediaQuery: "sm" }));
  if (params.alignSelfStretchLg)
    css.push(alignSelfStretchCSS({ mediaQuery: "md" }));
  if (params.alignSelfStretchXl)
    css.push(alignSelfStretchCSS({ mediaQuery: "lg" }));

  return css;
};

export default AlignSelfResolver;
