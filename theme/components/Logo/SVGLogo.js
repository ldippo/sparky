/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ReactSVG } from 'react-svg';
const SVGLogo = function SVGLogo({ className }) {
    return React.createElement(ReactSVG, { src: "/logo.svg", className: className });
};
export default SVGLogo;
