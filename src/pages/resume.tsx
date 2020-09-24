import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage, injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { Layout } from '../components';
import './resume.scss';

interface ResumeProps {
  intl: IntlShape;
}

const Resume: React.FC<ResumeProps> = ({ intl }) => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
      fileName: file(relativePath: { eq: "assets/images/resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout title={intl.formatMessage({ id: 'navigation.pages.resume' })}>
      <div className="container">
        <a href={query.allFile.edges[0].node.publicURL} className="pdf-title">
          <h4>
            <FormattedMessage id="resume" />
          </h4>
        </a>
        <Img fluid={query.fileName.childImageSharp.fluid} className="pdf" />
      </div>
    </Layout>
  );
};

export default injectIntl(Resume);
