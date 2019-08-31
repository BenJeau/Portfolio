import { faEnvelope, faGlobe, faGraduationCap, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './About.scss';
import Strings from '../utils/Strings';
import LanguageContext from '../context/LanguageContext';
import CircleElement from './CircleElement';

type AboutProps = {
	setPageNumber: any;
	pageNumber: number;
	previousPageNumber: number;
	language: string;
	setAboutVisibility: any;
	visible: boolean;
	location: any;
};

/**
 * A modal like component which displays information about the person
 */
const About: React.FC<AboutProps> = (props) => {
	const [, forceUpdate] = useState('');

	const info = Strings().about;

	return (
		<LanguageContext.Consumer>
			{data => {
				forceUpdate(data.lang);
				return(
					<div id='about'>
						<div className='circles-container'>
							<CircleElement label={info.languages} icon="remixicon-global-line" />
							<CircleElement label={info.location} icon="remixicon-road-map-line" />
							<CircleElement label={info.education} icon="remixicon-bank-line" />
						</div>
						
						<div id='about-content'>
							<div className='title'>
								<i class="em-svg em-wave ri-xl"></i>
								<p>{info.title}</p>
							</div>
							<div className='about-container'>
								<p className='about-text' dangerouslySetInnerHTML={{__html: info.description}}>
								</p>
							</div>
						</div>
					</div>
			)}}
		</LanguageContext.Consumer>
	);
}

export default About;
