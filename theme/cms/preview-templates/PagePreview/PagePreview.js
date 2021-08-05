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
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = __importStar(require("react"));
const SectionItem_1 = __importDefault(require("../../../components/SectionItem"));
const PagePreview_styles_1 = require("./PagePreview.styles");
const SectionDropdown_1 = __importDefault(require("../../../components/SectionDropdown"));
const Footer_1 = __importDefault(require("../../../components/Footer"));
const PagePreview = ({ entry, getAsset }) => {
    const sections = entry
        .getIn(['data'])
        .toJS()
        .sections.map(({ title, body, slideMedia, slideVideo, titleSuperText, actionButton, }) => ({
        title,
        superText: titleSuperText,
        imageSrc: getAsset(slideMedia),
        body,
        videoSrc: slideVideo,
        actionButton,
    }));
    const [selectedTab, setSelectedTab] = react_1.useState(0);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PagePreview_styles_1.GlobalStyles, null),
        react_1.default.createElement(PagePreview_styles_1.PreviewContainer, null,
            react_1.default.createElement(SectionDropdown_1.default, { selectedIndex: selectedTab, sections: sections, onClick: setSelectedTab }),
            react_1.default.createElement(SectionItem_1.default, { section: sections[selectedTab] }),
            react_1.default.createElement(Footer_1.default, null))));
};
exports.default = PagePreview;
