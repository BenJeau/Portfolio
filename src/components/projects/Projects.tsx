import React, { Fragment } from 'react';
import { injectIntl, IntlShape, Link } from 'gatsby-plugin-intl';

import { Project } from '../';
import './projects.scss';

interface ProjectsProps {
  edges: any;
  intl: IntlShape;
}

const Projects: React.FC<ProjectsProps> = ({ edges, intl }) => (
  <Fragment>
    <div className="projects">
      {edges.map(({ node }, key) => (
        <Link key={key} to={node.fields.slug} className="project-link">
          <Project {...node.frontmatter} />{' '}
        </Link>
      ))}
    </div>

    <Link to={`/projects`} className="back-arrow">
      <i className="ri-arrow-left-line ri-4x" />
    </Link>
  </Fragment>
);

export default injectIntl(Projects);
