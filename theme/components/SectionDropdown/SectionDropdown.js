"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dropdown_styles_1 = require("../Dropdown/Dropdown.styles");
const SectionDropdown = ({ sections, onClick, selectedIndex }) => {
    return (react_1.default.createElement(Dropdown_styles_1.DropdownContainer, null,
        react_1.default.createElement(Dropdown_styles_1.DropdownLabel, null, "Select a section preview:"),
        react_1.default.createElement(Dropdown_styles_1.DropdownSelect, { onChange: (e) => onClick(e.target.value) }, sections.map((section, i) => (react_1.default.createElement(Dropdown_styles_1.DropdownOption, { key: i, value: i, selected: i == selectedIndex }, section.title))))));
};
exports.default = SectionDropdown;
