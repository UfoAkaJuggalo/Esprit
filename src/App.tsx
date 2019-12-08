/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";

import React from "react";

import { ButtonTest } from "./components/ButtonTest";
import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";
import Col from "./components/Layout/Col";

const App: React.FC = () => {
  return (
    <div className="App">
      <ButtonTest text="test" />
      <Container border borderDanger brdRoundedBottom2x mXAuto>
        <Row mT2Sm>
          <Col col_4 BgInfoL>
            <h2>Test fluida</h2>
          </Col>
          <Col col_4 BgSuccessL>
            <h3>haha!</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
