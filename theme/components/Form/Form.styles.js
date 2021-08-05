"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTextArea = exports.FormInput = exports.FormLabel = exports.FormItem = exports.FormContainer = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const breakpoints_1 = require("../../styles/breakpoints");
exports.FormContainer = styled_1.default.form({
    margin: '0 2rem',
    textAlign: 'center',
    [breakpoints_1.mq[1]]: {
        margin: '0 5rem',
    },
    [breakpoints_1.mq[2]]: {
        width: '60%',
    },
});
exports.FormItem = styled_1.default.div({
    textAlign: 'left',
    marginBottom: '1rem',
});
exports.FormLabel = styled_1.default.label({
    padding: '.5rem 1rem .6rem',
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#666',
});
const inputStyles = {
    display: 'block',
    padding: '.6rem 1rem',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    borderTop: '1px solid lightgray',
    fontSize: '1rem',
    fontFamily: 'inherit',
    borderRadius: 25,
    '&:focus': {
        outline: 'transparent solid 2px',
        boxShadow: '0 0 2px 1px #5071ad',
    },
};
exports.FormInput = styled_1.default.input(inputStyles);
exports.FormTextArea = styled_1.default.textarea({
    resize: 'none',
    ...inputStyles,
});
