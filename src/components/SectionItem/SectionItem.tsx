/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useMediaQuery } from '@react-hook/media-query';
import { motion } from 'framer-motion';
import gfm from 'remark-gfm';
import { AnimatePresence, MotionProps } from 'framer-motion';

import {
  SubGrid,
  TinySubGridInfo,
  BigSubGridInfo,
} from '../SubGrid/SubGrid.styles';
import {
  MarkDownContainer,
  ImageContainer,
} from '../Containers/Containers.styles';
import TextTitle from '../TextTitle/TextTitle.styles';
import BGVideo from '../BGVideo/BGVideo';
import { CTAButton } from '../CTAButton/CTAButton.styles';
import { navigate } from 'gatsby-link';
import { SectionItemProps } from '../Layout';

const motionProps: MotionProps[] = [0, 1, 2, 3].map((x) => ({
  transition: {
    delay: 0.5 + x * 0.5,
    type: 'tween',
    duration: 0.5,
    ease: 'easeInOut',
  },
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}));
const SectionItem: React.FC<{ section: SectionItemProps }> = ({ section }) => {
  const tiny = useMediaQuery('only screen and (max-width: 768px)');
  const SubGridInfo = React.useMemo(
    () => (tiny ? TinySubGridInfo : BigSubGridInfo),
    [tiny]
  );

  function clickCTA() {
    if (section?.actionButton?.url) {
      navigate(section.actionButton.url);
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <AnimatePresence>
        {section && section?.imageSrc ? (
          //This nested ternary operator is due to a difference in behavior between regular and CMS views:
          //   Normally, imageSrc returns undefined when no image, but in Netlify it returns an imageSrc object with path="empty.svg"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (section.imageSrc as any).path === 'empty.svg' ? (
            <MarkDownContainer
              key={section.title}
              style={{ padding: '104px 32px 0' }}
            >
              <motion.div {...motionProps[0]}>{section.superText}</motion.div>
              <motion.h1
                {...motionProps[1]}
                style={{ paddingTop: 0, marginTop: 0 }}
              >
                {section.title}
              </motion.h1>

              {section.body && (
                <motion.div {...motionProps[2]}>
                  <ReactMarkdown remarkPlugins={[gfm]}>
                    {section.body}
                  </ReactMarkdown>
                </motion.div>
              )}
            </MarkDownContainer>
          ) : (
            <SubGrid key={section.title} className="SubGrid">
              {section.videoSrc ? (
                <BGVideo src={section.videoSrc} />
              ) : (
                <ImageContainer
                  className="ImageContainer"
                  imgSrc={section.imageSrc}
                />
              )}
              <SubGridInfo className="SubGridInfo">
                <TextTitle flex={1}>
                  <motion.h2 {...motionProps[0]}>{section.superText}</motion.h2>
                  <motion.h1 {...motionProps[1]}>{section.title}</motion.h1>
                </TextTitle>
                <MarkDownContainer flex={3} {...motionProps[2]}>
                  {section.body && (
                    <ReactMarkdown remarkPlugins={[gfm]}>
                      {section.body || ''}
                    </ReactMarkdown>
                  )}
                  {section.actionButton?.text ? (
                    <CTAButton onClick={clickCTA}>
                      {section.actionButton.text}
                    </CTAButton>
                  ) : null}
                </MarkDownContainer>
              </SubGridInfo>
            </SubGrid>
          )
        ) : (
          <MarkDownContainer
            key={section.title}
            style={{ padding: '104px 32px 0' }}
          >
            <motion.div {...motionProps[0]}>{section.superText}</motion.div>
            <motion.h1
              {...motionProps[1]}
              style={{ paddingTop: 0, marginTop: 0 }}
            >
              {section.title}
            </motion.h1>
            <motion.div {...motionProps[2]}>
              {section.body && (
                <ReactMarkdown remarkPlugins={[gfm]}>
                  {section.body}
                </ReactMarkdown>
              )}
            </motion.div>
          </MarkDownContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionItem;
