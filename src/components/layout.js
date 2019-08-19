import React from "react"
import { rhythm } from "../utils/typography"
import LanguageContext from "../context/LanguageContext";
import css from "@emotion/css";
import Navbar from "./Navbar";

export default ({ children }) => {
  return (
    <LanguageContext.Consumer>
      {data => {
        return (<div
          css={css`
          margin: 0 auto;
          max-width: 800px;
          padding-top: ${rhythm(1.5)};
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          `}>
          {children}
          <Navbar />
        </div>
        )
      }}
    </LanguageContext.Consumer>
  )
}