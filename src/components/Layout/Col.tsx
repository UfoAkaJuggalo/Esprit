/** @jsx jsx */
import { jsx, ArrayInterpolation } from "@emotion/core";
import { UtilityProps, ColSize, ColCSSProps, colCSS } from "../../common/CSS";
import UtilityResolver from "../../common/CSS/UtilityResolver/MainResolver";
import { ReactNode } from "react";

interface props extends UtilityProps {
  [x: string]: ReactNode;
  col?: boolean;
  col_1?: boolean;
  col_2?: boolean;
  col_3?: boolean;
  col_4?: boolean;
  col_5?: boolean;
  col_6?: boolean;
  col_7?: boolean;
  col_8?: boolean;
  col_9?: boolean;
  col_10?: boolean;
  col_11?: boolean;
  col_12?: boolean;
  col_auto?: boolean;
  col_xs?: boolean;
  col_1_xs?: boolean;
  col_2_xs?: boolean;
  col_3_xs?: boolean;
  col_4_xs?: boolean;
  col_5_xs?: boolean;
  col_6_xs?: boolean;
  col_7_xs?: boolean;
  col_8_xs?: boolean;
  col_9_xs?: boolean;
  col_10_xs?: boolean;
  col_11_xs?: boolean;
  col_12_xs?: boolean;
  col_auto_xs?: boolean;
  col_sm?: boolean;
  col_1_sm?: boolean;
  col_2_sm?: boolean;
  col_3_sm?: boolean;
  col_4_sm?: boolean;
  col_5_sm?: boolean;
  col_6_sm?: boolean;
  col_7_sm?: boolean;
  col_8_sm?: boolean;
  col_9_sm?: boolean;
  col_10_sm?: boolean;
  col_11_sm?: boolean;
  col_12_sm?: boolean;
  col_auto_sm?: boolean;
  col_md?: boolean;
  col_1_md?: boolean;
  col_2_md?: boolean;
  col_3_md?: boolean;
  col_4_md?: boolean;
  col_5_md?: boolean;
  col_6_md?: boolean;
  col_7_md?: boolean;
  col_8_md?: boolean;
  col_9_md?: boolean;
  col_10_md?: boolean;
  col_11_md?: boolean;
  col_12_md?: boolean;
  col_auto_md?: boolean;
  col_lg?: boolean;
  col_1_lg?: boolean;
  col_2_lg?: boolean;
  col_3_lg?: boolean;
  col_4_lg?: boolean;
  col_5_lg?: boolean;
  col_6_lg?: boolean;
  col_7_lg?: boolean;
  col_8_lg?: boolean;
  col_9_lg?: boolean;
  col_10_lg?: boolean;
  col_11_lg?: boolean;
  col_12_lg?: boolean;
  col_auto_lg?: boolean;
}

const Col = (props: props) => {
  let css: ArrayInterpolation<undefined> = [];
  for (const key in props) {
    if (
      props.hasOwnProperty(key) &&
      typeof props[key] == "boolean" &&
      key.slice(0, 3) == "col"
    ) {
      const params = key.split("_");
      let colCSSProps: ColCSSProps = {};

      switch (params[1]) {
        case "1":
          colCSSProps.size = ColSize.s1;
          break;
        case "2":
          colCSSProps.size = ColSize.s2;
          break;
        case "3":
          colCSSProps.size = ColSize.s3;
          break;
        case "4":
          colCSSProps.size = ColSize.s4;
          break;
        case "5":
          colCSSProps.size = ColSize.s5;
          break;
        case "6":
          colCSSProps.size = ColSize.s6;
          break;
        case "7":
          colCSSProps.size = ColSize.s7;
          break;
        case "8":
          colCSSProps.size = ColSize.s8;
          break;
        case "9":
          colCSSProps.size = ColSize.s9;
          break;
        case "10":
          colCSSProps.size = ColSize.s10;
          break;
        case "11":
          colCSSProps.size = ColSize.s11;
          break;
        case "12":
          colCSSProps.size = ColSize.s12;
          break;
        case "auto":
          colCSSProps.size = ColSize.auto;
          break;
      }

      switch (params[2]) {
        case "xs":
          colCSSProps.mediaQuery = "xs";
          break;
        case "sm":
          colCSSProps.mediaQuery = "sm";
          break;
        case "md":
          colCSSProps.mediaQuery = "md";
          break;
        case "lg":
          colCSSProps.mediaQuery = "lg";
          break;
      }

      css = css.concat(colCSS(colCSSProps));
    }
  }

  return <div css={css.concat(UtilityResolver(props))}>{props.children}</div>;
};

export default Col;
