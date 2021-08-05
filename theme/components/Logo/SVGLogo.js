"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SVGLogo = function SVGLogo({ style }) {
    return react_1.default.createElement("img", { style: style, src: '/logo.svg', alt: "Logo" });
};
exports.default = SVGLogo;
