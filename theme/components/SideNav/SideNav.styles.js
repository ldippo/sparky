import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
export const SideNavItem = styled(motion.div)(({ selected }) => ({
    marginLeft: '2rem',
    opacity: selected ? 1 : 0.55,
    borderLeft: !selected
        ? undefined
        : `solid ${selected ? 3 : 1}px currentColor`,
    transform: selected ? 'translateX(-1px)' : undefined,
    fontWeight: selected ? 'bold' : undefined,
    padding: 16,
    marginTop: 5,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
        opacity: 1,
        borderLeft: !selected ? `solid 1px currentColor` : undefined,
    },
}));
export const StyledSideNav = function StyledSideNav({ tiny, children, ...props }) {
    return (React.createElement(motion.div, Object.assign({ style: {
            paddingTop: 100,
            position: 'absolute',
            maxWidth: 200,
            width: 200,
            height: '100%',
            zIndex: 99,
            visibility: tiny ? 'hidden' : 'visible',
            pointerEvents: tiny ? 'none' : 'inherit',
        } }, props), children));
};
