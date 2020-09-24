import React from 'react';
import { Location } from '@reach/router';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import LanguageSwitch from './LanguageSwitch';
import './Navbar.scss';

const Navbar: React.FC = () => (
  <Location>
    {({ location: { pathname } }) => (
      <div id="navbar">
        <div className="content">
          <div>
            <Link
              to="/"
              className={
                pathname == '/en/' || pathname == '/fr/' ? 'selected' : ''
              }>
              {<FormattedMessage id="navigation.pages.home" />}
            </Link>

            <Link
              to="/projects/"
              className={
                pathname && pathname.includes('/projects') ? 'selected' : ''
              }>
              {<FormattedMessage id="navigation.pages.projects" />}
            </Link>

            <Link
              to="/resume/"
              className={
                pathname && pathname.includes('/resume') ? 'selected' : ''
              }>
              {<FormattedMessage id="navigation.pages.resume" />}
            </Link>
          </div>

          <LanguageSwitch />
        </div>
      </div>
    )}
  </Location>
);

export default Navbar;
