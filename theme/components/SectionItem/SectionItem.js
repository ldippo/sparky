/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';
import gfm from 'remark-gfm';
import { AnimatePresence } from 'framer-motion';
import { SubGrid, TinySubGridInfo, BigSubGridInfo, } from '../SubGrid/SubGrid.styles';
import { MarkDownContainer, ImageContainer, } from '../Containers/Containers.styles';
import TextTitle from '../TextTitle/TextTitle.styles';
import BGVideo from '../BGVideo/BGVideo';
import { CTAButton } from '../CTAButton/CTAButton.styles';
import { navigate } from 'gatsby-link';
const motionProps = [0, 1, 2, 3].map((x) => ({
    transition: {
        delay: 0.5 + x * 0.5,
        type: 'tween',
        duration: 0.5,
        ease: 'easeInOut',
    },
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
}));
const SectionItem = ({ section }) => {
    const tiny = useMediaQuery('only screen and (max-width: 768px)');
    const SubGridInfo = React.useMemo(() => (tiny ? TinySubGridInfo : BigSubGridInfo), [tiny]);
    function clickCTA() {
        if (section?.actionButton?.url) {
            navigate(section.actionButton.url);
        }
    }
    return (React.createElement("div", { style: { width: '100%' } },
        React.createElement(AnimatePresence, null, section && section?.imageSrc ? (
        //This nested ternary operator is due to a difference in behavior between regular and CMS views:
        //   Normally, imageSrc returns undefined when no image, but in Netlify it returns an imageSrc object with path="empty.svg"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        section.imageSrc.path === 'empty.svg' ? (React.createElement(MarkDownContainer, { key: section.title, style: { padding: '104px 32px 0' } },
            React.createElement(motion.div, Object.assign({}, motionProps[0]), section.superText),
            React.createElement(motion.h1, Object.assign({}, motionProps[1], { style: { paddingTop: 0, marginTop: 0 } }), section.title),
            section.body && (React.createElement(motion.div, Object.assign({}, motionProps[2]),
                React.createElement(ReactMarkdown, { remarkPlugins: [gfm] }, section.body))))) : (React.createElement(SubGrid, { key: section.title, className: "SubGrid" },
            section.videoSrc ? (React.createElement(BGVideo, { src: section.videoSrc })) : (React.createElement(ImageContainer, { className: "ImageContainer", imgSrc: section.imageSrc })),
            React.createElement(SubGridInfo, { className: "SubGridInfo" },
                React.createElement(TextTitle, { flex: 1 },
                    React.createElement(motion.h2, Object.assign({}, motionProps[0]), section.superText),
                    React.createElement(motion.h1, Object.assign({}, motionProps[1]), section.title)),
                React.createElement(MarkDownContainer, Object.assign({ flex: 3 }, motionProps[2]),
                    section.body && (React.createElement(ReactMarkdown, { remarkPlugins: [gfm] }, section.body || '')),
                    section.actionButton?.text ? (React.createElement(CTAButton, { onClick: clickCTA }, section.actionButton.text)) : null))))) : (React.createElement(MarkDownContainer, { key: section.title, style: { padding: '104px 32px 0' } },
            React.createElement(motion.div, Object.assign({}, motionProps[0]), section.superText),
            React.createElement(motion.h1, Object.assign({}, motionProps[1], { style: { paddingTop: 0, marginTop: 0 } }), section.title),
            React.createElement(motion.div, Object.assign({}, motionProps[2]), section.body && (React.createElement(ReactMarkdown, { remarkPlugins: [gfm] }, section.body))))))));
};
export default SectionItem;
