/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import SectionItem from '../../../components/SectionItem';
import { PreviewContainer, GlobalStyles } from './PagePreview.styles';
import SectionDropdown from '../../../components/SectionDropdown';
import Footer from '../../../components/Footer';
const PagePreview = ({ entry, getAsset }) => {
    const sections = entry
        .getIn(['data'])
        .toJS()
        .sections.map(({ title, body, slideMedia, slideVideo, titleSuperText, actionButton, }) => ({
        title,
        superText: titleSuperText,
        imageSrc: getAsset(slideMedia),
        body,
        videoSrc: slideVideo,
        actionButton,
    }));
    const [selectedTab, setSelectedTab] = useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(PreviewContainer, null,
            React.createElement(SectionDropdown, { selectedIndex: selectedTab, sections: sections, onClick: setSelectedTab }),
            React.createElement(SectionItem, { section: sections[selectedTab] }),
            React.createElement(Footer, null))));
};
export default PagePreview;
