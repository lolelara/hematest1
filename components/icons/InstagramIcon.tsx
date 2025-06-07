
import React from 'react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C8.74 2 8.333.017 7.053.002 5.77.017 5.378 2 2.118 2S1.983 3.333 2.003 4.613c.017 1.283.41 1.695 3.67 1.695S7 5.333 7.002 4.053C7.017 2.77.622 2 3.882 2h8.236zm0 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zm6.406-11.125a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20a8 8 0 110-16 8 8 0 010 16z" clipRule="evenodd" />
     <path d="M16.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0M12 8a4 4 0 100 8 4 4 0 000-8m0-2a6 6 0 110 12A6 6 0 0112 6m6-5H6a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V6a5 5 0 00-5-5"/>
  </svg>
);

export default InstagramIcon;
