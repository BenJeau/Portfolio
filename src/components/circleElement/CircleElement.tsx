import React from 'react';

import './CircleElement.scss';

interface CircleElementProps {
  label: React.ReactElement;
  icon: string;
  top?: boolean;
}

const CircleElement: React.FC<CircleElementProps> = ({ icon, label, top }) => (
  <div className="circle-element">
    {top && <p className="circle-label">{label}</p>}

    <div className="circle">
      <i className={`${icon} ri-2x`} />
    </div>

    {!top && <p className="circle-label">{label}</p>}
  </div>
);

export default CircleElement;
