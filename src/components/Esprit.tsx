/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";

const Esprit = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css?family=Montserrat:200,200i,400,400i,600,600i&display=swap");
        @import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400,600&display=swap");
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default Esprit;
