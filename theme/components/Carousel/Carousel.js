import * as React from "react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useKeyPressEvent } from "react-use";
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
    const [[page, direction], setPage] = useState([curPage || 0, 0]);
    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, childElements.length, page);
    const paginate = useCallback((count) => {
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
    useKeyPressEvent("ArrowUp", () => goUp);
    useKeyPressEvent("ArrowDown", () => goDown);
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
        React.createElement(AnimatePresence, { initial: false, custom: direction, exitBeforeEnter: true },
            React.createElement(motion.div, { layout: true, key: page, custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", transition: {
                    y: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.1 },
                }, drag: false, dragConstraints: { left: 0, right: 0 }, dragElastic: 1, onDragEnd: onDragEnd, style: {
                    objectFit: "cover",
                    display: "flex",
                    width: "100%",
                    minWidth: "100%",
                } }, childElements[imageIndex]))));
});
export default Carousel;
