import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, Projects } from '../../components';
import LanguageContext from '../../context/LanguageContext';
import Strings from '../../utils/Strings';

export default () => {
  const [, forceUpdate] = useState('');

  const info_project = Strings().project.section;

  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "games" } } }
      ) {
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
  `);

  return (
    <LanguageContext.Consumer>
      {(da) => {
        forceUpdate(da.lang);
        return (
          <Layout title={info_project[1]} className="home-container">
            <Projects edges={query.allMarkdownRemark.edges} />
          </Layout>
        );
      }}
    </LanguageContext.Consumer>
  );
};
