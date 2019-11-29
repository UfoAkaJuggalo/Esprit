import { ArrayInterpolation } from "@emotion/core";

import { orderCSS } from "..";

export interface OrderProps {
  order0?: boolean;
  order0Sm?: boolean;
  order0Md?: boolean;
  order0Lg?: boolean;
  order0Xl?: boolean;
  order1?: boolean;
  order1Sm?: boolean;
  order1Md?: boolean;
  order1Lg?: boolean;
  order1Xl?: boolean;
  order2?: boolean;
  order2Sm?: boolean;
  order2Md?: boolean;
  order2Lg?: boolean;
  order2Xl?: boolean;
  order3?: boolean;
  order3Sm?: boolean;
  order3Md?: boolean;
  order3Lg?: boolean;
  order3Xl?: boolean;
  order4?: boolean;
  order4Sm?: boolean;
  order4Md?: boolean;
  order4Lg?: boolean;
  order4Xl?: boolean;
  order5?: boolean;
  order5Sm?: boolean;
  order5Md?: boolean;
  order5Lg?: boolean;
  order5Xl?: boolean;
  order6?: boolean;
  order6Sm?: boolean;
  order6Md?: boolean;
  order6Lg?: boolean;
  order6Xl?: boolean;
  order7?: boolean;
  order7Sm?: boolean;
  order7Md?: boolean;
  order7Lg?: boolean;
  order7Xl?: boolean;
  order8?: boolean;
  order8Sm?: boolean;
  order8Md?: boolean;
  order8Lg?: boolean;
  order8Xl?: boolean;
  order9?: boolean;
  order9Sm?: boolean;
  order9Md?: boolean;
  order9Lg?: boolean;
  order9Xl?: boolean;
  order10?: boolean;
  order10Sm?: boolean;
  order10Md?: boolean;
  order10Lg?: boolean;
  order10Xl?: boolean;
  order11?: boolean;
  order11Sm?: boolean;
  order11Md?: boolean;
  order11Lg?: boolean;
  order11Xl?: boolean;
  order12?: boolean;
  order12Sm?: boolean;
  order12Md?: boolean;
  order12Lg?: boolean;
  order12Xl?: boolean;
}

