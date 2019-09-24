import React, { useState } from "react";
import Layout from "../components/layout";
import Home from "../components/Home";
import About from "../components/About";
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
					<Layout title={info[0]} className='home-container'>
						<Home />
						<About />
					</Layout>)
			}}
		</LanguageContext.Consumer>
	)
};