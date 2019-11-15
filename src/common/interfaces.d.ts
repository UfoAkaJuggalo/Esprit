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
  successL: string;
  dangerL: string;
  warningL: string;
  infoL: string;
}

interface EspritConfig {
  colors: EspritColors;
}

interface Window {
  espritConfig: EspritConfig;
}
