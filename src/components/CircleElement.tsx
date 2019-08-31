import React from 'react';
import './CircleElement.scss';

type CircleElementProps = {
	label: string,
	icon: string,
	color: string
};

const CircleElement: React.FC<CircleElementProps> = ({icon, label}) => (
	<div className='circle-element'>
		<div className='circle'>
			<i className={icon + ' ri-2x'} />
		</div>

		<p className='circle-label'>{label}</p>
	</div>
);

export default CircleElement;