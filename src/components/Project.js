import React from 'react';
import './Project.scss';

export default ({name, description, link}) => (
    <div className='project'>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
);