"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownOption = exports.DropdownLabel = exports.DropdownSelect = exports.DropdownContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.DropdownContainer = styled_1.default.div `
    background-color: black;
    text-align: center;
`;
exports.DropdownSelect = styled_1.default.select `
    font: inherit;
`;
exports.DropdownLabel = styled_1.default.p `
    display:inline-block;
    color: white;
    margin-right: 2rem;
`;
exports.DropdownOption = styled_1.default.option `
    font: inherit;
`;
