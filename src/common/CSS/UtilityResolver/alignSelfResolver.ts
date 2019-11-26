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

  if (params.alignSelfStart) css.push(alignSelfStartCSS);
  if (params.alignSelfStartSm) css.push(alignSelfStartSmCSS);
  if (params.alignSelfStartMd) css.push(alignSelfStartMdCSS);
  if (params.alignSelfStartLg) css.push(alignSelfStartLgCSS);
  if (params.alignSelfStartXl) css.push(alignSelfStartXlCSS);

  if (params.alignSelfAuto) css.push(alignSelfAutoCSS);
  if (params.alignSelfAutoSm) css.push(alignSelfAutoSmCSS);
  if (params.alignSelfAutoMd) css.push(alignSelfAutoMdCSS);
  if (params.alignSelfAutoLg) css.push(alignSelfAutoLgCSS);
  if (params.alignSelfAutoXl) css.push(alignSelfAutoXlCSS);

  if (params.alignSelfBaseline) css.push(alignSelfBaselineCSS);
  if (params.alignSelfBaselineSm) css.push(alignSelfBaselineSmCSS);
  if (params.alignSelfBaselineMd) css.push(alignSelfBaselineMdCSS);
  if (params.alignSelfBaselineLg) css.push(alignSelfBaselineLgCSS);
  if (params.alignSelfBaselineXl) css.push(alignSelfBaselineXlCSS);

  if (params.alignSelfCenter) css.push(alignSelfCenterCSS);
  if (params.alignSelfCenterSm) css.push(alignSelfCenterSmCSS);
  if (params.alignSelfCenterMd) css.push(alignSelfCenterMdCSS);
  if (params.alignSelfCenterLg) css.push(alignSelfCenterLgCSS);
  if (params.alignSelfCenterXl) css.push(alignSelfCenterXlCSS);

  if (params.alignSelfEnd) css.push(alignSelfEndCSS);
  if (params.alignSelfEndSm) css.push(alignSelfEndSmCSS);
  if (params.alignSelfEndMd) css.push(alignSelfEndMdCSS);
  if (params.alignSelfEndLg) css.push(alignSelfEndLgCSS);
  if (params.alignSelfEndXl) css.push(alignSelfEndXlCSS);

  if (params.alignSelfStretch) css.push(alignSelfStretchCSS);
  if (params.alignSelfStretchSm) css.push(alignSelfStretchSmCSS);
  if (params.alignSelfStretchMd) css.push(alignSelfStretchMdCSS);
  if (params.alignSelfStretchLg) css.push(alignSelfStretchLgCSS);
  if (params.alignSelfStretchXl) css.push(alignSelfStretchXlCSS);

  return css;
};

export default AlignSelfResolver;
