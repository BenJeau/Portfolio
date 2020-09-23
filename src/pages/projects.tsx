import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { Layout, CircleElement } from '../components';
import { LanguageContext } from '../context';
import Strings from '../utils/Strings';

import './projects.scss';

const Projects: React.FC = () => {
  const [, forceUpdate] = useState('');

  const info = Strings().navigation.pages;
  const section = Strings().project.section;

  return (
    <LanguageContext.Consumer>
      {(da) => {
        forceUpdate(da.lang);
        return (
          <Layout
            title={info[1]}
            css={css`
              min-height: 100vh;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            `}>
            <p
              css={css`
                opacity: 0.7;
                text-align: center;
              `}>
              The list of projects is currently outdated, please see my activity
              on{' '}
              <a
                href="https://github.com/BenJeau"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            <div
              css={css`
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 40px;
              `}>
              <Link to="/projects/mobile" className="project-section">
                <CircleElement
                  label={section[0]}
                  icon="ri-smartphone-line"
                  top
                />
              </Link>
              <Link to="/projects/games" className="project-section">
                <CircleElement label={section[1]} icon="ri-trophy-line" top />
              </Link>
              <Link to="/projects/other" className="project-section">
                <CircleElement label={section[3]} icon="ri-article-line" top />
              </Link>
            </div>
          </Layout>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default Projects;
