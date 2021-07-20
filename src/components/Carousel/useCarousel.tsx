import React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionStyle,
} from "framer-motion";
import { useKeyPressEvent } from "react-use";
import useDimensions, { isDimensionObject } from "./useDimensions";
import { isMobile } from "react-device-detect";
import { useDrag } from "react-use-gesture";
import debounce from "lodash/debounce";
interface UseCarouselInput {
  /** The quantity of slides to push left or right when triggering navigation */
  step?: number;
  /** The width of the gap between two slides. Used to compute padding. Specifcally padding for a slide is 1/2 this value */
  gutterSize?: number;
  /** The number of slides to display at one time. If this number exceeds the quantity of available slides, the quantity of available slides will be used instead. If this number is equal to the quantity of available slides, the navigation will be disabled. */
  visibleSlideCount?: number;
  children: React.ReactNode;
  /** Inline styles for the animated component which contains the animated slides */
  innerCarouselStyle?: React.CSSProperties;
  /** Inline styles for the animated component which wraps the Carousel's children */
  carouselItemWrapperStyle?: React.CSSProperties;
  /** A ref to provide the carousel, this allows logic outside the carousel component to call the methods `clickLeftArrow` & `clickRightArrow` in an imperative fashion, example: `ref.current.clickLeftArrow()` */
  carouselRef: React.MutableRefObject<unknown>;
  /** Whether or not to capture key left and key right events to control carousel navigation */
  keyboardNav?: boolean;
  vertical?: boolean;
  onChangeActive?: (idx: number) => void;
  active?: boolean;
}

/**
 * A hook which handles the complicated parts of an infinitely scrollable carousel. This wraps the children and handles their animation when navigation commands are invoked.
 * The hook provides event Left/Right navigation through keyboard commands and exports click handlers for custom left/right nav buttons.
 * This hook also utilizes the `useImperativeHandlers` hook, which exposes it's core commands externally through a provided ref, this would provides an option for external business logic to invoke
 * navigation commands externally.
 * @param param0 See UseCarouselInput
 */
