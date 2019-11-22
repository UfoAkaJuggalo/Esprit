import { config } from "./config";
import { GetPropertyProps } from "./GetProperty";

interface Props extends GetPropertyProps {
  value: string;
}

const SetProperty = (params: Props) => {
  let configuration: EspritConfig = window.espritConfig;
  if (configuration == undefined) {
    configuration = config;
  }

  for (const key in params) {
    if (key != "value" && params.hasOwnProperty(key)) {
      const element = params[key];
      configuration[key][element] = params.value;
    }
  }

  window.espritConfig = configuration;
};

export default SetProperty;
