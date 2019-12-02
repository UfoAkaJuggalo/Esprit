import { ArrayInterpolation } from "@emotion/core";
import {
  sizeW25CSS,
  sizeW50CSS,
  sizeW75CSS,
  sizeW100CSS,
  sizeWAutoCSS,
  sizeMW100CSS,
  sizeH25CSS,
  sizeH50CSS,
  sizeH75CSS,
  sizeH100CSS,
  sizeHAutoCSS,
  sizeMH100CSS
} from "..";

export interface SizeProps {
  sizeW25?: boolean;
  sizeW50?: boolean;
  sizeW75?: boolean;
  sizeW100?: boolean;
  sizeWAuto?: boolean;
  sizeMW100?: boolean;
  sizeH25?: boolean;
  sizeH50?: boolean;
  sizeH75?: boolean;
  sizeH100?: boolean;
  sizeHAuto?: boolean;
  sizeMH100?: boolean;
}

const SizeResolver = (params: SizeProps): ArrayInterpolation<undefined> => {
  let css: ArrayInterpolation<undefined> = [];

  if (params.sizeW25) css.push(sizeW25CSS);
  if (params.sizeW50) css.push(sizeW50CSS);
  if (params.sizeW75) css.push(sizeW75CSS);
  if (params.sizeW100) css.push(sizeW100CSS);
  if (params.sizeWAuto) css.push(sizeWAutoCSS);
  if (params.sizeMW100) css.push(sizeMW100CSS);

  if (params.sizeH25) css.push(sizeH25CSS);
  if (params.sizeH50) css.push(sizeH50CSS);
  if (params.sizeH75) css.push(sizeH75CSS);
  if (params.sizeH100) css.push(sizeH100CSS);
  if (params.sizeHAuto) css.push(sizeHAutoCSS);
  if (params.sizeMH100) css.push(sizeMH100CSS);

  return css;
};

export default SizeResolver;
