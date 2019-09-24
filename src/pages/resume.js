import React, { useState } from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';

import LanguageContext from '../context/LanguageContext';
import Strings from '../utils/Strings';

import './resume.scss';

export default ({ data }) => {
	const [, forceUpdate] = useState('');

	const info = Strings().navigation.pages;
    const info_project = Strings().project;
    const a = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      },
      fileName: file(relativePath: { eq: "images/resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

	return (
		<LanguageContext.Consumer>
			{da => {
				forceUpdate(da.lang);
				return (
					<Layout title={info[1]}>
						<div css={css`flex-direction: column; display:flex; align-items:center; min-height: calc(100vh - 50px); justify-content:center;`}>
					
            <a href={a.allFile.edges[0].node.publicURL} className='pdf-title'>	
          <h4>click here to view as a PDF</h4>					
</a>
          <Img fluid={a.fileName.childImageSharp.fluid} className='pdf'/>
                        </div>
					</Layout>
				)
			}}
		</LanguageContext.Consumer>
	)
}