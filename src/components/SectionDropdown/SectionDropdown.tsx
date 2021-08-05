import React from 'react';
import {
  DropdownContainer,
  DropdownSelect,
  DropdownLabel,
  DropdownOption,
} from '../Dropdown/Dropdown.styles';
import { SectionItemProps } from '../Layout';

const SectionDropdown: React.FC<{
  sections: SectionItemProps[];
  selectedIndex: number;
  onClick(e: unknown): void;
}> = ({ sections, onClick, selectedIndex }) => {
  return (
    <DropdownContainer>
      <DropdownLabel>Select a section preview:</DropdownLabel>
      <DropdownSelect onChange={(e) => onClick(e.target.value)}>
        {sections.map((section, i) => (
          <DropdownOption key={i} value={i} selected={i == selectedIndex}>
            {section.title}
          </DropdownOption>
        ))}
      </DropdownSelect>
    </DropdownContainer>
  );
};

export default SectionDropdown;
