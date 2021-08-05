"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const FooterStyles = styled_1.default.footer({
    flex: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    position: "absolute",
    bottom: 0,
    zIndex: 99,
    color: "rgba(0,0,0,0.25)",
});
exports.default = FooterStyles;
