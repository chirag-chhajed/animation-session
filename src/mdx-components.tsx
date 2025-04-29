import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Loader from "./components/section-1/loader";
import {
  CustomBezier,
  Ease,
  EaseIn,
  EaseInOut,
  EaseOut,
  Linear,
} from "./components/section-1/easings";
import {
  EasingSpring,
  MotionSpring,
} from "./components/section-1/spring-animations";
import { ClipPathDemo, SplitText } from "./components/section-1/clip-path";
import { TabsClipPath } from "./components/section-1/tabs-path";
// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Loader,
    CustomBezier,
    Ease,
    EaseIn,
    EaseInOut,
    EaseOut,
    Linear,
    EasingSpring,
    MotionSpring,
    ClipPathDemo,
    SplitText,
    TabsClipPath,
  };
}
