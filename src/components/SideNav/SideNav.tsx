import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { AnimatePresence } from 'framer-motion';
import { StyledSideNav, SideNavItem } from './SideNav.styles';
import { Maybe } from '../../generated/graphql';

const SideNav = React.memo(function SideNav({
  navItems,
  selectedIdx,
  contrastColors,
}: {
  selectedIdx: number;
  navItems: { onClick(): void; text: Maybe<string> | undefined }[];
  contrastColors: unknown[];
}) {
  const isTiny = useMediaQuery('only screen and (max-width: 768px)');
  if (navItems.length <= 1) return <></>;
  return (
    <AnimatePresence>
      <StyledSideNav tiny={isTiny}>
        {navItems.map(({ text, onClick }, idx) => {
          return (
            <SideNavItem
              initial={{
                x: -100,
                opacity: 0,
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}
              transition={{ delay: 0.5 + idx * 0.3 }}
              animate={{
                x: 0,
                opacity: 1,
                color: contrastColors[1],
                background:
                  contrastColors[0] === 'black'
                    ? 'rgba(0,0,0,0.5)'
                    : 'rgba(255,255,255,0.5)',
              }}
              key={text}
              text={text}
              onClick={onClick}
              selected={idx === selectedIdx}
            >
              <p>{text}</p>
            </SideNavItem>
          );
        })}
      </StyledSideNav>
    </AnimatePresence>
  );
});

export default SideNav;
