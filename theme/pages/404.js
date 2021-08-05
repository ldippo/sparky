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
const React = __importStar(require("react"));
const gatsby_link_1 = __importDefault(require("gatsby-link"));
// styles
const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: '#8A6534',
    padding: 4,
    backgroundColor: '#FFF4DB',
    fontSize: '1.25rem',
    borderRadius: 4,
};
// markup
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NotFoundPage = () => {
    return (React.createElement("main", { style: pageStyles },
        React.createElement("title", null, "Not found"),
        React.createElement("h1", { style: headingStyles }, "Page not found"),
        React.createElement("p", { style: paragraphStyles },
            "Sorry",
            ' ',
            React.createElement("span", { role: "img", "aria-label": "Pensive emoji" }, "\uD83D\uDE14"),
            ' ',
            "we couldn\u2019t find what you were looking for.",
            React.createElement("br", null),
            process.env.NODE_ENV === 'development' ? (React.createElement(React.Fragment, null,
                React.createElement("br", null),
                "Try creating a page in ",
                React.createElement("code", { style: codeStyles }, "src/pages/"),
                ".",
                React.createElement("br", null))) : null,
            React.createElement("br", null),
            React.createElement(gatsby_link_1.default, { to: "/" }, "Go home"),
            ".")));
};
exports.default = NotFoundPage;
