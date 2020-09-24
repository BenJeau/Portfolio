import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Layout, Projects } from '../../components';

interface MobileProps {
  intl: IntlShape;
}

const Mobile: React.FC<MobileProps> = ({ intl }) => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "mobile" } } }
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
      title={intl.formatMessage({ id: 'project.section.mobile' })}
      className="home-container">
      <Projects edges={query.allMarkdownRemark.edges} />
    </Layout>
  );
};

export default injectIntl(Mobile);