const OrderResolver = (params: OrderProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.order0) css.push(orderCSS({ number: 0 }));
  if (params.order0Sm) css.push(orderCSS({ mediaQuery: "xs", number: 0 }));
  if (params.order0Md) css.push(orderCSS({ mediaQuery: "sm", number: 0 }));
  if (params.order0Lg) css.push(orderCSS({ mediaQuery: "md", number: 0 }));
  if (params.order0Xl) css.push(orderCSS({ mediaQuery: "lg", number: 0 }));

  if (params.order1) css.push(orderCSS({ number: 1 }));
  if (params.order1Sm) css.push(orderCSS({ mediaQuery: "xs", number: 1 }));
  if (params.order1Md) css.push(orderCSS({ mediaQuery: "sm", number: 1 }));
  if (params.order1Lg) css.push(orderCSS({ mediaQuery: "md", number: 1 }));
  if (params.order1Xl) css.push(orderCSS({ mediaQuery: "lg", number: 1 }));

  if (params.order2) css.push(orderCSS({ number: 2 }));
  if (params.order2Sm) css.push(orderCSS({ mediaQuery: "xs", number: 2 }));
  if (params.order2Md) css.push(orderCSS({ mediaQuery: "sm", number: 2 }));
  if (params.order2Lg) css.push(orderCSS({ mediaQuery: "md", number: 2 }));
  if (params.order2Xl) css.push(orderCSS({ mediaQuery: "lg", number: 2 }));

  if (params.order3) css.push(orderCSS({ number: 3 }));
  if (params.order3Sm) css.push(orderCSS({ mediaQuery: "xs", number: 3 }));
  if (params.order3Md) css.push(orderCSS({ mediaQuery: "sm", number: 3 }));
  if (params.order3Lg) css.push(orderCSS({ mediaQuery: "md", number: 3 }));
  if (params.order3Xl) css.push(orderCSS({ mediaQuery: "lg", number: 3 }));

  if (params.order4) css.push(orderCSS({ number: 4 }));
  if (params.order4Sm) css.push(orderCSS({ mediaQuery: "xs", number: 4 }));
  if (params.order4Md) css.push(orderCSS({ mediaQuery: "sm", number: 4 }));
  if (params.order4Lg) css.push(orderCSS({ mediaQuery: "md", number: 4 }));
  if (params.order4Xl) css.push(orderCSS({ mediaQuery: "lg", number: 4 }));

  if (params.order5) css.push(orderCSS({ number: 5 }));
  if (params.order5Sm) css.push(orderCSS({ mediaQuery: "xs", number: 5 }));
  if (params.order5Md) css.push(orderCSS({ mediaQuery: "sm", number: 5 }));
  if (params.order5Lg) css.push(orderCSS({ mediaQuery: "md", number: 5 }));
  if (params.order5Xl) css.push(orderCSS({ mediaQuery: "lg", number: 5 }));

  if (params.order6) css.push(orderCSS({ number: 6 }));
  if (params.order6Sm) css.push(orderCSS({ mediaQuery: "xs", number: 6 }));
  if (params.order6Md) css.push(orderCSS({ mediaQuery: "sm", number: 6 }));
  if (params.order6Lg) css.push(orderCSS({ mediaQuery: "md", number: 6 }));
  if (params.order6Xl) css.push(orderCSS({ mediaQuery: "lg", number: 6 }));

  if (params.order7) css.push(orderCSS({ number: 7 }));
  if (params.order7Sm) css.push(orderCSS({ mediaQuery: "xs", number: 7 }));
  if (params.order7Md) css.push(orderCSS({ mediaQuery: "sm", number: 7 }));
  if (params.order7Lg) css.push(orderCSS({ mediaQuery: "md", number: 7 }));
  if (params.order7Xl) css.push(orderCSS({ mediaQuery: "lg", number: 7 }));

  if (params.order8) css.push(orderCSS({ number: 8 }));
  if (params.order8Sm) css.push(orderCSS({ mediaQuery: "xs", number: 8 }));
  if (params.order8Md) css.push(orderCSS({ mediaQuery: "sm", number: 8 }));
  if (params.order8Lg) css.push(orderCSS({ mediaQuery: "md", number: 8 }));
  if (params.order8Xl) css.push(orderCSS({ mediaQuery: "lg", number: 8 }));

  if (params.order9) css.push(orderCSS({ number: 9 }));
  if (params.order9Sm) css.push(orderCSS({ mediaQuery: "xs", number: 9 }));
  if (params.order9Md) css.push(orderCSS({ mediaQuery: "sm", number: 9 }));
  if (params.order9Lg) css.push(orderCSS({ mediaQuery: "md", number: 9 }));
  if (params.order9Xl) css.push(orderCSS({ mediaQuery: "lg", number: 9 }));

  if (params.order10) css.push(orderCSS({ number: 10 }));
  if (params.order10Sm) css.push(orderCSS({ mediaQuery: "xs", number: 10 }));
  if (params.order10Md) css.push(orderCSS({ mediaQuery: "sm", number: 10 }));
  if (params.order10Lg) css.push(orderCSS({ mediaQuery: "md", number: 10 }));
  if (params.order10Xl) css.push(orderCSS({ mediaQuery: "lg", number: 10 }));

  if (params.order11) css.push(orderCSS({ number: 11 }));
  if (params.order11Sm) css.push(orderCSS({ mediaQuery: "xs", number: 11 }));
  if (params.order11Md) css.push(orderCSS({ mediaQuery: "sm", number: 11 }));
  if (params.order11Lg) css.push(orderCSS({ mediaQuery: "md", number: 11 }));
  if (params.order11Xl) css.push(orderCSS({ mediaQuery: "lg", number: 11 }));

  if (params.order12) css.push(orderCSS({ number: 12 }));
  if (params.order12Sm) css.push(orderCSS({ mediaQuery: "xs", number: 12 }));
  if (params.order12Md) css.push(orderCSS({ mediaQuery: "sm", number: 12 }));
  if (params.order12Lg) css.push(orderCSS({ mediaQuery: "md", number: 12 }));
  if (params.order12Xl) css.push(orderCSS({ mediaQuery: "lg", number: 12 }));

  return css;
};

export default OrderResolver;
