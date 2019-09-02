import React, { useState } from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby-plugin-modal-routing"
import Layout from "../components/layout"
import moment from 'moment';

import LanguageContext from '../context/LanguageContext';
import Strings from '../utils/Strings';

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
						<div>
							<h1 css={css` margin-top: 50px;
									margin-bottom: ${rhythm(2)};`}>{info_project.title}</h1>
							{data.allMarkdownRemark.edges.map(({ node }) => (
								<div key={node.id}>
									<Link
										to={node.fields.slug}
										css={css`
									text-decoration: none;
									color: inherit;
								`}
										asModal
									>
										<h3
											css={css`
									margin-bottom: ${rhythm(1 / 4)};
									`}
										>
											{node.frontmatter.name}{" "}
											<span
												css={css`
										color: #bbb;
									`}
											>
												— {moment(node.frontmatter.date).year()}
											</span>
										</h3>
										<p>{node.frontmatter.description}</p>
									</Link>
								</div>
							))}
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