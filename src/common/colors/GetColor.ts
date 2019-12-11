import { fluentColors } from "./fluent";
import { materialColors } from "./material";
import GetProperty from "../config/GetProperty";

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
  mark?: boolean;
  text?: boolean;
}

const GetColor = (params: Props): string => {
  if (params.fluent) {
    return fluentColors[params.fluent];
  }

  if (params.materialCol && params.materialSHade) {
    return materialColors[params.materialCol][params.materialSHade];
  }

  if (params.primary) return GetProperty({ colors: "primary" });
  if (params.Dprimary) return GetProperty({ colors: "Dprimary" });
  if (params.Lprimary) return GetProperty({ colors: "Lprimary" });
  if (params.accent) return GetProperty({ colors: "accent" });
  if (params.primaryTxt) return GetProperty({ colors: "primaryTxt" });
  if (params.icon) return GetProperty({ colors: "icon" });
  if (params.Lgray) return GetProperty({ colors: "Lgray" });
  if (params.Dgray) return GetProperty({ colors: "Dgray" });
  if (params.success) return GetProperty({ colors: "success" });
  if (params.successL) return GetProperty({ colors: "successL" });
  if (params.danger) return GetProperty({ colors: "danger" });
  if (params.dangerL) return GetProperty({ colors: "dangerL" });
  if (params.warning) return GetProperty({ colors: "warning" });
  if (params.warningL) return GetProperty({ colors: "warningL" });
  if (params.info) return GetProperty({ colors: "info" });
  if (params.infoL) return GetProperty({ colors: "infoL" });
  if (params.mark) return GetProperty({ colors: "mark" });
  if (params.text) return GetProperty({ colors: "text" });

  return "";
};

export default GetColor;
