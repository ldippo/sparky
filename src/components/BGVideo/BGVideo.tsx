import React from 'react';
import {BackgroundVideoContainer, BGVideoContent} from './BGVideo.styles';

const BGVideo = React.memo(function BGVideo({ src, children, bgColor }: { src: string; children?: React.ReactNode, bgColor?: string }) {
    return (
      <BackgroundVideoContainer>
        <video
          autoPlay
          loop
          muted
          style={{
            minWidth: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <BGVideoContent bgColor={bgColor}>{children}</BGVideoContent>
      </BackgroundVideoContainer>
    );
  });

  export default BGVideo;