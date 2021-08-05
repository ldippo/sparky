"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const gatsby_1 = require("gatsby");
const React = __importStar(require("react"));
const Layout_1 = __importDefault(require("../components/Layout"));
// markup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IndexPage = (props) => {
    const query = props.data;
    const pageData = query.pageData.edges.map(({ node }) => node);
    const navData = pageData.map((node) => ({
        label: node.frontmatter?.navTitle || node.frontmatter?.title || '',
        path: node.frontmatter?.path || '#',
        templateKey: node.frontmatter?.templateKey || 'page',
    }));
    const sectionData = [];
    return (React.createElement(Layout_1.default, { navData: navData, sectionData: sectionData, templateKey: "home" }));
};
exports.query = gatsby_1.graphql `
  query IndexQuery {
    pageData: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            navTitle
            subtitle
            templateKey
            order
            sections {
              body
              title
              titleSuperText
              slideVideo
              slideMedia {
                absolutePath
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;
exports.default = IndexPage;
