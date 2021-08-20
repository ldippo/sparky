import React from 'react';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  TinyNav,
  Nav,
  DrawerNav,
  DrawerLinks,
  LinkContainer,
  Hamburger,
  Links,
} from './Navigation.styles';
import LogoContainer from '../Logo/LogoContainer.styles';
import Link from '../Link/Link';
import SVGLogo from '../Logo/SVGLogo';
import css from '@emotion/css';

const Navigation = function Navigation({
  navData,
  contrastColors,
}: {
  navData: { label: string; path: string }[];
  contrastColors: string[];
}) {
  const isTiny = useMediaQuery('only screen and (max-width: 768px)');
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const NavComponent = React.useMemo(() => (isTiny ? TinyNav : Nav), [isTiny]);

  const openDrawerCb = React.useCallback(
    () => setOpenDrawer((prev) => !prev),
    []
  );
  const closeDrawerCb = React.useCallback(() => setOpenDrawer(false), []);

  return (
    <>
      <AnimateSharedLayout>
        <AnimatePresence>
          {openDrawer && isTiny && (
            <DrawerNav
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: '100%',
                opacity: 1,
                color: contrastColors[1],
                backgroundColor: contrastColors[0],
              }}
              transition={{ delay: 0.25 }}
            >
              <DrawerLinks>
                {navData.map(({ label, path }, i) => (
                  <LinkContainer
                    key={label}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, color: contrastColors[1] }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    onClick={closeDrawerCb}
                  >
                    <Link to={path} contrastColors={contrastColors}>
                      {label}
                    </Link>
                  </LinkContainer>
                ))}
              </DrawerLinks>
            </DrawerNav>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      <NavComponent
        animate={{
          background: contrastColors[0],
          color: contrastColors[1],
        }}
      >
        <LogoContainer>
          <Link to="" contrastColors={contrastColors}>
            <SVGLogo
              css={css({
                '& path': {
                  fill: contrastColors[1],
                  color: contrastColors[1],
                },
              })}
            />
          </Link>
        </LogoContainer>
        {!isTiny && (
          <Links>
            {navData.map(({ label, path }) => (
              <LinkContainer key={label}>
                <Link to={path} contrastColors={contrastColors}>
                  {label}
                </Link>
              </LinkContainer>
            ))}
          </Links>
        )}
        {isTiny && (
          <Hamburger onClick={openDrawerCb}>
            <AnimateSharedLayout>
              <AnimatePresence>
                {openDrawer ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={faTimes}
                      color={contrastColors[1]}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    layout
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: -180 }}
                    exit={{ opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FontAwesomeIcon
                      size="lg"
                      icon={faBars}
                      color={contrastColors[1]}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimateSharedLayout>
          </Hamburger>
        )}
      </NavComponent>
    </>
  );
};

export default Navigation;
