import React from "react"
import { rhythm } from "../utils/typography"
import LanguageContext from "../context/LanguageContext";
import css from "@emotion/css";
import Navbar from "./Navbar";
import Helmet from 'react-helmet';
import Title from './Title';

export default ({ children, title }) => {
  return (
    <LanguageContext.Consumer>
      {data => {
        return (
        <React.Fragment>
		<Title title={title} />
        <div
          css={css`
		  margin: 0 auto;
		  padding: 0 20px;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
		  justify-content: space-between;
		  animation: fadeIn 1s ease-out;
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