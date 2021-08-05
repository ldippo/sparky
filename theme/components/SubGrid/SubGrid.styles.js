"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinySubGridInfo = exports.BigSubGridInfo = exports.SubGrid = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const breakpoints_1 = require("../../styles/breakpoints");
exports.SubGrid = styled_1.default.div `
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;
exports.BigSubGridInfo = styled_1.default.div `
  padding-top: 48px;
  display: flex;
  flex: 1;
  ${breakpoints_1.mq[0]} {
    margin: 0 2rem;
  }
  ${breakpoints_1.mq[2]} {
    margin: 0 5rem;
  }
  ${breakpoints_1.mq[3]} {
    margin: 0 18rem;
  }
`;
exports.TinySubGridInfo = styled_1.default.div `
  flex: 1;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 5px;
  ${breakpoints_1.mq[0]} {
    padding-bottom: 20px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${breakpoints_1.mq[0]} {
    display: flex;
  }
`;
