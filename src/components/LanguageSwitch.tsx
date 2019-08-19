import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './LanguageSwitch.scss';
import LanguageContext from '../context/LanguageContext';

type LanguageSwitchProps = {
	language: string;
	setLanguage: any;
	toggleLang: any;
};

/**
 * The language switcher component located at the bottom rigth of the webpage to toggle the language
 * on the website between french and english. It is represented by the globe and displays the language
 * to be switched when the mouse hovers the component.
 */
const LanguageSwitch: React.FC<LanguageSwitchProps> = (props) => {
	const [hover, setHover] = useState(false);

	return (
		<LanguageContext.Consumer>
			{data => {
				return(
				<div className='language-switch'  onClick={data.toggleLang}>
					<a
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}>
						<Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={hover}>
							<p>{data.lang}</p>
						</Animated>
						<FontAwesomeIcon icon={faGlobeAmericas} size='lg' className='icon' />
					</a>
				</div>
			)}}
		</LanguageContext.Consumer>
	);
}

export default LanguageSwitch;
