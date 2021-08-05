"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const breakpoints_1 = require("../../styles/breakpoints");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LogoContainer = styled_1.default.div((props) => ({
    width: (props.splash && '200px') || undefined,
    flex: props.splash ? 0 : 1,
    [breakpoints_1.mq[1]]: {
        maxWidth: '25%',
    },
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 100,
    paddingLeft: props.splash ? 0 : 24,
    marginBottom: (props.splash && '2rem') || undefined,
}));
exports.default = LogoContainer;
