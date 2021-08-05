"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link_styles_1 = __importDefault(require("./Link.styles"));
const Link = react_1.default.memo(function Link({ to, children, contrastColors }) {
    return (react_1.default.createElement(Link_styles_1.default, { to: '/' + to, contrastColors: contrastColors }, children));
});
exports.default = Link;
