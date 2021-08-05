import React from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useMediaQuery } from '@react-hook/media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TinyNav, Nav, DrawerNav, DrawerLinks, LinkContainer, Hamburger, Links, } from './Navigation.styles';
import LogoContainer from '../Logo/LogoContainer.styles';
import Link from '../Link/Link';
import SVGLogo from '../Logo/SVGLogo';
import { css } from '@emotion/react';
const Navigation = function Navigation({ navData, contrastColors, }) {
    const isTiny = useMediaQuery('only screen and (max-width: 768px)');
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const NavComponent = React.useMemo(() => (isTiny ? TinyNav : Nav), [isTiny]);
    const openDrawerCb = React.useCallback(() => setOpenDrawer((prev) => !prev), []);
    const closeDrawerCb = React.useCallback(() => setOpenDrawer(false), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimateSharedLayout, null,
            React.createElement(AnimatePresence, null, openDrawer && isTiny && (React.createElement(DrawerNav, { initial: { height: 0, opacity: 0 }, animate: {
                    height: '100%',
                    opacity: 1,
                    color: contrastColors[1],
                    backgroundColor: contrastColors[0],
                }, transition: { delay: 0.25 } },
                React.createElement(DrawerLinks, null, navData.map(({ label, path }, i) => (React.createElement(LinkContainer, { key: label, initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1, color: contrastColors[1] }, transition: { delay: 0.5 + i * 0.15 }, onClick: closeDrawerCb },
                    React.createElement(Link, { to: path, contrastColors: contrastColors }, label))))))))),
        React.createElement(NavComponent, { animate: {
                background: contrastColors[0],
                color: contrastColors[1],
            } },
            React.createElement(LogoContainer, null,
                React.createElement(Link, { to: "", contrastColors: contrastColors },
                    React.createElement(SVGLogo, { css: css({
                            '& path': {
                                fill: contrastColors[1],
                                color: contrastColors[1],
                            },
                            '& svg': {
                                height: 200,
                                width: 200,
                            },
                        }) }))),
            !isTiny && (React.createElement(Links, null, navData.map(({ label, path }) => (React.createElement(LinkContainer, { key: label },
                React.createElement(Link, { to: path, contrastColors: contrastColors }, label)))))),
            isTiny && (React.createElement(Hamburger, { onClick: openDrawerCb },
                React.createElement(AnimateSharedLayout, null,
                    React.createElement(AnimatePresence, null, openDrawer ? (React.createElement(motion.div, { layout: true, initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: 0 }, exit: { opacity: 0, rotate: 180 }, transition: { duration: 0.3 } },
                        React.createElement(FontAwesomeIcon, { size: "lg", icon: faTimes, color: contrastColors[1] }))) : (React.createElement(motion.div, { layout: true, initial: { opacity: 0, rotate: -180 }, animate: { opacity: 1, rotate: -180 }, exit: { opacity: 0, rotate: 180 }, transition: { duration: 0.3 } },
                        React.createElement(FontAwesomeIcon, { size: "lg", icon: faBars, color: contrastColors[1] }))))))))));
};
export default Navigation;
