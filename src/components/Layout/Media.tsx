/** @jsx jsx */
import { ArrayInterpolation, jsx } from "@emotion/core";
import { ReactNode } from "react";

import { UtilityProps, mediaCSS, mediaBodyCSS } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";

interface mediaProps extends UtilityProps {
  [x: string]: ReactNode;
  list: boolean;
}

interface mediaBodyProps extends UtilityProps {
  [x: string]: ReactNode;
}

export const Media = (props: mediaProps) => {
  const utilityCSS = UtilityResolver(props);
  const css: ArrayInterpolation<undefined> = [mediaCSS];
  if (props.list) return <li css={css.concat(utilityCSS)}>{props.children}</li>;
  else return <div css={css.concat(utilityCSS)}>{props.children}</div>;
};

export const MediaBody = (props: mediaBodyProps) => {
  let css: ArrayInterpolation<undefined> = [mediaBodyCSS];

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};
