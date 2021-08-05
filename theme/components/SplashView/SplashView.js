import React from 'react';
import GatLink from 'gatsby-link';
import { css } from '@emotion/react';
import LogoContainer from '../Logo/LogoContainer.styles';
import SVGLogo from '../Logo/SVGLogo';
import { CTAButtonLarge } from '../CTAButton/CTAButton.styles';
import BGVideo from '../BGVideo';
import { SplashContentContainer, ImageContainer, } from '../Containers/Containers.styles';
const SplashView = ({ videoSrc, imageSrc, overlayColor }) => {
    const content = (React.createElement(React.Fragment, null,
        React.createElement(LogoContainer, { splash: true },
            React.createElement(SVGLogo, { css: css `
            img path {
              fill: white;
              color: 'white';
              width: '100%';
              height: 'auto';
            }
          ` })),
        React.createElement(GatLink, { to: "/contact" },
            React.createElement(CTAButtonLarge, null, "Contact Us"))));
    return (React.createElement(React.Fragment, null, videoSrc ? (React.createElement(BGVideo, { src: videoSrc, bgColor: overlayColor },
        React.createElement(SplashContentContainer, null, content))) : (React.createElement(ImageContainer, { imgSrc: imageSrc || '', bgColor: overlayColor },
        React.createElement(SplashContentContainer, null, content)))));
};
export default SplashView;
