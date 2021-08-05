"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const media_query_1 = require("@react-hook/media-query");
const framer_motion_1 = require("framer-motion");
const SideNav_styles_1 = require("./SideNav.styles");
const SideNav = react_1.default.memo(function SideNav({ navItems, selectedIdx, contrastColors, }) {
    const isTiny = media_query_1.useMediaQuery('only screen and (max-width: 768px)');
    if (navItems.length <= 1)
        return react_1.default.createElement(react_1.default.Fragment, null);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null,
        react_1.default.createElement(SideNav_styles_1.StyledSideNav, { tiny: isTiny }, navItems.map(({ text, onClick }, idx) => {
            return (react_1.default.createElement(SideNav_styles_1.SideNavItem, { initial: {
                    x: -100,
                    opacity: 0,
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }, transition: { delay: 0.5 + idx * 0.3 }, animate: {
                    x: 0,
                    opacity: 1,
                    color: contrastColors[1],
                    background: contrastColors[0] === 'black'
                        ? 'rgba(0,0,0,0.5)'
                        : 'rgba(255,255,255,0.5)',
                }, key: text, text: text, onClick: onClick, selected: idx === selectedIdx },
                react_1.default.createElement("p", null, text)));
        }))));
});
exports.default = SideNav;
