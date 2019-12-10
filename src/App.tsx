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
import Lead from "./components/Content/Lead";

const App: React.FC = () => {
  return (
    <div className="App">
      <Esprit />
      <ButtonTest text="test" />
      <Container border borderDanger brdRoundedBottom2x mXAuto>
        <Row justifyContentAround mY3>
          <Col col_4 BgInfoL>
            <Heading display4>Test fluida</Heading>
          </Col>
          <Col col_4 BgSuccessL>
            <Heading h3>haha!</Heading>
          </Col>
        </Row>
        <Lead fontMontserrat>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Duis mollis, est non commodo luctus.
        </Lead>
      </Container>
    </div>
  );
};

export default App;
