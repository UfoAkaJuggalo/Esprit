/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { borderCSS, brdRoundedCSS } from "../common/CSS";

interface props {
  text: string;
}

export const ButtonTest = (props: props) => {
  return <button css={[borderCSS, brdRoundedCSS]}>{props.text}</button>;
};
