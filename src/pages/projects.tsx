import React from 'react';
import {
  FormattedMessage,
  injectIntl,
  IntlShape,
  Link,
} from 'gatsby-plugin-intl';

import { Layout, CircleElement } from '../components';
import './projects.scss';

interface ProjectsProps {
  intl: IntlShape;
}

const Projects: React.FC<ProjectsProps> = ({ intl }) => (
  <Layout
    title={intl.formatMessage({ id: 'navigation.pages.projects' })}
    className="layout">
    <p className="warning">
      The list of projects is currently outdated, please see my activity on{' '}
      <a
        href="https://github.com/BenJeau"
        target="_blank"
        rel="noopener noreferrer">
        GitHub
      </a>
    </p>
    <div className="project-sections">
      <Link to="/projects/mobile" className="project-section">
        <CircleElement
          label={<FormattedMessage id="project.section.mobile" />}
          icon="ri-smartphone-line"
          top
        />
      </Link>
      <Link to="/projects/games" className="project-section">
        <CircleElement
          label={<FormattedMessage id="project.section.games" />}
          icon="ri-trophy-line"
          top
        />
      </Link>
      <Link to="/projects/other" className="project-section">
        <CircleElement
          label={<FormattedMessage id="project.section.other" />}
          icon="ri-article-line"
          top
        />
      </Link>
    </div>
  </Layout>
);

export default injectIntl(Projects);
