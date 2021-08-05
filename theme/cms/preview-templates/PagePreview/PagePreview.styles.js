"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.PreviewContainer = styled_1.default.div `
height: 100vh;
& .SubGrid {
  height: auto;
};
& .ImageContainer {
  flex: 4
}
`; //This removes SubGrid height: 100% for the CMS Preview view and increases vertical space the image takes up.
