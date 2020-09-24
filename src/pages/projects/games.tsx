import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Layout, Projects } from '../../components';

interface GamesProps {
  intl: IntlShape;
}

const Games: React.FC<GamesProps> = ({ intl }) => {
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
    <Layout
      title={intl.formatMessage({ id: 'project.section.games' })}
      className="home-container">
      <Projects edges={query.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default injectIntl(Games);
