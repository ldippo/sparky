"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const react_1 = require("@emotion/react");
const cache_1 = __importDefault(require("@emotion/cache"));
const weak_memoize_1 = __importDefault(require("@emotion/weak-memoize"));
const react_2 = __importStar(require("react"));
const memoizedCreateCacheWithContainer = weak_memoize_1.default((container) => {
    // @ts-ignore
    const newCache = cache_1.default({ key: 'mykey', container });
    return newCache;
});
// eslint-disable-next-line react/display-name
function withEmotion(Component) {
    return function component(props) {
        const iframeHeadElem = react_2.useRef(null);
        react_2.useEffect(() => {
            const iframe = document.querySelector('#preview-pane');
            // @ts-ignore
            iframeHeadElem.current = iframe && iframe.contentDocument.head;
        });
        if (!iframeHeadElem.current)
            return null;
        return (react_2.default.createElement(react_1.CacheProvider, { value: memoizedCreateCacheWithContainer(iframeHeadElem.current) },
            react_2.default.createElement(Component, Object.assign({}, props))));
    };
}
exports.default = withEmotion;
