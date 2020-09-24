import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Title from './Title';

import './layout.scss';

interface LayoutProps {
  title: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, className }) => (
  <Fragment>
    <Title title={title} />
    <div className={'layout ' + (className ? className : '')}>{children}</div>
    <Navbar />
  </Fragment>
);

export default Layout;
