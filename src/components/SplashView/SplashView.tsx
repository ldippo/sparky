import React from 'react';
import { Link as GatLink } from 'gatsby';

import LogoContainer from '../Logo/LogoContainer.styles';
import SVGLogo from '../Logo/SVGLogo';
import { CTAButtonLarge } from '../CTAButton/CTAButton.styles';
import BGVideo from '../BGVideo';
import { SplashContentContainer, ImageContainer } from '../Containers/Containers.styles';

const SplashView = ({
	videoSrc,
	imageSrc,
	overlayColor,
}: {
	videoSrc?: string;
	imageSrc?: string;
	overlayColor?: string;
}) => {
	const content = (
		<>
			<LogoContainer splash>
				<SVGLogo
					style={{
						fill: 'white',
						color: 'white',
						width: '100%',
						height: 'auto',
					}}
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
					<SplashContentContainer>
						{content}
					</SplashContentContainer>
				</BGVideo>
			) : (
				<ImageContainer imgSrc={imageSrc} bgColor={overlayColor}>
					<SplashContentContainer>
						{content}
					</SplashContentContainer>
				</ImageContainer>
			)}
		</>
	);
};

export default SplashView;
