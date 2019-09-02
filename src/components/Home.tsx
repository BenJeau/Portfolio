import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import ReactTextTransition, { presets } from 'react-text-transition';
import Strings from '../utils/Strings';
import './Home.scss';
import { css } from "@emotion/core"
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

type HomeProps = {
	setPageNumber: any;
	language: string;
};

const Home: React.FC<HomeProps> = (props) => {
	let inter: any;

	const [textIndex, setTextIndex] = useState(0);
	const [showBigBubble, setShowBigBubble] = useState(false);
	const [bubbleMouse, setBubbleMouse] = useState(false);
	const [isSmallWidth, setIsSmallWidth] = useState(false);

	const animationIn = 'fadeIn';
	const animationOut = 'fadeOut';
	const bubbleContent = [
		{ link: 'https://stackoverflow.com/users/11006837/benoît-jeaurond?tab=profile', icon: 'remixicon-stack-overflow-fill', ariaLabel:'Check me on Stack Overflow' }, 
		{ link: 'https://www.linkedin.com/in/benoit-jeaurond', icon: 'remixicon-linkedin-box-fill', ariaLabel: 'Check my LinkedIn page' },
		{ link: 'https://github.com/BenJeau', icon: 'remixicon-github-fill', ariaLabel: 'Check my Github page' },
		{ link: 'mailto:benoit@jeaurond.dev', icon: 'remixicon-mail-fill', ariaLabel: 'Send me an email!' },
	];

	const info = Strings().home;
	const query = graphql`
		query {
			fileName: file(relativePath: { eq: "images/profile.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}`;

	useEffect(() => {
		animate();
		window.addEventListener('resize', resize);
		resize();

		return () => {
			window.removeEventListener('resize', resize);
			window.clearInterval(inter);
		}
	})

	const resize = () => {
		if (window.innerWidth > 500) {
			if (isSmallWidth) setIsSmallWidth(false);
		} else {
			if (!isSmallWidth) setIsSmallWidth(true);
		}
	};

	const bubbleOnMouseOver = () => {
		setBubbleMouse(true);
		setTimeout(() => setShowBigBubble(true), 300);
	};

	const bubbleOnMouseLeave = () => {
		setBubbleMouse(false);
		setTimeout(() => setShowBigBubble(false), 300);
	};

	const animate = () => {
		inter = window.setInterval(() => {
			setTextIndex(textIndex + 1);

			if (textIndex % 4 === 3) {
				window.clearInterval(inter);
				window.setTimeout(() => {
					animate();
				}, 5000);
			}
		}, 1500);
	};

	const render = (data) => (
		<div className='home'>
			<div className='profile-container'>
				<div className='picture-container'>
						<Img fluid={data.fileName.childImageSharp.fluid} alt="Profile picture" className='picture' style={{borderRadius: 150}}/>
					
						<div className='bubble' onMouseOver={bubbleOnMouseOver} onMouseLeave={bubbleOnMouseLeave}>
							<Animated
								animationIn={animationIn}
								animationOut={animationOut}
								isVisible={(showBigBubble && bubbleMouse) || isSmallWidth}
								style={{ display: (showBigBubble && bubbleMouse) || isSmallWidth ? 'flex' : 'none' }}
								className='social'>
								{bubbleContent.map(({ link, icon, ariaLabel }, key) => (
									<a href={link} key={key} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel}>
										<i className={icon + ' ri-xl icon'}></i>
									</a>
								))}
							</Animated>

							<Animated
								animationIn={animationIn}
								animationOut={animationOut}
								isVisible={!((showBigBubble && bubbleMouse) || isSmallWidth)}
								style={{ display: !((showBigBubble && bubbleMouse) || isSmallWidth) ? 'flex' : 'none' }}>
									<i className="remixicon-share-line ri-xl"></i>
							</Animated>
						</div>
				</div>

				<div className='home-text'>
					<h1 css={css`display: flex`}>
						<span id='first-name'>Benoît</span>
						<span id='last-name'>Jeaurond</span>
					</h1>

					<ReactTextTransition
						text={info.description[textIndex % info.description.length]}
						style={{ margin: '0 4px 0 0' }}
						spring={presets ? presets.wobbly : null}
						inline
						overflow />
				</div>
			</div>
		</div>
	);

	return <StaticQuery query={query} render={render}/>;
}

export default Home;