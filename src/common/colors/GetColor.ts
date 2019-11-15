import { fluentColors } from "./fluent";
import { materialColors } from "./material";

enum shades {
  A700,
  A400,
  A200,
  A100,
  q900,
  q800,
  q700,
  q600,
  q500,
  q400,
  q300,
  q200,
  q100,
  q50
}

interface Props {
  fluent?: keyof typeof fluentColors;
  materialCol?: keyof typeof materialColors;
  materialSHade?: keyof typeof shades;
  primary?: boolean;
  Dprimary?: boolean;
  Lprimary?: boolean;
  accent?: boolean;
  primaryTxt?: boolean;
  icon?: boolean;
  Lgray?: boolean;
  Dgray?: boolean;
  success?: boolean;
  successL?: boolean;
  danger?: boolean;
  dangerL?: boolean;
  warning?: boolean;
  warningL?: boolean;
  info?: boolean;
  infoL?: boolean;
}

const GetColor = (params: Props): string => {
  if (params.fluent) {
    return fluentColors[params.fluent];
  }

  if (params.materialCol && params.materialSHade) {
    return materialColors[params.materialCol][params.materialSHade];
  }

  return "pink";
};

export default GetColor;
