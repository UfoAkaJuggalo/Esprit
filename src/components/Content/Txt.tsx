/** @jsx jsx */
import { jsx, ArrayInterpolation } from "@emotion/core";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";
import { BackgroundProps } from "../../common/CSS/UtilityResolver/backgroundResolver";
import { TextProps } from "../../common/CSS/UtilityResolver/textResolver";
import { ScrReaderProps } from "../../common/CSS/UtilityResolver/scrReaderResolver";
import { VisibilityProps } from "../../common/CSS/UtilityResolver/visibilityResolver";
import { FontProps } from "../../common/CSS/UtilityResolver/fontResolver";
import {
  markCSS,
  strikeCSS,
  underlineCSS,
  smallCSS,
  boldCSS,
  italicCSS,
  abbrCSS,
  abbrInitialismCSS
} from "../../common/CSS/Content";
import { SpaceProps } from "../../common/CSS/UtilityResolver/spaceResolver";

interface Props
  extends BackgroundProps,
    TextProps,
    ScrReaderProps,
    VisibilityProps,
    SpaceProps,
    FontProps {
  [x: string]: ReactNode;
  mark?: boolean;
  deleted?: boolean;
  strike?: boolean;
  insert?: boolean;
  underline?: boolean;
  small?: boolean;
  bold?: boolean;
  italic?: boolean;
  abbr?: boolean;
  abbrInitialism?: boolean;
}

const Txt = (props: Props) => {
  let Css: ArrayInterpolation<undefined> = UtilityResolver(props);

  if (props.mark)
    return <mark css={Css.concat(markCSS)}>{props.children}</mark>;

  if (props.deleted)
    return <del css={Css.concat(strikeCSS)}>{props.children}</del>;

  if (props.strike) return <s css={Css.concat(strikeCSS)}>{props.children}</s>;

  if (props.insert)
    return <ins css={Css.concat(underlineCSS)}>{props.children}</ins>;

  if (props.underline)
    return <u css={Css.concat(underlineCSS)}>{props.children}</u>;

  if (props.small)
    return <small css={Css.concat(smallCSS)}>{props.children}</small>;

  if (props.bold)
    return <strong css={Css.concat(boldCSS)}>{props.children}</strong>;

  if (props.italic)
    return <em css={Css.concat(italicCSS)}>{props.children}</em>;

  if (props.abbr)
    return <abbr css={Css.concat(abbrCSS)}>{props.children}</abbr>;

  if (props.abbrInitialism)
    return <abbr css={Css.concat(abbrInitialismCSS)}>{props.children}</abbr>;

  return <p>{props.children}</p>;
};

export default Txt;
