import React, { useState } from 'react';
import Strings from '../../utils/Strings';
import LanguageContext from '../../context/LanguageContext';
import CircleElement from '../circleElement/CircleElement';

import './About.scss';

const About: React.FC = () => {
  const [, forceUpdate] = useState('');

  const info = Strings().about;

  return (
    <LanguageContext.Consumer>
      {(data) => {
        forceUpdate(data.lang);
        return (
          <div id="about">
            <div className="circles-container">
              <CircleElement label={info.languages} icon="ri-global-line" />
              <CircleElement label={info.location} icon="ri-road-map-line" />
              <CircleElement label={info.education} icon="ri-bank-line" />
            </div>

            <div id="about-content">
              <div className="title">
                <i className="em-svg em-wave ri-xl"></i>
                <p>{info.title}</p>
              </div>
              <div className="about-container">
                <p
                  className="about-text"
                  dangerouslySetInnerHTML={{ __html: info.description }}></p>
              </div>
              <div id="email">
                <a href="mailto:benoit@jeaurond.dev">
                  <i className="ri-mail-fill" /> benoit@jeaurond.dev
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default About;