export function useCarousel({
  step = 1,
  gutterSize = 32,
  visibleSlideCount = 3,
  children,
  innerCarouselStyle,
  carouselItemWrapperStyle,
  carouselRef,
  keyboardNav,
  vertical,
  onChangeActive,
  active,
}: UseCarouselInput) {
  const stepRef = React.useRef(step);
  const slides = React.useMemo(() => React.Children.toArray(children), [
    children,
  ]);
  const slideCount = React.useMemo(
    () =>
      visibleSlideCount > slides.length ? slides.length : visibleSlideCount,
    [visibleSlideCount, slides.length]
  );

  const noNavigation = React.useMemo(() => {
    return slideCount === slides.length;
  }, [slideCount, slides.length]);

  React.useEffect(() => {
    stepRef.current = step;
  }, [step]);
  const [containerRef, containerSize] = useDimensions();

  /** Compute slide width from container size & gutter value */
  const width = React.useMemo(
    () =>
      isDimensionObject(containerSize)
        ? containerSize.width / slideCount - gutterSize
        : 0,
    [containerSize, slideCount, gutterSize]
  );

  const height = React.useMemo(
    () =>
      isDimensionObject(containerSize)
        ? containerSize.height / slideCount - gutterSize
        : 0,
    [containerSize, slideCount, gutterSize]
  );

  const [slideState, setSlideState] = React.useState(createSlideState(slides));
  const [direction, setDirection] = React.useState("right");
  const lastDirectionRef = React.useRef(direction);

  const offsetValue = React.useMemo(
    () =>
      slideCount - slideState.length === 2
        ? (vertical ? height : width) + gutterSize
        : 0,
    [slideCount, slideState.length, width, gutterSize, height, vertical]
  );

  const offset = useMotionValue(offsetValue);

  React.useEffect(() => {
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
      [vertical ? "y" : "x"]:
        (vertical ? height : width) + gutterSize + offset.get(),
      transition: spring,
    },
    left: {
      [vertical ? "y" : "x"]:
        -((vertical ? height : width) + gutterSize) + offset.get(),
      transition: spring,
    },
    rightExit: {
      [vertical ? "y" : "x"]:
        (vertical ? height : width) + gutterSize + offset.get(),
      transition: exitTrans,
    },
    leftExit: {
      [vertical ? "y" : "x"]:
        -((vertical ? height : width) + gutterSize) + offset.get(),
      transition: exitTrans,
    },
  };

  /** Handle changes in children */
  React.useEffect(() => {
    setSlideState(createSlideState(slides));
  }, [slides]);

  /** Click handlers */
  const clickRightArrow = React.useCallback(async () => {
    if (active) {
      setDirection("right");
      lastDirectionRef.current = "right";
      let stepCount = stepRef.current;

      setSlideState((prev) => {
        const newSlideState = filterBuffers(prev);

        while (stepCount > 0) {
          const first = newSlideState.shift();
          newSlideState.push({
            ...(first as any),
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

  const clickLeftArrow = React.useCallback(async () => {
    if (active) {
      setDirection("left");
      lastDirectionRef.current = "left";
      let stepCount = stepRef.current;

      setSlideState((prev) => {
        const newSlideState = filterBuffers(prev);
        while (stepCount > 0) {
          const last: any = newSlideState.pop();
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
  const pressKeyLeft = React.useCallback(() => {
    if (keyboardNav && !noNavigation) {
      clickLeftArrow();
    }
  }, [clickLeftArrow, keyboardNav, noNavigation]);

  const pressKeyRight = React.useCallback(() => {
    if (keyboardNav && !noNavigation) {
      clickRightArrow();
    }
  }, [clickRightArrow, keyboardNav, noNavigation]);

  const bind = useDrag(
    debounce(async ({ movement: [mx, my] }: any) => {
      if (vertical) {
        const up = my < 0;
        if (up) {
          await clickLeftArrow();
        } else {
          await clickRightArrow();
        }
      } else {
        const left = mx < 0;
        if (left) {
          await clickLeftArrow();
        } else {
          await clickRightArrow();
        }
      }
    }, 250)
  );

  useKeyPressEvent(vertical ? "ArrowUp" : "ArrowLeft", pressKeyLeft);
  useKeyPressEvent(vertical ? "ArrowDown" : "ArrowRight", pressKeyRight);

  /** Provide imperative handlers for external use */
  React.useImperativeHandle(carouselRef, () => ({
    clickLeftArrow,
    clickRightArrow,
  }));

  const innerCarouselStyles: MotionStyle = React.useMemo(
    () => ({
      width: "100%",
      height: "100%",
      maxHeight: "100%",
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      ...innerCarouselStyle,
    }),
    [innerCarouselStyle, vertical]
  );

  const carouselItemWrapperStyles = React.useMemo(
    () => ({
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
    }),
    [width, height, carouselItemWrapperStyle, gutterSize]
  );

  const mapCarouselItems = React.useCallback(
    (slide, i) => {
      const spring = {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      };

      return (
        <motion.div
          key={(slide as any)?.key}
          custom={i + 1}
          className="ldcarousel-item-wrapper"
          layout
          style={carouselItemWrapperStyles}
          exit={`${direction}Exit`}
          initial={direction}
          animate="base"
          variants={variants}
          transition={spring}
        >
          {slide}
        </motion.div>
      );
    },
    [direction, variants, carouselItemWrapperStyles]
  );
  const carouselInner = React.useMemo(
    () => (
      <AnimatePresence>
        <motion.div
          layout
          ref={(r: HTMLElement | null) => r && containerRef(r)}
          className="ldcarousel-inner"
          style={innerCarouselStyles}
          {...(isMobile ? bind() : {})}
        >
          {slideState
            .filter(Boolean)
            .filter((_slide, i) => i < slideCount + 2)
            .map(mapCarouselItems)}
        </motion.div>
      </AnimatePresence>
    ),
    [
      innerCarouselStyles,
      bind,
      slideState,
      mapCarouselItems,
      containerRef,
      slideCount,
    ]
  );

  return {
    carouselInner,
    clickLeftArrow,
    clickRightArrow,
    noNavigation,
  };
}
function filterAndBufferSlideState(slides: React.ReactNode[]) {
  const filteredSlides = filterBuffers(slides);
  return bufferSlideState(filteredSlides);
}

function filterBuffers(slides: React.ReactNode[]) {
  return slides.filter((node: any) => {
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
function bufferSlideState(slides: React.ReactNode[]) {
  const lastSlide = {
    ...(slides[slides.length - 1] as any),
    key: "buffer" + Math.random(),
  };

  slides.unshift(lastSlide);

  return slides.slice();
}

function createSlideState(slides: React.ReactNode[]) {
  const slideState = filterAndBufferSlideState(slides);

  return slideState;
}
