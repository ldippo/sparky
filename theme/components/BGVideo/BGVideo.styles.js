"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BGVideoContent = exports.BackgroundVideoContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.BackgroundVideoContainer = styled_1.default.div({
    flex: 2,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    zIndex: 98,
    width: "100%",
});
exports.BGVideoContent = styled_1.default.div(({ bgColor }) => ({
    position: "absolute",
    top: 0,
    backgroundColor: bgColor || "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
}));
