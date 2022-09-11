import React, { useState, useLayoutEffect, useEffect } from "react";
import usePrevious from "./usePrevious";
import calculateBoundingBoxes from "./calculateBoundingBoxes";

const AnimateBubbles = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);
  //   console.log(React.Parent);
  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child, index) => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];
        const lastBox = boundingBox[child.key];
        const changeInY = firstBox.top - lastBox.top;

        // const prevDomNode = children[index-1].ref.current;
        const prevFirstBox =
          index > 1 ? prevBoundingBox[children[index - 1].key] : 0;
        const prevLastBox =
          index > 1 ? boundingBox[children[index - 1].key] : 0;
        const prevChangeInY =
          index > 1 ? prevFirstBox.top - prevLastBox.top : 0;

        const nextFirstBox =
          index < children.length - 1
            ? prevBoundingBox[children[index + 1].key]
            : 0;
        const nextLastBox =
          index < children.length - 1
            ? boundingBox[children[index + 1].key]
            : 0;
        const nextChangeInY =
          index < children.length - 1 ? nextFirstBox.top - nextLastBox.top : 0;

        if (changeInY) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert child to old position
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = "transform 0s";

            requestAnimationFrame(() => {
              // After the previous frame, remove
              // the transistion to play the animation
              domNode.style.transform = "";
              domNode.style.transition = "transform 1s";
            });
          });
        }
        if (
          Math.abs(changeInY) > Math.abs(prevChangeInY) &&
          Math.abs(changeInY) > Math.abs(nextChangeInY)
        )
          domNode.scrollIntoView({ behavior: "smooth", block: "center" });
        else if (changeInY < prevChangeInY && changeInY < nextChangeInY)
          domNode.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default AnimateBubbles;
