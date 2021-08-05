"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_1 = __importDefault(require("../components/Layout"));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PageText(props) {
    const pageData = props.data.pageData.edges
        .map(({ node }) => node.frontmatter)
        .filter(Boolean);
    const navData = pageData
        .sort((a, b) => ((a.order || 0) < (b.order || 0) ? 1 : -1))
        .map(({ title, path, templateKey }) => ({
        label: title || '',
        path: path || '',
        templateKey,
    }));
    const selectedPage = pageData.find(({ path }) => path === props.path.substr(1));
    const sectionData = selectedPage
        ? selectedPage.sections
        : [];
    return (react_1.default.createElement(Layout_1.default, { navData: navData, sectionData: sectionData, templateKey: selectedPage?.templateKey || 'page' }));
}
exports.default = PageText;