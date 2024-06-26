import { useCallback, useLayoutEffect, useState } from "react";
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from "./types";

function getDimensionObject(node: HTMLElement): DimensionObject {
  const rect = node.getBoundingClientRect() as DOMRect;

  return {
    width: rect.width,
    height: rect.height,
    // @ts-ignore
    top: "x" in rect ? rect.x : "top" in rect ? rect.top : 0,
    // @ts-ignore
    left: "y" in rect ? rect.y : "left" in rect ? rect.left : 0,
    // @ts-ignore
    x: "x" in rect ? rect.x : "left" in rect ? rect.left : 0,
    // @ts-ignore
    y: "y" in rect ? rect.y : "top" in rect ? rect.top : 0,
    right: rect.right,
    bottom: rect.bottom,
  };
}

function useDimensions({
  liveMeasure = true,
}: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
    right: 0,
    bottom: 0,
  });
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
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
  }, [node]);

  return [ref, dimensions, node];
}

export default useDimensions;
