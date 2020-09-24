import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Layout, Projects } from '../../components';

interface OtherProps {
  intl: IntlShape;
}

const Other: React.FC<OtherProps> = ({ intl }) => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "other" } } }
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
      title={intl.formatMessage({ id: 'project.section.other' })}
      className="home-container">
      <Projects edges={query.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default injectIntl(Other);
