import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LanguageSwitch from "./LanguageSwitch";
import Strings from "../utils/Strings";
import './Navbar.scss';

const Navbar: React.FC = (props) => {
	const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

	const info = Strings().navigation.pages;

	return (
		<div id='navbar'>
			<div className='content'>
				<div>

				<Link to='/' className={window.location.pathname == '/' ? 'selected' : ''}>
					{info[0]}
				</Link>

				<Link to='/projects/' className={window.location.pathname == '/projects/' ? 'selected' : ''}>
					{info[1]}
				</Link>

				{/* <Link to='/work-experience/' className={window.location.pathname == '/work-experience/' ? 'selected' : ''}>
					{info[2]}
				</Link> */}

				<a href={data.allFile.edges[0].node.publicURL}>
					<i className='remixicon-download-line ri-1x' style={{marginRight: '5px'}}/>{info[3]}
				</a>
				</div>

				<LanguageSwitch />
			</div>
		</div>
	);
}

export default Navbar;