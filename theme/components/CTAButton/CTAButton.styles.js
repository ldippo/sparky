"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTAButtonLarge = exports.CTAButton = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const breakpoints_1 = require("../../styles/breakpoints");
exports.CTAButton = styled_1.default.button `
	border: 2px solid black;
	border-radius: 100px;
	padding: 16px 24px;
	color: black;
	width: 100%;
	background: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	${breakpoints_1.mq[0]} {
		width: auto;
	}
	margin-top: 16px;
	margin-bottom: 16px;
	cursor: pointer;
	font-weight: 600;
`;
exports.CTAButtonLarge = styled_1.default(exports.CTAButton)({
    lineHeight: '1.3rem',
    fontSize: '1.3rem',
    color: 'white',
    width: 'auto',
    padding: '16px 24px',
    borderRadius: '25px',
    transition: 'all .1s',
    textDecoration: 'none',
    borderColor: 'white',
    background: 'transparent',
    '&:hover': {
        color: 'black',
        transform: 'translateY(-2px)',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        background: 'white',
    },
    '&:active': {
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
    },
});
