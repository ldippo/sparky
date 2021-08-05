/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

const SVGLogo: React.FC<any> = function SVGLogo({ className }) {
  return (
    <svg>
      <use href="/logo.svg" className={className} />
    </svg>
  );
};

export default SVGLogo;
