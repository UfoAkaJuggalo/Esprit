import { config } from "./config";

interface Props {
  color?: keyof EspritColors;
  value: string;
}

const SetProperty = (params: Props) => {
  let configuration: EspritConfig = window.espritConfig;
  if (configuration == undefined) {
    configuration = config;
  }

  if (params.color) {
    configuration.colors[params.color] = params.value;
  }

  window.espritConfig = configuration;
};

export default SetProperty;
