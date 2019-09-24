import React from 'react';
import Helmet from 'react-helmet';

export default ({title}) => (
	<Helmet>
		<meta charSet="utf-8" />
		<title>{title} - Benoît Jeaurond</title>
	</Helmet>
)