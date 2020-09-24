import React from 'react';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

interface Error404Props {
  intl: IntlShape;
}

const Error404: React.FC<Error404Props> = ({ intl }) => {
  if (typeof window !== 'undefined') {
    window.location.replace(`/${intl.locale}`);
  }

  return null;
};

export default injectIntl(Error404);
