/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

const SVGLogo: React.FC<any> = function SVGLogo({ className }) {
  return <img className={className} src={'/logo.svg'} alt="Logo" />;
};

export default SVGLogo;
