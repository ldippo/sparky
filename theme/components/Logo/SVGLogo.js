/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
const SVGLogo = function SVGLogo({ className }) {
    return (React.createElement("svg", null,
        React.createElement("use", { href: "/logo.svg", className: className })));
};
export default SVGLogo;
