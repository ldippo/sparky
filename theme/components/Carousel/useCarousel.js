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
exports.useCarousel = void 0;
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const react_use_1 = require("react-use");
const useDimensions_1 = __importStar(require("./useDimensions"));
const react_device_detect_1 = require("react-device-detect");
const react_use_gesture_1 = require("react-use-gesture");
const debounce_1 = __importDefault(require("lodash/debounce"));
/**
 * A hook which handles the complicated parts of an infinitely scrollable carousel. This wraps the children and handles their animation when navigation commands are invoked.
 * The hook provides event Left/Right navigation through keyboard commands and exports click handlers for custom left/right nav buttons.
 * This hook also utilizes the `useImperativeHandlers` hook, which exposes it's core commands externally through a provided ref, this would provides an option for external business logic to invoke
 * navigation commands externally.
 * @param param0 See UseCarouselInput
 */
function useCarousel({ step = 1, gutterSize = 32, visibleSlideCount = 3, children, innerCarouselStyle, carouselItemWrapperStyle, carouselRef, keyboardNav, vertical, onChangeActive, active, }) {
    const stepRef = react_1.default.useRef(step);
    const slides = react_1.default.useMemo(() => react_1.default.Children.toArray(children), [
        children,
    ]);
    const slideCount = react_1.default.useMemo(() => visibleSlideCount > slides.length ? slides.length : visibleSlideCount, [visibleSlideCount, slides.length]);
    const noNavigation = react_1.default.useMemo(() => {
        return slideCount === slides.length;
    }, [slideCount, slides.length]);
    react_1.default.useEffect(() => {
        stepRef.current = step;
    }, [step]);
    const [containerRef, containerSize] = useDimensions_1.default();
    /** Compute slide width from container size & gutter value */
    const width = react_1.default.useMemo(() => useDimensions_1.isDimensionObject(containerSize)
        ? containerSize.width / slideCount - gutterSize
        : 0, [containerSize, slideCount, gutterSize]);
    const height = react_1.default.useMemo(() => useDimensions_1.isDimensionObject(containerSize)
        ? containerSize.height / slideCount - gutterSize
        : 0, [containerSize, slideCount, gutterSize]);
    const [slideState, setSlideState] = react_1.default.useState(createSlideState(slides));
    const [direction, setDirection] = react_1.default.useState("right");
    const lastDirectionRef = react_1.default.useRef(direction);
    const offsetValue = react_1.default.useMemo(() => slideCount - slideState.length === 2
        ? (vertical ? height : width) + gutterSize
        : 0, [slideCount, slideState.length, width, gutterSize, height, vertical]);
    const offset = framer_motion_1.useMotionValue(offsetValue);
    react_1.default.useEffect(() => {
        offset.stop();
        offset.set(offsetValue);
    }, [offsetValue]);
    const spring = {
        type: "tween",
        stiffness: 200,
        damping: 50,
        duration: 0.25,
    };
    const exitTrans = {
        type: "tween",
        velocity: 50,
        duration: 0.25,
    };
    const variants = {
        base: {
            [vertical ? "y" : "x"]: offset.get(),
            transition: spring,
        },
        right: {
            [vertical ? "y" : "x"]: (vertical ? height : width) + gutterSize + offset.get(),
            transition: spring,
        },
        left: {
            [vertical ? "y" : "x"]: -((vertical ? height : width) + gutterSize) + offset.get(),
            transition: spring,
        },
        rightExit: {
            [vertical ? "y" : "x"]: (vertical ? height : width) + gutterSize + offset.get(),
            transition: exitTrans,
        },
        leftExit: {
            [vertical ? "y" : "x"]: -((vertical ? height : width) + gutterSize) + offset.get(),
            transition: exitTrans,
        },
    };
    /** Handle changes in children */
    react_1.default.useEffect(() => {
        setSlideState(createSlideState(slides));
    }, [slides]);
    /** Click handlers */
    const clickRightArrow = react_1.default.useCallback(async () => {
        if (active) {
            setDirection("right");
            lastDirectionRef.current = "right";
            let stepCount = stepRef.current;
            setSlideState((prev) => {
                const newSlideState = filterBuffers(prev);
                while (stepCount > 0) {
                    const first = newSlideState.shift();
                    newSlideState.push({
                        ...first,
                        key: Math.random(),
                    });
                    // newSlideState.push(first)
                    stepCount--;
                }
                return bufferSlideState(newSlideState);
            });
            onChangeActive && onChangeActive(stepCount);
        }
        // await controls.start('right')
    }, [active, onChangeActive]);
    const clickLeftArrow = react_1.default.useCallback(async () => {
        if (active) {
            setDirection("left");
            lastDirectionRef.current = "left";
            let stepCount = stepRef.current;
            setSlideState((prev) => {
                const newSlideState = filterBuffers(prev);
                while (stepCount > 0) {
                    const last = newSlideState.pop();
                    newSlideState.unshift({
                        ...last,
                        key: Math.random(),
                    });
                    // newSlideState.unshift(last)
                    stepCount--;
                }
                return bufferSlideState(newSlideState);
            });
            onChangeActive && onChangeActive(stepCount * -1);
        }
    }, [onChangeActive, active]);
    /** Key Event Handlers */
    const pressKeyLeft = react_1.default.useCallback(() => {
        if (keyboardNav && !noNavigation) {
            clickLeftArrow();
        }
    }, [clickLeftArrow, keyboardNav, noNavigation]);
    const pressKeyRight = react_1.default.useCallback(() => {
        if (keyboardNav && !noNavigation) {
            clickRightArrow();
        }
    }, [clickRightArrow, keyboardNav, noNavigation]);
    const bind = react_use_gesture_1.useDrag(debounce_1.default(async ({ movement: [mx, my] }) => {
        if (vertical) {
            const up = my < 0;
            if (up) {
                await clickLeftArrow();
            }
            else {
                await clickRightArrow();
            }
        }
        else {
            const left = mx < 0;
            if (left) {
                await clickLeftArrow();
            }
            else {
                await clickRightArrow();
            }
        }
    }, 250));
    react_use_1.useKeyPressEvent(vertical ? "ArrowUp" : "ArrowLeft", pressKeyLeft);
    react_use_1.useKeyPressEvent(vertical ? "ArrowDown" : "ArrowRight", pressKeyRight);
    /** Provide imperative handlers for external use */
    react_1.default.useImperativeHandle(carouselRef, () => ({
        clickLeftArrow,
        clickRightArrow,
    }));
    const innerCarouselStyles = react_1.default.useMemo(() => ({
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...innerCarouselStyle,
    }), [innerCarouselStyle, vertical]);
    const carouselItemWrapperStyles = react_1.default.useMemo(() => ({
        display: "flex",
        justifyContent: "center",
        width,
        minWidth: width,
        maxWidth: `calc(100% - ${gutterSize}px)`,
        padding: gutterSize / 2,
        height,
        minHeight: height,
        maxHeight: `calc(100% - ${gutterSize}px)`,
        ...carouselItemWrapperStyle,
    }), [width, height, carouselItemWrapperStyle, gutterSize]);
    const mapCarouselItems = react_1.default.useCallback((slide, i) => {
        const spring = {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.5,
        };
        return (react_1.default.createElement(framer_motion_1.motion.div, { key: slide?.key, custom: i + 1, className: "ldcarousel-item-wrapper", layout: true, style: carouselItemWrapperStyles, exit: `${direction}Exit`, initial: direction, animate: "base", variants: variants, transition: spring }, slide));
    }, [direction, variants, carouselItemWrapperStyles]);
    const carouselInner = react_1.default.useMemo(() => (react_1.default.createElement(framer_motion_1.AnimatePresence, null,
        react_1.default.createElement(framer_motion_1.motion.div, Object.assign({ layout: true, ref: (r) => r && containerRef(r), className: "ldcarousel-inner", style: innerCarouselStyles }, (react_device_detect_1.isMobile ? bind() : {})), slideState
            .filter(Boolean)
            .filter((_slide, i) => i < slideCount + 2)
            .map(mapCarouselItems)))), [
        innerCarouselStyles,
        bind,
        slideState,
        mapCarouselItems,
        containerRef,
        slideCount,
    ]);
    return {
        carouselInner,
        clickLeftArrow,
        clickRightArrow,
        noNavigation,
    };
}
exports.useCarousel = useCarousel;
function filterAndBufferSlideState(slides) {
    const filteredSlides = filterBuffers(slides);
    return bufferSlideState(filteredSlides);
}
function filterBuffers(slides) {
    return slides.filter((node) => {
        if (node) {
            const key = String(node.key);
            return !key.includes("buffer");
        }
        return true;
    });
}
/** Here we create a buffer so that there always appears to be a smooth animation from outside the visible carousel
 * Note that the buffer must always be uniquely keyed otherwise it remains registered by framer motion and doesn't animate
 * as intended.
 */
function bufferSlideState(slides) {
    const lastSlide = {
        ...slides[slides.length - 1],
        key: "buffer" + Math.random(),
    };
    slides.unshift(lastSlide);
    return slides.slice();
}
function createSlideState(slides) {
    const slideState = filterAndBufferSlideState(slides);
    return slideState;
}
