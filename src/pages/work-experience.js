import React, { useState } from "react"
import Layout from "../components/layout"
import LanguageContext from '../context/LanguageContext';
import Strings from '../utils/Strings';

export default () => {
	const [, forceUpdate] = useState('');

	const info = Strings().navigation.pages;

	return (
		<LanguageContext.Consumer>
			{data => {
				forceUpdate(data.lang);
				return (
					<Layout title={info[2]}>
						<p>Hi there</p>
					</Layout>)
			}}
		</LanguageContext.Consumer>
	)
};