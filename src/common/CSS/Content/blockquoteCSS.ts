import { css } from "@emotion/core";
import GetColor from "../../colors/GetColor";

export const blockquoteCSS = css`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  footer {
    display: block;
    font-size: 80%;
    color: ${GetColor({ Dgray: true })};
  }
  footer::before {
    content: "\\2014 \\00A0";
  }
`;
