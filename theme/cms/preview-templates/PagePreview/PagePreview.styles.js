"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewContainer = exports.GlobalStyles = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = __importDefault(require("react"));
const react_2 = require("@emotion/react");
const GlobalStyles = () => (react_1.default.createElement(react_2.Global, { styles: react_2.css `
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
      html,
      body,
      #___gatsby,
      #gatsby-focus-wrapper,
      #preview-pane,
      .frame-content {
        width: 100%;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
      }

      html {
        font-size: 12px;
      }

      h1 {
        font-size: 1.8rem;
      }

      @media screen and (min-width: 768px) {
        html {
          font-size: 14px;
        }
      }

      iframe#preview-pane {
        position: relative;
      }

      .frame-content .SubGrid .SubGridInfo {
        display: block;
      }

      @media (min-width: 768px) {
        .frame-content .SubGrid .SubGridInfo {
          display: flex;
          padding-left: 50px;
        }
      }
    ` }));
exports.GlobalStyles = GlobalStyles;
exports.PreviewContainer = styled_1.default.div `
  height: 100vh;
  & .SubGrid {
    height: auto;
  }
  & .ImageContainer {
    flex: 4;
  }
`; //This removes SubGrid height: 100% for the CMS Preview view and increases vertical space the image takes up.
