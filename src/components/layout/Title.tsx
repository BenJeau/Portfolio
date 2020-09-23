import React from 'react';
import Helmet from 'react-helmet';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title} - Benoît Jeaurond</title>
  </Helmet>
);

export default Title;
