import "./App.css";

import React from "react";

import { config } from "./common/config/config";
import { ButtonTest } from "./components/ButtonTest";

declare var configuration: typeof config;

const App: React.FC = () => {
  return (
    <div className="App">
      <ButtonTest text="test" />
    </div>
  );
};

export default App;
