import { faEnvelope, faGlobe, faGraduationCap, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './About.scss';
import Strings from '../utils/Strings';
import LanguageContext from '../context/LanguageContext';

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
		<div className='about' style={{ display: 'flex' }}>
			<Animated animationIn='fadeIn' animationOut='fadeOut' isVisible>
				<div className={'modal'}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignContent: 'center',
						}}>
						<div className='content'>
							<div className='inner-content'>
								<div className='row'>
									<FontAwesomeIcon icon={faMapPin} size='lg' />
									<div className='text'>
										<p>{info.location}</p>
									</div>
								</div>
								<div className='row'>
									<div className='text'>
										<p>{info.education[0]}</p>
										<p>{info.education[1]}</p>
										<p>{info.education[2]}</p>
									</div>
									<FontAwesomeIcon icon={faGraduationCap} size='lg' />
								</div>
								<div className='row'>
									<FontAwesomeIcon icon={faGlobe} size='lg' />
									<div className='text'>
										<p>{info.languages}</p>
									</div>
								</div>
							</div>
							<p style={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: info.description }} />
							<a className='row' href={'mailto:' + info.email} style={{ marginTop: 20 }}>
								<div className='text'>
									<p>{info.email}</p>
								</div>
								<FontAwesomeIcon icon={faEnvelope} size='lg' />
							</a>
						</div>
					</div>
				</div>
			</Animated>
		  </div>
			)}}
		</LanguageContext.Consumer>
	);
}

export default About;
