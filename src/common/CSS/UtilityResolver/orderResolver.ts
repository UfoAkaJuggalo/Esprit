import { ArrayInterpolation } from "@emotion/core";
import {
  order0CSS,
  order0SmCSS,
  order0MdCSS,
  order0LgCSS,
  order0XlCSS,
  order1CSS,
  order1SmCSS,
  order1MdCSS,
  order1LgCSS,
  order1XlCSS,
  order2CSS,
  order2SmCSS,
  order2MdCSS,
  order2LgCSS,
  order2XlCSS,
  order3CSS,
  order3SmCSS,
  order3MdCSS,
  order3LgCSS,
  order3XlCSS,
  order4CSS,
  order4SmCSS,
  order4MdCSS,
  order4LgCSS,
  order4XlCSS,
  order5CSS,
  order5SmCSS,
  order5MdCSS,
  order5LgCSS,
  order5XlCSS,
  order6CSS,
  order6SmCSS,
  order6MdCSS,
  order6LgCSS,
  order6XlCSS,
  order7CSS,
  order7SmCSS,
  order7MdCSS,
  order7LgCSS,
  order7XlCSS,
  order8CSS,
  order8SmCSS,
  order8MdCSS,
  order8LgCSS,
  order8XlCSS,
  order9CSS,
  order9SmCSS,
  order9MdCSS,
  order9LgCSS,
  order9XlCSS,
  order10CSS,
  order10SmCSS,
  order10MdCSS,
  order10LgCSS,
  order10XlCSS,
  order11CSS,
  order11SmCSS,
  order11MdCSS,
  order11LgCSS,
  order11XlCSS,
  order12CSS,
  order12SmCSS,
  order12MdCSS,
  order12LgCSS,
  order12XlCSS
} from "..";

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

  if (params.order0) css.push(order0CSS);
  if (params.order0Sm) css.push(order0SmCSS);
  if (params.order0Md) css.push(order0MdCSS);
  if (params.order0Lg) css.push(order0LgCSS);
  if (params.order0Xl) css.push(order0XlCSS);

  if (params.order1) css.push(order1CSS);
  if (params.order1Sm) css.push(order1SmCSS);
  if (params.order1Md) css.push(order1MdCSS);
  if (params.order1Lg) css.push(order1LgCSS);
  if (params.order1Xl) css.push(order1XlCSS);

  if (params.order2) css.push(order2CSS);
  if (params.order2Sm) css.push(order2SmCSS);
  if (params.order2Md) css.push(order2MdCSS);
  if (params.order2Lg) css.push(order2LgCSS);
  if (params.order2Xl) css.push(order2XlCSS);

  if (params.order3) css.push(order3CSS);
  if (params.order3Sm) css.push(order3SmCSS);
  if (params.order3Md) css.push(order3MdCSS);
  if (params.order3Lg) css.push(order3LgCSS);
  if (params.order3Xl) css.push(order3XlCSS);

  if (params.order4) css.push(order4CSS);
  if (params.order4Sm) css.push(order4SmCSS);
  if (params.order4Md) css.push(order4MdCSS);
  if (params.order4Lg) css.push(order4LgCSS);
  if (params.order4Xl) css.push(order4XlCSS);

  if (params.order5) css.push(order5CSS);
  if (params.order5Sm) css.push(order5SmCSS);
  if (params.order5Md) css.push(order5MdCSS);
  if (params.order5Lg) css.push(order5LgCSS);
  if (params.order5Xl) css.push(order5XlCSS);

  if (params.order6) css.push(order6CSS);
  if (params.order6Sm) css.push(order6SmCSS);
  if (params.order6Md) css.push(order6MdCSS);
  if (params.order6Lg) css.push(order6LgCSS);
  if (params.order6Xl) css.push(order6XlCSS);

  if (params.order7) css.push(order7CSS);
  if (params.order7Sm) css.push(order7SmCSS);
  if (params.order7Md) css.push(order7MdCSS);
  if (params.order7Lg) css.push(order7LgCSS);
  if (params.order7Xl) css.push(order7XlCSS);

  if (params.order8) css.push(order8CSS);
  if (params.order8Sm) css.push(order8SmCSS);
  if (params.order8Md) css.push(order8MdCSS);
  if (params.order8Lg) css.push(order8LgCSS);
  if (params.order8Xl) css.push(order8XlCSS);

  if (params.order9) css.push(order9CSS);
  if (params.order9Sm) css.push(order9SmCSS);
  if (params.order9Md) css.push(order9MdCSS);
  if (params.order9Lg) css.push(order9LgCSS);
  if (params.order9Xl) css.push(order9XlCSS);

  if (params.order10) css.push(order10CSS);
  if (params.order10Sm) css.push(order10SmCSS);
  if (params.order10Md) css.push(order10MdCSS);
  if (params.order10Lg) css.push(order10LgCSS);
  if (params.order10Xl) css.push(order10XlCSS);

  if (params.order11) css.push(order11CSS);
  if (params.order11Sm) css.push(order11SmCSS);
  if (params.order11Md) css.push(order11MdCSS);
  if (params.order11Lg) css.push(order11LgCSS);
  if (params.order11Xl) css.push(order11XlCSS);

  if (params.order12) css.push(order12CSS);
  if (params.order12Sm) css.push(order12SmCSS);
  if (params.order12Md) css.push(order12MdCSS);
  if (params.order12Lg) css.push(order12LgCSS);
  if (params.order12Xl) css.push(order12XlCSS);

  return css;
};

export default OrderResolver;
