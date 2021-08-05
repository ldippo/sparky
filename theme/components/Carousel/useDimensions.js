"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDimensionObject = void 0;
// This hook code forked & enhanced from https://github.com/Swizec/useDimensions to include typescript definitions
const react_1 = require("react");
function getDimensionObject(node) {
    const rect = node.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: "x" in rect ? rect.x : rect.top,
        left: "y" in rect ? rect.y : rect.left,
        x: "x" in rect ? rect.x : rect.left,
        y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom,
    };
}
function isDimensionObject(obj) {
    return obj && obj.width && typeof obj.width === "number";
}
exports.isDimensionObject = isDimensionObject;
function useDimensions({ liveMeasure = true, } = {}) {
    const [dimensions, setDimensions] = react_1.useState({});
    const [node, setNode] = react_1.useState(null);
    const ref = react_1.useCallback((node) => {
        setNode(node);
    }, []);
    const measure = react_1.useCallback(function measure() {
        if (node) {
            window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)));
        }
    }, [node]);
    react_1.useLayoutEffect(() => {
        if (node) {
            measure();
            if (liveMeasure) {
                window.addEventListener("resize", measure);
                window.addEventListener("scroll", measure);
                return () => {
                    window.removeEventListener("resize", measure);
                    window.removeEventListener("scroll", measure);
                };
            }
        }
        return () => { };
    }, [liveMeasure, measure, node]);
    return [ref, dimensions, node];
}
exports.default = useDimensions;
