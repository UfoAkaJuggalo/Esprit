/** @jsx jsx */
import { jsx } from "@emotion/core";
import "./App.css";

import React from "react";

import { ButtonTest } from "./components/ButtonTest";
import Container from "./components/Layout/Container";
import Row from "./components/Layout/Row";
import Col from "./components/Layout/Col";
import Esprit from "./components/Esprit";
import Heading from "./components/Content/Heading";

const App: React.FC = () => {
  return (
    <div className="App">
      <Esprit />
      <ButtonTest text="test" />
      <Container border borderDanger brdRoundedBottom2x mXAuto>
        <Row mT2Sm>
          <Col col_4 BgInfoL>
            <Heading display4>Test fluida</Heading>
          </Col>
          <Col col_4 BgSuccessL>
            <Heading h3>haha!</Heading>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
