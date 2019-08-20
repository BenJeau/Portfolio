import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Animated } from 'react-animated-css';
import './LanguageSwitch.scss';
import LanguageContext from '../context/LanguageContext';

/**
 * The language switcher component located at the bottom rigth of the webpage to toggle the language
 * on the website between french and english. It is represented by the globe and displays the language
 * to be switched when the mouse hovers the component.
 */
const LanguageSwitch: React.FC = (props) => {
	const [hover, setHover] = useState(false);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 101)
	})

	return (
		<LanguageContext.Consumer>
			{data => {
				return(
				<div className='language-switch'  onClick={data.toggleLang}>
					<a
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}>
						<Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={hover} animationInDuration={100} animationOutDuration={100}>
							<p style={{opacity: visible ? 1 : 0}}>{data.lang}</p>
						</Animated>
						<FontAwesomeIcon icon={faGlobeAmericas} size='lg' className='icon' />
					</a>
				</div>
			)}}
		</LanguageContext.Consumer>
	);
}

export default LanguageSwitch;
