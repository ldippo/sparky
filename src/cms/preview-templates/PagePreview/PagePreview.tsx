/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import SectionItem from '../../../components/SectionItem';
import { PreviewContainer } from './PagePreview.styles';
import SectionDropdown from '../../../components/SectionDropdown';
import Footer from '../../../components/Footer';
import './PagePreview.styles.css';
import '../../../styles/global.css';

const PagePreview: React.FC<any> = ({ entry, getAsset }) => {
  const sections = entry
    .getIn(['data'])
    .toJS()
    .sections.map(
      ({
        title,
        body,
        slideMedia,
        slideVideo,
        titleSuperText,
        actionButton,
      }: any) => ({
        title,
        superText: titleSuperText,
        imageSrc: getAsset(slideMedia),
        body,
        videoSrc: slideVideo,
        actionButton,
      })
    );

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <PreviewContainer>
      <SectionDropdown
        selectedIndex={selectedTab}
        sections={sections}
        onClick={setSelectedTab}
      />
      <SectionItem section={sections[selectedTab]} />
      <Footer />
    </PreviewContainer>
  );
};

export default PagePreview;
