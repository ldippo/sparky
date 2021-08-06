import React from 'react';
import { BackgroundVideoContainer, BGVideoContent } from './BGVideo.styles';
const BGVideo = React.memo(function BGVideo({ src, children, bgColor, }) {
    return (React.createElement(BackgroundVideoContainer, null,
        React.createElement("video", { autoPlay: true, loop: true, muted: true, style: {
                minWidth: '100%',
                width: '100%',
                height: '100%',
                minHeight: 300,
                objectFit: 'cover',
                objectPosition: 'center center',
            } },
            React.createElement("source", { src: src, type: "video/mp4" }),
            "Your browser does not support the video tag."),
        React.createElement(BGVideoContent, { bgColor: bgColor }, children)));
});
export default BGVideo;
