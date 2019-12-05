interface EspritColors {
  primary?: string;
  Dprimary?: string;
  Lprimary?: string;
  accent?: string;
  primaryTxt?: string;
  icon?: string;
  Lgray?: string;
  Dgray?: string;
  success?: string;
  danger?: string;
  warning?: string;
  info?: string;
  successL?: string;
  dangerL?: string;
  warningL?: string;
  infoL?: string;
}

interface MediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface ZIndex {
  dropdown: string;
  sticky: string;
  fixed: string;
  modalBack: string;
  modal: string;
  popover: string;
  tooltip: string;
}

interface UtilityConfig {
  spaceFactor: number;
}

interface EspritConfig {
  [key: string]: any;
  colors: EspritColors;
  mediaQuery: MediaQuery;
  zIndex: ZIndex;
  utility: UtilityConfig;
}

interface Window {
  espritConfig: EspritConfig;
}
