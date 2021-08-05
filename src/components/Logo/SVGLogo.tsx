/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { ReactSVG } from 'react-svg';

const SVGLogo: React.FC<any> = function SVGLogo({ className }) {
  return <ReactSVG src="/logo.svg" />;
};

export default SVGLogo;
