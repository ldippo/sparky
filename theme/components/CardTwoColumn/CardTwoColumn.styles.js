"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsContent = exports.DetailsLabel = exports.DetailsContainer = exports.TwoColumnContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const breakpoints_1 = require("../../styles/breakpoints");
exports.TwoColumnContainer = styled_1.default.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    [breakpoints_1.mq[2]]: {
        flexDirection: 'row',
    },
});
exports.DetailsContainer = styled_1.default.div({
    margin: '2rem 2rem',
    borderTop: '1px solid darkgray',
    padding: '2rem 0',
    [breakpoints_1.mq[1]]: {
        margin: '2rem 5rem',
    },
    [breakpoints_1.mq[2]]: {
        width: '40%',
        textAlign: 'right',
        padding: '0 5rem 0 0',
        borderRight: '1px solid darkgray',
        display: 'unset',
        margin: 0,
        borderTop: 'none',
    },
});
exports.DetailsLabel = styled_1.default.p({
    margin: 0,
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#666',
});
exports.DetailsContent = styled_1.default.p({
    color: '#666',
    marginBottom: '2.3rem',
});
