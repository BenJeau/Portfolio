import React from 'react';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';

import { About, Home, Layout } from '../components';

interface HomePageProps {
  intl: IntlShape;
}

const HomePage: React.FC<HomePageProps> = ({ intl }) => (
  <Layout
    title={intl.formatMessage({ id: 'navigation.pages.home' })}
    className="home-container">
    <Home />
    <About />
  </Layout>
);

export default injectIntl(HomePage);
