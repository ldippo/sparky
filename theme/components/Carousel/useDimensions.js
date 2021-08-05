// This hook code forked & enhanced from https://github.com/Swizec/useDimensions to include typescript definitions
import { useState, useCallback, useLayoutEffect } from "react";
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
export function isDimensionObject(obj) {
    return obj && obj.width && typeof obj.width === "number";
}
function useDimensions({ liveMeasure = true, } = {}) {
    const [dimensions, setDimensions] = useState({});
    const [node, setNode] = useState(null);
    const ref = useCallback((node) => {
        setNode(node);
    }, []);
    const measure = useCallback(function measure() {
        if (node) {
            window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)));
        }
    }, [node]);
    useLayoutEffect(() => {
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
export default useDimensions;
