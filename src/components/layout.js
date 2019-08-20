import React from "react"
import { rhythm } from "../utils/typography"
import LanguageContext from "../context/LanguageContext";
import css from "@emotion/css";
import Navbar from "./Navbar";

export default ({ children }) => {
  return (
    <LanguageContext.Consumer>
      {data => {
        return (
        <React.Fragment>
        <div
          css={css`
          margin: 0 auto;
          max-width: 800px;
          padding: ${rhythm(1.5)} 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          `}>
          {children}
        </div>

        <Navbar />
        </React.Fragment>
        )
      }}
    </LanguageContext.Consumer>
  )
}