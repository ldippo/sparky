"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const media_query_1 = require("@react-hook/media-query");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const Navigation_styles_1 = require("./Navigation.styles");
const LogoContainer_styles_1 = __importDefault(require("../Logo/LogoContainer.styles"));
const Link_1 = __importDefault(require("../Link/Link"));
const SVGLogo_1 = __importDefault(require("../Logo/SVGLogo"));
const Navigation = function Navigation({ navData, contrastColors, }) {
    const isTiny = media_query_1.useMediaQuery('only screen and (max-width: 768px)');
    const [openDrawer, setOpenDrawer] = react_1.default.useState(false);
    const NavComponent = react_1.default.useMemo(() => (isTiny ? Navigation_styles_1.TinyNav : Navigation_styles_1.Nav), [isTiny]);
    const openDrawerCb = react_1.default.useCallback(() => setOpenDrawer((prev) => !prev), []);
    const closeDrawerCb = react_1.default.useCallback(() => setOpenDrawer(false), []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(framer_motion_1.AnimateSharedLayout, null,
            react_1.default.createElement(framer_motion_1.AnimatePresence, null, openDrawer && isTiny && (react_1.default.createElement(Navigation_styles_1.DrawerNav, { initial: { height: 0, opacity: 0 }, animate: {
                    height: '100%',
                    opacity: 1,
                    color: contrastColors[1],
                    backgroundColor: contrastColors[0],
                }, transition: { delay: 0.25 } },
                react_1.default.createElement(Navigation_styles_1.DrawerLinks, null, navData.map(({ label, path }, i) => (react_1.default.createElement(Navigation_styles_1.LinkContainer, { key: label, initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1, color: contrastColors[1] }, transition: { delay: 0.5 + i * 0.15 }, onClick: closeDrawerCb },
                    react_1.default.createElement(Link_1.default, { to: path, contrastColors: contrastColors }, label))))))))),
        react_1.default.createElement(NavComponent, { animate: {
                background: contrastColors[0],
                color: contrastColors[1],
            } },
            react_1.default.createElement(LogoContainer_styles_1.default, null,
                react_1.default.createElement(Link_1.default, { to: "", contrastColors: contrastColors },
                    react_1.default.createElement(SVGLogo_1.default, null))),
            !isTiny && (react_1.default.createElement(Navigation_styles_1.Links, null, navData.map(({ label, path }) => (react_1.default.createElement(Navigation_styles_1.LinkContainer, { key: label },
                react_1.default.createElement(Link_1.default, { to: path, contrastColors: contrastColors }, label)))))),
            isTiny && (react_1.default.createElement(Navigation_styles_1.Hamburger, { onClick: openDrawerCb },
                react_1.default.createElement(framer_motion_1.AnimateSharedLayout, null,
                    react_1.default.createElement(framer_motion_1.AnimatePresence, null, openDrawer ? (react_1.default.createElement(framer_motion_1.motion.div, { layout: true, initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 180 }, transition: { duration: 0.3 } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "lg", icon: free_solid_svg_icons_1.faTimes, color: contrastColors[1] }))) : (react_1.default.createElement(framer_motion_1.motion.div, { layout: true, initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: -180 }, exit: { opacity: 0, rotate: 180 }, transition: { duration: 0.3 } },
                        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { size: "lg", icon: free_solid_svg_icons_1.faBars, color: contrastColors[1] }))))))))));
};
exports.default = Navigation;
