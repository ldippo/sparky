"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const gatsby_link_1 = __importDefault(require("gatsby-link"));
const is_prop_valid_1 = __importDefault(require("@emotion/is-prop-valid"));
const StyledGatLink = styled_1.default(gatsby_link_1.default, {
    shouldForwardProp: (prop) => is_prop_valid_1.default(prop) && prop !== 'contrastColors',
}) `
  color: ${(props) => props.contrastColors[1] || 'white'};
  text-decoration: none;
  text-shadow: 1px 1px 0px ${(props) => props.contrastColors[0] || 'black'};
  font-family: Open Sans;
`;
exports.default = StyledGatLink;
