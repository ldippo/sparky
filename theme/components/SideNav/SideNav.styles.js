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
export const StyledSideNav = styled(motion.div) `
  padding-top: 100px;
  position: absolute;
  max-width: 200px;
  width: 200px;
  height: 100%;
  z-index: 99;
  visibility: ${({ tiny }) => (tiny ? 'hidden' : 'visible')};
  pointer-events: ${({ tiny }) => (tiny ? 'none' : 'inherit')};
`;
