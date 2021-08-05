import React from 'react';
import GatLink from 'gatsby-link';
import { css } from '@emotion/react';
import LogoContainer from '../Logo/LogoContainer.styles';
import SVGLogo from '../Logo/SVGLogo';
import { CTAButtonLarge } from '../CTAButton/CTAButton.styles';
import BGVideo from '../BGVideo';
import {
  SplashContentContainer,
  ImageContainer,
} from '../Containers/Containers.styles';

const SplashView: React.FC<{
  videoSrc?: string;
  imageSrc?: string;
  overlayColor?: string;
}> = ({ videoSrc, imageSrc, overlayColor }) => {
  const content = (
    <>
      <LogoContainer splash>
        <SVGLogo
          css={css({
            '& svg': {
              color: 'white',
              width: '100%',
              height: 'auto',
              fill: 'white',
            },
            '& path': {
              fill: 'white',
              color: 'white',
              width: '100%',
              height: 'auto',
            },
          })}
        />
      </LogoContainer>
      <GatLink to="/contact">
        <CTAButtonLarge>Contact Us</CTAButtonLarge>
      </GatLink>
    </>
  );

  return (
    <>
      {videoSrc ? (
        <BGVideo src={videoSrc} bgColor={overlayColor}>
          <SplashContentContainer>{content}</SplashContentContainer>
        </BGVideo>
      ) : (
        <ImageContainer imgSrc={imageSrc || ''} bgColor={overlayColor}>
          <SplashContentContainer>{content}</SplashContentContainer>
        </ImageContainer>
      )}
    </>
  );
};

export default SplashView;
