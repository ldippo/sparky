"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const media_query_1 = require("@react-hook/media-query");
const color_thief_react_1 = require("color-thief-react");
require("../styles/global.css");
const SectionItem_1 = __importDefault(require("./SectionItem"));
const ContactForm_1 = __importDefault(require("./ContactForm"));
const Footer_1 = __importDefault(require("./Footer"));
const SideNav_1 = __importDefault(require("./SideNav"));
const Carousel_1 = __importDefault(require("./Carousel"));
const SplashView_1 = __importDefault(require("./SplashView"));
const Navigation_1 = __importDefault(require("./Navigation"));
const Containers_styles_1 = require("./Containers/Containers.styles");
const Layout = react_1.default.memo(function Layout({ navData, sectionData, templateKey, }) {
    const [selectedSection, setSelectedSection] = react_1.default.useState(0);
    const mediaUrl = react_1.default.useMemo(() => sectionData[selectedSection]?.slideMedia?.publicURL, [sectionData, selectedSection]);
    const { data: colorData, loading } = color_thief_react_1.useColor(mediaUrl || '#', 'hex');
    const [contrastColors, setContrastColors] = react_1.default.useState([
        'white',
        'black',
    ]);
    react_1.default.useEffect(() => {
        if (!mediaUrl)
            setContrastColors(['white', 'black']);
        else if (colorData && !loading)
            setContrastColors(pickTextColor(colorData, 'white', 'black'));
    }, [colorData, loading, mediaUrl]);
    const navItems = react_1.default.useMemo(() => sectionData.map(({ title }, i) => ({
        onClick() {
            setSelectedSection(i);
            carouselRef.current.changeSlide(i - selectedSection);
        },
        text: title,
    })), [sectionData, selectedSection]);
    const sectionItems = react_1.default.useMemo(() => sectionData.map(({ title, body, slideMedia, titleSuperText, slideVideo, actionButton, }) => ({
        title,
        superText: titleSuperText,
        imageSrc: slideMedia?.publicURL,
        videoSrc: slideVideo,
        body,
        actionButton: actionButton,
    })), [sectionData]);
    const carouselRef = react_1.default.useRef();
    const isTiny = media_query_1.useMediaQuery('only screen and (max-width: 768px)');
    return (react_1.default.createElement(Containers_styles_1.AppContainer, { templateKey: templateKey },
        react_1.default.createElement(Navigation_1.default, { navData: navData, contrastColors: contrastColors }),
        react_1.default.createElement(Containers_styles_1.MainContainer, null, templateKey === 'home' ? (react_1.default.createElement(SplashView_1.default, { videoSrc: "https://vftassets.s3.amazonaws.com/VFT_Animation.mp4", overlayColor: "rgba(0,0,0,0.65)" })) : templateKey === 'cardPage' ? (react_1.default.createElement(ContactForm_1.default, null)) : (react_1.default.createElement(react_1.default.Fragment, null,
            sectionItems.length > 1 ? (react_1.default.createElement(SideNav_1.default, { selectedIdx: selectedSection, navItems: navItems, contrastColors: contrastColors })) : null,
            react_1.default.createElement(Containers_styles_1.ContentContainer, { templateKey: templateKey, isTiny: isTiny }, sectionItems.length && !isTiny ? (react_1.default.createElement(Carousel_1.default, { ref: carouselRef, curPage: selectedSection }, sectionItems.map((section) => (react_1.default.createElement(SectionItem_1.default, { section: section, key: section.title }))))) : sectionItems.length ? (sectionItems.map((section) => (react_1.default.createElement(SectionItem_1.default, { section: section, key: section.title })))) : (react_1.default.createElement("div", null)))))),
        react_1.default.createElement(Footer_1.default, null)));
});
exports.default = Layout;
function pickTextColor(bgColor, lightColor, darkColor) {
    const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    const light = r * 0.299 + g * 0.587 + b * 0.114 > 100;
    return light ? [darkColor, lightColor] : [lightColor, darkColor];
}
