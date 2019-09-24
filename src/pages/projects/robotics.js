import React, { useState } from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

import LanguageContext from '../../context/LanguageContext';
import Strings from '../../utils/Strings';

export default ({ data }) => {
	const [, forceUpdate] = useState('');

	const info = Strings().navigation.pages;
	const info_project = Strings().project;

	return (
		<LanguageContext.Consumer>
			{da => {
				forceUpdate(da.lang);
				return (
					<Layout title={info[1]}>
						<div css={css`display:flex; align-items:center; min-height: 100vh; justify-content:center;`}>
						</div>
					</Layout>
				)
			}}
		</LanguageContext.Consumer>
	)
}

export const query = graphql`
  query {
    allMarkdownRemark(
		sort: {
		  fields: [frontmatter___date]
		  order: DESC
		}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            date
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`