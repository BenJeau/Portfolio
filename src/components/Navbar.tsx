import React from "react";
import { Link } from "gatsby";
import LanguageSwitch from "./LanguageSwitch";
import Strings from "../utils/Strings";
import './Navbar.scss';

const Navbar: React.FC = (props) => {
    const info = Strings().navigation.pages;

    const navLinks = ['/', '/projects/', 'resume.pdf'];

    return(
        <div id='navbar'>
            <div className='content'>
              <ul>

              {info.map((page: string, key: number) => {
                console.log(window.location.pathname, page, window.location.pathname.includes(page))
                return(
                <li key={key}>
                  <Link to={navLinks[key]} className={window.location.pathname == navLinks[key] ? 'selected' : ''}>
                    {page}
                  </Link>
                </li>
					      )})}
              </ul>
          
              <LanguageSwitch />
            </div>
        </div>
    );
}

export default Navbar;