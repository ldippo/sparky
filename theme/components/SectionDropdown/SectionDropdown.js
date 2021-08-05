import React from 'react';
import { DropdownContainer, DropdownSelect, DropdownLabel, DropdownOption, } from '../Dropdown/Dropdown.styles';
const SectionDropdown = ({ sections, onClick, selectedIndex }) => {
    return (React.createElement(DropdownContainer, null,
        React.createElement(DropdownLabel, null, "Select a section preview:"),
        React.createElement(DropdownSelect, { onChange: (e) => onClick(e.target.value) }, sections.map((section, i) => (React.createElement(DropdownOption, { key: i, value: i, selected: i == selectedIndex }, section.title))))));
};
export default SectionDropdown;
