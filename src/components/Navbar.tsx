import React from "react";
import { Link } from "gatsby";
import LanguageSwitch from "./LanguageSwitch";
import Strings from "../utils/Strings";

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = (props) => {
    const info = Strings().navigation.pages;

    return(
        <div >
          <Link to={`/`}>
            {info[0]}
          </Link>

          <Link to={`/projects/`}>
            {info[1]}
          </Link>

          <Link to={`/resume/`}>
            {info[2]}
          </Link>

          <LanguageSwitch />
        </div>
    );
}

export default Navbar;