"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const TextTitle = styled_1.default.div(({ flex }) => ({
    flex: flex === undefined ? 1 : flex,
    marginBottom: "2rem",
    color: "black",
    padding: "0 32px",
    "& > h1": {
        margin: 0,
    },
    "& > h2": {
        fontWeight: "normal",
        margin: 0,
        fontSize: "1.2rem",
        letterSpacing: "1px",
    },
}));
exports.default = TextTitle;
