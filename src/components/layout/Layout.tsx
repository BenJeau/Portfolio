import React from 'react';
import LanguageContext from '../../context/LanguageContext';
import Navbar from './Navbar';
import Title from './Title';

import './layout.scss';

interface LayoutProps {
  title: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, className }) => {
  return (
    <LanguageContext.Consumer>
      {(data) => {
        return (
          <React.Fragment>
            <Title title={title} />
            <div className={'layout ' + (className ? className : '')}>
              {children}
            </div>

            <Navbar />
          </React.Fragment>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Layout;
