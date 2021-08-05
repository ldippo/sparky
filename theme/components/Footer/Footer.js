"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer_styles_1 = __importDefault(require("./Footer.styles"));
const Footer = () => {
    return react_1.default.createElement(Footer_styles_1.default, null,
        "COPYRIGHT \u00A9 ",
        new Date().getFullYear(),
        " VFT SOLUTIONS");
};
exports.default = Footer;
