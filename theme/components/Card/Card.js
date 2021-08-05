"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card_styles_1 = require("./Card.styles");
// eslint-disable-next-line @typescript-eslint/ban-types
const Card = ({ children }) => {
    return (react_1.default.createElement(Card_styles_1.CardWrapper, null,
        react_1.default.createElement(Card_styles_1.CardContainer, null, children)));
};
exports.default = Card;
