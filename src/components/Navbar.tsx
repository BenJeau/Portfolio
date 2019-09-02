import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import LanguageSwitch from "./LanguageSwitch";
import Strings from "../utils/Strings";
import './Navbar.scss';

const Navbar: React.FC = () => {
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

	let pathname;
	if (typeof window !== 'undefined') pathname = window.location.pathname;

	return (
		<div id='navbar'>
			<div className='content'>
				<div>

				<Link to='/' className={pathname == '/' ? 'selected' : ''}>
					{info[0]}
				</Link>

				<Link to='/projects/' className={pathname && pathname.includes('/projects/') ? 'selected' : ''}>
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