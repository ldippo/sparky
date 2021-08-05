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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const popmotion_1 = require("popmotion");
const react_use_1 = require("react-use");
const variants = {
    enter: (direction) => {
        return {
            y: direction > 0 ? "100%" : "-100%",
            opacity: 1,
            zIndex: 0,
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            y: direction < 0 ? "100%" : "-100%",
            opacity: 1,
        };
    },
};
/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
const Carousel = React.forwardRef(function Carousel({ children, curPage, onChangeActive }, ref) {
    const childElements = React.Children.toArray(children);
    const [[page, direction], setPage] = react_1.useState([curPage || 0, 0]);
    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = popmotion_1.wrap(0, childElements.length, page);
    const paginate = react_1.useCallback((count) => {
        setPage([page + count, count]);
    }, [page]);
    const changeSlide = React.useCallback((count) => {
        paginate(count);
        if (onChangeActive)
            onChangeActive(count);
    }, [paginate, onChangeActive]);
    const goUp = () => React.useCallback(() => changeSlide(-1), [changeSlide]);
    const goDown = () => React.useCallback(() => changeSlide(1), [changeSlide]);
    React.useImperativeHandle(ref, () => ({
        changeSlide,
    }), [changeSlide]);
    react_use_1.useKeyPressEvent("ArrowUp", () => goUp);
    react_use_1.useKeyPressEvent("ArrowDown", () => goDown);
    const onDragEnd = React.useCallback((e, { offset, velocity }) => {
        const swipe = swipePower(offset.y, velocity.y);
        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        }
        else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(framer_motion_1.AnimatePresence, { initial: false, custom: direction, exitBeforeEnter: true },
            React.createElement(framer_motion_1.motion.div, { layout: true, key: page, custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", transition: {
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.1 },
                }, drag: false, dragConstraints: { left: 0, right: 0 }, dragElastic: 1, onDragEnd: onDragEnd, style: {
                    objectFit: "cover",
                    display: "flex",
                    width: "100%",
                    minWidth: "100%",
                } }, childElements[imageIndex]))));
});
exports.default = Carousel;
