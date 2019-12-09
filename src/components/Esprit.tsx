/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import GetProperty from "../common/config/GetProperty";

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
        }
        html {
            font-size: 1rem;
          }

          @media (max-width: ${GetProperty({ mediaQuery: "sm" })}) {
            html {
              font-size: 1.2rem;
            }
          }

          @media (max-width: ${GetProperty({ mediaQuery: "md" })}) {
            html {
              font-size: 1.4rem;
            }
          }

          @media (max-width: ${GetProperty({ mediaQuery: "lg" })}) {
            html {
              font-size: 1.6rem;
            }
      `}
    />
  );
};

export default Esprit;
