"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mq = void 0;
const breakpoints = [576, 768, 992, 1200];
exports.mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
