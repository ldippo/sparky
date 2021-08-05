"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BGVideo_styles_1 = require("./BGVideo.styles");
const BGVideo = react_1.default.memo(function BGVideo({ src, children, bgColor }) {
    return (react_1.default.createElement(BGVideo_styles_1.BackgroundVideoContainer, null,
        react_1.default.createElement("video", { autoPlay: true, loop: true, muted: true, style: {
                minWidth: "100%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
            } },
            react_1.default.createElement("source", { src: src, type: "video/mp4" }),
            "Your browser does not support the video tag."),
        react_1.default.createElement(BGVideo_styles_1.BGVideoContent, { bgColor: bgColor }, children)));
});
exports.default = BGVideo;
