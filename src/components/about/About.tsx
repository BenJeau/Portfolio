import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { CircleElement } from '../';
import './About.scss';

const About: React.FC = () => (
  <div id="about">
    <div className="circles-container">
      <CircleElement
        label={<FormattedMessage id="about.languages" />}
        icon="ri-global-line"
      />
      <CircleElement
        label={<FormattedMessage id="about.location" />}
        icon="ri-road-map-line"
      />
      <CircleElement
        label={<FormattedMessage id="about.education" />}
        icon="ri-bank-line"
      />
    </div>

    <div id="about-content">
      <div className="title">
        <i className="em-svg em-wave ri-xl"></i>
        <p>
          <FormattedMessage id="about.title" />
        </p>
      </div>
      <div className="about-container">
        <p className="about-text">
          <FormattedMessage id="about.description" />
        </p>
      </div>
      <div id="email">
        <a href="mailto:benoit@jeaurond.dev">
          <i className="ri-mail-fill" /> benoit@jeaurond.dev
        </a>
      </div>
    </div>
  </div>
);

export default About;
