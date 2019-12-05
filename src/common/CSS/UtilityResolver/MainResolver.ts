import { ArrayInterpolation } from "@emotion/core";
import ClearfixResolver, { ClearfixProps } from "./clearfixResolver";
import AlignItemsResolver, { AlignItemsProps } from "./alignItemsResolver";
import BackgroundResolver, { BackgroundProps } from "./backgroundResolver";
import JustifyContentResolver, {
  JustifyContentProps
} from "./justifyContentResolver";
import BorderResolver, { BorderProps } from "./borderResolver";
import TextResolver, { TextProps } from "./textResolver";
import DisplayResolver, { DisplayProps } from "./displayResolver";
import FlexDirectionResolver, {
  FlexDirectionProps
} from "./flexDirectionResolver";
import AlignSelfResolver, { AlignSelfProps } from "./alignSelfResolver";
import FlexFillfResolver, { FlexFillProps } from "./flexFillResolver";
import FlexGrowResolver, { FlexGrowProps } from "./flexGrowResolver";
import FlexShrinkResolver, { FlexShrinkProps } from "./flexShrinkResolver";
import FlexWrapResolver, { FlexWrapProps } from "./flexWrapResolver";
import OrderResolver, { OrderProps } from "./orderResolver";
import alignContentResolver, {
  alignContentProps
} from "./alignContentResolver";
import FloatResolver, { FloatProps } from "./floatResolver";
import PositionResolver, { PositionProps } from "./positionResolver";
import ScrReaderResolver, { ScrReaderProps } from "./scrReaderResolver";
import ShadowResolver, { ShadowProps } from "./shadowResolver";
import SizeResolver, { SizeProps } from "./sizeResolver";
import SpaceResolver, { SpaceProps } from "./spaceResolver";

export interface UtilityProps
  extends ClearfixProps,
    AlignItemsProps,
    BackgroundProps,
    JustifyContentProps,
    BorderProps,
    DisplayProps,
    TextProps,
    FlexDirectionProps,
    AlignSelfProps,
    FlexFillProps,
    FlexGrowProps,
    FlexShrinkProps,
    FlexWrapProps,
    OrderProps,
    alignContentProps,
    FloatProps,
    PositionProps,
    ScrReaderProps,
    ShadowProps,
    SizeProps,
    SpaceProps {}

const UtilityResolver = (
  params: UtilityProps
): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  css = css.concat(ClearfixResolver(params));
  css = css.concat(BorderResolver(params));
  css = css.concat(BackgroundResolver(params));
  css = css.concat(AlignItemsResolver(params));
  css = css.concat(JustifyContentResolver(params));
  css = css.concat(TextResolver(params));
  css = css.concat(DisplayResolver(params));
  css = css.concat(FlexDirectionResolver(params));
  css = css.concat(AlignSelfResolver(params));
  css = css.concat(FlexFillfResolver(params));
  css = css.concat(FlexGrowResolver(params));
  css = css.concat(FlexShrinkResolver(params));
  css = css.concat(FlexWrapResolver(params));
  css = css.concat(OrderResolver(params));
  css = css.concat(alignContentResolver(params));
  css = css.concat(FloatResolver(params));
  css = css.concat(PositionResolver(params));
  css = css.concat(ScrReaderResolver(params));
  css = css.concat(ShadowResolver(params));
  css = css.concat(SizeResolver(params));
  css = css.concat(SpaceResolver(params));

  return css;
};

export default UtilityResolver;
