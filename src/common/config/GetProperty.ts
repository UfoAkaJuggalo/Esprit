import { config } from "./config";

interface Props {
  color?: keyof EspritColors;
}

const GetProperty = (param: Props) => {
  const configuration: EspritConfig = window.espritConfig;

  if (param.color) {
    if (
      configuration &&
      configuration.colors &&
      configuration.colors[param.color]
    ) {
      return configuration.colors[param.color];
    }
    return config.colors[param.color];
  }
};

export default GetProperty;
