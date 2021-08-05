"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const react_1 = __importDefault(require("react"));
const react_markdown_1 = __importDefault(require("react-markdown"));
const media_query_1 = require("@react-hook/media-query");
const framer_motion_1 = require("framer-motion");
const remark_gfm_1 = __importDefault(require("remark-gfm"));
const framer_motion_2 = require("framer-motion");
const SubGrid_styles_1 = require("../SubGrid/SubGrid.styles");
const Containers_styles_1 = require("../Containers/Containers.styles");
const TextTitle_styles_1 = __importDefault(require("../TextTitle/TextTitle.styles"));
const BGVideo_1 = __importDefault(require("../BGVideo/BGVideo"));
const CTAButton_styles_1 = require("../CTAButton/CTAButton.styles");
const gatsby_link_1 = require("gatsby-link");
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
    const tiny = media_query_1.useMediaQuery('only screen and (max-width: 768px)');
    const SubGridInfo = react_1.default.useMemo(() => (tiny ? SubGrid_styles_1.TinySubGridInfo : SubGrid_styles_1.BigSubGridInfo), [tiny]);
    function clickCTA() {
        const isAppLink = section?.actionButton?.url?.charAt(0) === '/';
        if (section?.actionButton?.url) {
            if (isAppLink) {
                gatsby_link_1.navigate(section.actionButton.url);
            }
            else {
                window.open(`${section.actionButton.url}`, '_blank');
            }
        }
    }
    return (react_1.default.createElement(framer_motion_2.AnimatePresence, null, section && section?.imageSrc ? (
    //This nested ternary operator is due to a difference in behavior between regular and CMS views:
    //   Normally, imageSrc returns undefined when no image, but in Netlify it returns an imageSrc object with path="empty.svg"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    section.imageSrc.path === 'empty.svg' ? (react_1.default.createElement(Containers_styles_1.MarkDownContainer, { key: section.title, style: { padding: '104px 32px 0' } },
        react_1.default.createElement(framer_motion_1.motion.div, Object.assign({}, motionProps[0]), section.superText),
        react_1.default.createElement(framer_motion_1.motion.h1, Object.assign({}, motionProps[1], { style: { paddingTop: 0, marginTop: 0 } }), section.title),
        section.body && (react_1.default.createElement(framer_motion_1.motion.div, Object.assign({}, motionProps[2]),
            react_1.default.createElement(react_markdown_1.default, { remarkPlugins: [remark_gfm_1.default] }, section.body))))) : (react_1.default.createElement(SubGrid_styles_1.SubGrid, { key: section.title, className: "SubGrid" },
        section.videoSrc ? (react_1.default.createElement(BGVideo_1.default, { src: section.videoSrc })) : (react_1.default.createElement(Containers_styles_1.ImageContainer, { className: "ImageContainer", imgSrc: section.imageSrc })),
        react_1.default.createElement(SubGridInfo, { className: "SubGridInfo" },
            react_1.default.createElement(TextTitle_styles_1.default, { flex: 1 },
                react_1.default.createElement(framer_motion_1.motion.h2, Object.assign({}, motionProps[0]), section.superText),
                react_1.default.createElement(framer_motion_1.motion.h1, Object.assign({}, motionProps[1]), section.title)),
            react_1.default.createElement(Containers_styles_1.MarkDownContainer, Object.assign({ flex: 3 }, motionProps[2]),
                section.body && (react_1.default.createElement(react_markdown_1.default, { remarkPlugins: [remark_gfm_1.default] }, section.body || '')),
                section.actionButton?.text ? (react_1.default.createElement(CTAButton_styles_1.CTAButton, { onClick: clickCTA }, section.actionButton.text)) : null))))) : (react_1.default.createElement(Containers_styles_1.MarkDownContainer, { key: section.title, style: { padding: '104px 32px 0' } },
        react_1.default.createElement(framer_motion_1.motion.div, Object.assign({}, motionProps[0]), section.superText),
        react_1.default.createElement(framer_motion_1.motion.h1, Object.assign({}, motionProps[1], { style: { paddingTop: 0, marginTop: 0 } }), section.title),
        react_1.default.createElement(framer_motion_1.motion.div, Object.assign({}, motionProps[2]), section.body && (react_1.default.createElement(react_markdown_1.default, { remarkPlugins: [remark_gfm_1.default] }, section.body)))))));
};
exports.default = SectionItem;
