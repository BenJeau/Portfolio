import React from "react"
import LanguageContext from "../context/LanguageContext";
import Navbar from "./Navbar";
import Title from './Title';
import './layout.scss';

export default ({ children, title, className }) => {
  return (
    <LanguageContext.Consumer>
      {data => {
        return (
          <React.Fragment>
            <Title title={title} />
            <div className={'layout ' + className}>
              {children}
            </div>

            <Navbar />
          </React.Fragment>
        )
      }}
    </LanguageContext.Consumer>
  )
}