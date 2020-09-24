import React, { Fragment } from 'react';
import feather from 'feather-icons';
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

    <div className="back-arrow-background" />

    <Link
      to={`/projects`}
      className="back-arrow"
      dangerouslySetInnerHTML={{
        __html: feather.icons['arrow-left'].toSvg({ height: 50, width: 50 }),
      }}
    />
  </Fragment>
);

export default injectIntl(Projects);
