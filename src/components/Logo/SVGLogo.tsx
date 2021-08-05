/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';

const SVGLogo: React.FC<any> = function SVGLogo({ style }) {
  return <img style={style} src={'/logo.svg'} alt="Logo" />;
};

export default SVGLogo;
