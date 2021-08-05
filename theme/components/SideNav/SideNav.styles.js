"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSideNav = exports.SideNavItem = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const framer_motion_1 = require("framer-motion");
exports.SideNavItem = styled_1.default(framer_motion_1.motion.div)(({ selected, style }) => ({
    marginLeft: '2rem',
    opacity: selected ? 1 : 0.55,
    borderLeft: !selected ? undefined : `solid ${selected ? 3 : 1}px currentColor`,
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
exports.StyledSideNav = styled_1.default(framer_motion_1.motion.div) `
	padding-top: 100px;
	position: absolute;
	max-width: 200px;
	width: 100%;
	flex: 0;
	height: 100%;
	z-index: 99;
	visibility: ${({ tiny }) => (tiny ? 'hidden' : 'visible')};
	pointer-events: ${({ tiny }) => (tiny ? 'none' : 'inherit')};
`;
