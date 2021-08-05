"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hamburger = exports.LinkContainer = exports.DrawerLinks = exports.Links = exports.DrawerNav = exports.TinyNav = exports.Nav = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const framer_motion_1 = require("framer-motion");
exports.Nav = styled_1.default(framer_motion_1.motion.div)({
    flex: 0,
    display: "flex",
    height: 72,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex: 100,
});
exports.TinyNav = styled_1.default(framer_motion_1.motion.div)({
    flex: 1,
    display: "flex",
    height: 75,
    width: "100%",
    top: 0,
    position: "absolute",
    justifyContent: "space-between",
    zIndex: 100,
});
exports.DrawerNav = styled_1.default(framer_motion_1.motion.div)({
    flex: 0,
    display: "flex",
    height: "100%",
    width: "100%",
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 100,
});
exports.Links = styled_1.default.div({
    flex: 3,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 100,
    color: "black",
    paddingRight: 24,
});
exports.DrawerLinks = styled_1.default(framer_motion_1.motion.div)({
    display: "flex",
    height: "100%",
    maxHeight: 300,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
});
exports.LinkContainer = styled_1.default(framer_motion_1.motion.div) `
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 2rem;
  `;
exports.Hamburger = styled_1.default(framer_motion_1.motion.div)({
    paddingRight: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
