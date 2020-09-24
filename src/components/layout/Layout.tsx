import React, { Fragment, useEffect } from 'react';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en-ca';
import 'dayjs/locale/fr-ca';

import Navbar from './Navbar';
import Title from './Title';
import './layout.scss';

dayjs.extend(localizedFormat);

interface LayoutProps {
  title: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, className }) => {
  if (typeof window !== 'undefined') {
    useEffect(() => {
      if (window.location.pathname.includes('/en/')) {
        dayjs.locale('en-ca');
      } else if (window.location.pathname.includes('/fr/')) {
        dayjs.locale('fr-ca');
      }
    }, [window.location]);
  }

  return (
    <Fragment>
      <Title title={title} />
      <div className={'layout ' + (className ? className : '')}>{children}</div>
      <Navbar />
    </Fragment>
  );
};

export default Layout;
