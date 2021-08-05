"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const TextTitle_styles_1 = __importDefault(require("../TextTitle/TextTitle.styles"));
const ContactFormTextTitle = styled_1.default(TextTitle_styles_1.default) `
    margin-top: 32px;
    padding-left: 0;
    margin-left: ${props => props.isTiny ? '2rem' : props.isBig ? '10rem' : '5rem'};
`;
exports.default = ContactFormTextTitle;
