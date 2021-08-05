"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplashContentContainer = exports.ImageContainer = exports.MarkDownContainer = exports.ContentContainer = exports.MainContainer = exports.AppContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const breakpoints_1 = require("../../styles/breakpoints");
exports.AppContainer = styled_1.default.div(({ templateKey }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    position: templateKey === 'cardPage' ? 'relative' : 'fixed',
    minHeight: templateKey === 'cardPage' ? '100vh' : '',
}));
exports.MainContainer = react_1.default.memo(styled_1.default.div({
    flex: 1,
    display: 'flex',
    maxHeight: '100%',
}));
exports.ContentContainer = styled_1.default.div(({ templateKey, isTiny }) => ({
    flex: 1,
    background: 'white',
    display: 'flex',
    minHeight: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    flexDirection: isTiny ? 'column' : undefined,
    overflowY: isTiny ? 'auto' : 'hidden',
    ...(templateKey === 'pageText'
        ? {
            [breakpoints_1.mq[1]]: {
                paddingLeft: '200px',
                paddingRight: '50px',
            },
            [breakpoints_1.mq[2]]: {
                paddingRight: '100px',
            },
            [breakpoints_1.mq[3]]: {
                paddingRight: '200px',
            },
        }
        : {}),
}));
exports.MarkDownContainer = styled_1.default(framer_motion_1.motion.div)(({ flex }) => ({
    flex: flex === undefined ? 1 : flex,
    padding: '0 32px',
    fontSize: 16,
    marginBottom: '2rem',
    '& > p': {
        margin: 0,
    },
    '& > table': {
        textAlign: 'left',
    },
}));
exports.ImageContainer = styled_1.default.div(({ imgSrc, bgColor }) => ({
    flex: 2,
    height: '100%',
    width: '100%',
    backgroundImage: `url(${imgSrc})`,
    backgroundColor: bgColor || 'transparent',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}));
exports.SplashContentContainer = styled_1.default.div({
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
});
