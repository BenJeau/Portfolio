import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import ReactTextTransition, { presets } from 'react-text-transition';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import './Home.scss';

const animationIn = 'fadeIn';
const animationOut = 'fadeOut';
const bubbleContent = [
  {
    link:
      'https://stackoverflow.com/users/11006837/benoît-jeaurond?tab=profile',
    icon: 'ri-stack-overflow-fill',
    ariaLabel: 'Check me on Stack Overflow',
  },
  {
    link: 'https://www.linkedin.com/in/benoit-jeaurond',
    icon: 'ri-linkedin-box-fill',
    ariaLabel: 'Check my LinkedIn page',
  },
  {
    link: 'https://github.com/BenJeau',
    icon: 'ri-github-fill',
    ariaLabel: 'Check my Github page',
  },
];

interface HomeProps {
  intl: IntlShape;
}

const Home: React.FC<HomeProps> = ({ intl }) => {
  let inter: any;

  const [textIndex, setTextIndex] = useState(0);
  const [showBigBubble, setShowBigBubble] = useState(false);
  const [bubbleMouse, setBubbleMouse] = useState(false);
  const [isSmallWidth, setIsSmallWidth] = useState(false);

  const query = graphql`
    query {
      fileName: file(relativePath: { eq: "assets/images/profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  useEffect(() => {
    animate();
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      window.clearInterval(inter);
    };
  });

  const resize = () => {
    if (window.innerWidth > 500) {
      if (isSmallWidth) setIsSmallWidth(false);
    } else {
      if (!isSmallWidth) setIsSmallWidth(true);
    }
  };

  const bubbleOnMouseOver = () => {
    setBubbleMouse(true);
    setTimeout(() => setShowBigBubble(true), 300);
  };

  const bubbleOnMouseLeave = () => {
    setBubbleMouse(false);
    setTimeout(() => setShowBigBubble(false), 300);
  };

  const animate = () => {
    inter = window.setInterval(() => {
      setTextIndex(textIndex + 1);

      if (textIndex % 4 === 3) {
        window.clearInterval(inter);
        window.setTimeout(() => {
          animate();
        }, 5000);
      }
    }, 1500);
  };

  const render = (data) => (
    <div className="home">
      <div className="profile-container">
        <div className="picture-container">
          <Img
            fluid={data.fileName.childImageSharp.fluid}
            alt="Profile picture"
            className="picture"
            style={{ borderRadius: 150 }}
          />

          <div
            className="bubble"
            onMouseOver={bubbleOnMouseOver}
            onMouseLeave={bubbleOnMouseLeave}>
            <Animated
              animationIn={animationIn}
              animationOut={animationOut}
              isVisible={(showBigBubble && bubbleMouse) || isSmallWidth}
              style={{
                display:
                  (showBigBubble && bubbleMouse) || isSmallWidth
                    ? 'flex'
                    : 'none',
              }}
              className="social">
              {bubbleContent.map(({ link, icon, ariaLabel }, key) => (
                <a
                  href={link}
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}>
                  <i className={icon + ' ri-xl icon'}></i>
                </a>
              ))}
            </Animated>

            <Animated
              animationIn={animationIn}
              animationOut={animationOut}
              isVisible={!((showBigBubble && bubbleMouse) || isSmallWidth)}
              style={{
                display: !((showBigBubble && bubbleMouse) || isSmallWidth)
                  ? 'flex'
                  : 'none',
              }}>
              <i className="ri-share-line ri-xl"></i>
            </Animated>
          </div>
        </div>

        <div className="home-text">
          <h1>
            <span id="first-name">Benoît</span>
            <span id="last-name">Jeaurond</span>
          </h1>

          {presets && (
            <ReactTextTransition
              text={
                [
                  intl.formatMessage({ id: 'home.ui' }),
                  intl.formatMessage({ id: 'home.forensics' }),
                  intl.formatMessage({ id: 'home.dev' }),
                  intl.formatMessage({ id: 'home.student' }),
                ][textIndex % 4]
              }
              style={{ margin: '0 4px 0 0' }}
              spring={presets.wobbly}
              inline
              overflow
            />
          )}
        </div>
      </div>
    </div>
  );

  return <StaticQuery query={query} render={render} />;
};

export default injectIntl(Home);
