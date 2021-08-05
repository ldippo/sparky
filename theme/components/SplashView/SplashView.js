"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_link_1 = __importDefault(require("gatsby-link"));
const LogoContainer_styles_1 = __importDefault(require("../Logo/LogoContainer.styles"));
const SVGLogo_1 = __importDefault(require("../Logo/SVGLogo"));
const CTAButton_styles_1 = require("../CTAButton/CTAButton.styles");
const BGVideo_1 = __importDefault(require("../BGVideo"));
const Containers_styles_1 = require("../Containers/Containers.styles");
const SplashView = ({ videoSrc, imageSrc, overlayColor }) => {
    const content = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(LogoContainer_styles_1.default, { splash: true },
            react_1.default.createElement(SVGLogo_1.default, { style: {
                    fill: 'white',
                    color: 'white',
                    width: '100%',
                    height: 'auto',
                } })),
        react_1.default.createElement(gatsby_link_1.default, { to: "/contact" },
            react_1.default.createElement(CTAButton_styles_1.CTAButtonLarge, null, "Contact Us"))));
    return (react_1.default.createElement(react_1.default.Fragment, null, videoSrc ? (react_1.default.createElement(BGVideo_1.default, { src: videoSrc, bgColor: overlayColor },
        react_1.default.createElement(Containers_styles_1.SplashContentContainer, null, content))) : (react_1.default.createElement(Containers_styles_1.ImageContainer, { imgSrc: imageSrc || '', bgColor: overlayColor },
        react_1.default.createElement(Containers_styles_1.SplashContentContainer, null, content)))));
};
exports.default = SplashView;
