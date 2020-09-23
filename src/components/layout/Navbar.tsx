import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import LanguageSwitch from './LanguageSwitch';
import Strings from '../../utils/Strings';

import './Navbar.scss';

const Navbar: React.FC = () => {
  const info = Strings().navigation.pages;

  return (
    <Location>
      {(locationProps) => {
        let pathname = locationProps.location.pathname;
        return (
          <div id="navbar">
            <div className="content">
              <div>
                <Link to="/" className={pathname == '/' ? 'selected' : ''}>
                  {info[0]}
                </Link>

                <Link
                  to="/projects/"
                  className={
                    pathname && pathname.includes('/projects') ? 'selected' : ''
                  }>
                  {info[1]}
                </Link>

                {/* <Link to='/work-experience/' className={window.location.pathname == '/work-experience/' ? 'selected' : ''}>
							{info[2]}
						</Link> */}

                <Link
                  to="/resume/"
                  className={
                    pathname && pathname.includes('/resume') ? 'selected' : ''
                  }>
                  {info[3]}
                </Link>
              </div>

              <LanguageSwitch />
            </div>
          </div>
        );
      }}
    </Location>
  );
};

export default Navbar;
