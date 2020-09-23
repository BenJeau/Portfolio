import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { LanguageContext } from '../../context';
import { oppositeLang } from '../../utils/Strings';

import './LanguageSwitch.scss';

const LanguageSwitch: React.FC = (props) => {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 101);
  });

  return (
    <LanguageContext.Consumer>
      {(data) => {
        return (
          <div className="language-switch" onClick={data.toggleLang}>
            <a
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={hover}
                animationInDuration={100}
                animationOutDuration={100}>
                <p style={{ opacity: visible ? 1 : 0 }}>{oppositeLang()}</p>
              </Animated>
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                size="lg"
                className="icon"
              />
            </a>
          </div>
        );
      }}
    </LanguageContext.Consumer>
  );
};

export default LanguageSwitch;
