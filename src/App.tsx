/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";

import React from "react";

import { ButtonTest } from "./components/ButtonTest";
import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";

const App: React.FC = () => {
  return (
    <div className="App">
      <ButtonTest text="test" />
      <Container border borderDanger brdRoundedBottom2x mXAuto>
        <Row alignItemsCenter pX2Lg mT2Sm>
          <h2>Test fluida</h2>
        </Row>
      </Container>
    </div>
  );
};

export default App;
