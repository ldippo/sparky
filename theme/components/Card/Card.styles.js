"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardContainer = exports.CardWrapper = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.CardWrapper = styled_1.default.div({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f5f6f7",
});
exports.CardContainer = styled_1.default.div({
    marginTop: 72 + 50,
    marginBottom: 50,
    maxWidth: "900px",
    flex: 1,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "transparent",
    flexDirection: "column",
});
