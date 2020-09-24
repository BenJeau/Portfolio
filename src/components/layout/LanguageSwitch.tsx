import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import { changeLocale, injectIntl, IntlShape } from 'gatsby-plugin-intl';

import './LanguageSwitch.scss';

interface LanguageSwitchProps {
  intl: IntlShape;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ intl }) => {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 101);
  });

  return (
    <div
      className="language-switch"
      onClick={() => changeLocale(intl.locale === 'en' ? 'fr' : 'en')}>
      <a
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={hover}
          animationInDuration={100}
          animationOutDuration={100}>
          <p style={{ opacity: visible ? 1 : 0 }}>
            {intl.locale === 'en' ? 'fr' : 'en'}
          </p>
        </Animated>
        <i className="ri-earth-fill ri-xl" />
      </a>
    </div>
  );
};

export default injectIntl(LanguageSwitch);
