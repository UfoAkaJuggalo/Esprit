import { config as rawConfig } from "./config";

export interface GetPropertyProps {
  [key: string]: any;
  colors?: keyof EspritColors;
  mediaQuery?: keyof MediaQuery;
  zIndex?: keyof ZIndex;
}

const GetProperty = (param: GetPropertyProps): string => {
  const configuration: EspritConfig = window.espritConfig;
  const config: EspritConfig = rawConfig;

  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      const element = param[key];
      if (configuration && configuration.hasOwnProperty(key)) {
        const retval = configuration[key][element];
        if (retval) return retval;
      }
      return config[key][element];
    }
  }

  return "";
};

export default GetProperty;
