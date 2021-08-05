import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const Nav = styled(motion.div)({
    flex: 0,
    display: "flex",
    height: 72,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex: 100,
});
export const TinyNav = styled(motion.div)({
    flex: 1,
    display: "flex",
    height: 75,
    width: "100%",
    top: 0,
    position: "absolute",
    justifyContent: "space-between",
    zIndex: 100,
});
export const DrawerNav = styled(motion.div)({
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
export const Links = styled.div({
    flex: 3,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 100,
    color: "black",
    paddingRight: 24,
});
export const DrawerLinks = styled(motion.div)({
    display: "flex",
    height: "100%",
    maxHeight: 300,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 100,
});
export const LinkContainer = styled(motion.div) `
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    margin-right: 2rem;
  `;
export const Hamburger = styled(motion.div)({
    paddingRight: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
