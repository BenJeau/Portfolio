import React, { useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Layout from "../components/layout"

import './projects.scss';

import LanguageContext from '../context/LanguageContext';
import Strings from '../utils/Strings';
import CircleElement from "../components/CircleElement"

export default () => {
	const [, forceUpdate] = useState('');

	const info = Strings().navigation.pages;
	const section = Strings().project.section;

	return (
		<LanguageContext.Consumer>
			{da => {
				forceUpdate(da.lang);
				return (
					<Layout title={info[1]} css={css`min-height: 100vh; display: flex; justify-content: center;`}>
						<div css={css`display:flex; justify-content:center; flex-wrap: wrap`}>
							<Link to='/projects/mobile' className='project-section'><CircleElement label={section[0]} icon='remixicon-smartphone-line' top/></Link>
							<Link to='/projects/games' className='project-section'><CircleElement label={section[1]} icon='remixicon-trophy-line' top/></Link>
							<Link to='/projects/robotics' className='project-section'><CircleElement label={section[2]} icon='remixicon-robot-line' top/></Link>
							<Link to='/projects/other' className='project-section'><CircleElement label={section[3]} icon='remixicon-article-line' top/></Link>
						</div>
					</Layout>
				)
			}}
		</LanguageContext.Consumer>
	)
}