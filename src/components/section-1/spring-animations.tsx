// src/components/section-1/spring-animations.tsx
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

// 1. CSS transition with easing
export function EasingSpring() {
  const [active, setActive] = useState(false);
  React.useEffect(() => setActive(true), []);
  const replay = () => {
    setActive(false);
    setTimeout(() => setActive(true), 1000);
  };
  return (
    <div className="flex items-center h-40 my-4 relative rounded px-4 overflow-hidden">
      <div
        className="w-24 h-24 bg-yellow-400 rounded shadow-lg transition-transform duration-1000"
        style={{
          transform: active ? "translateX(600px)" : "translateX(0px)",
          transitionTimingFunction: "linear",
        }}
      />
      <button
        className="absolute left-0 top-0 p-2 bg-gray-800 text-white rounded"
        onClick={replay}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-repeat-icon lucide-repeat"
        >
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      </button>
      <span className="ml-4 text-xs text-gray-700">CSS cubic-bezier</span>
    </div>
  );
}

// 2. Framer Motion spring with bounce
export function MotionSpring() {
  const [active, setActive] = useState(false);
  React.useEffect(() => setActive(true), []);
  const replay = () => {
    setActive(false);
    setTimeout(() => setActive(true), 1000);
  };
  return (
    <div className="flex items-center h-40 my-4 relative rounded px-4 overflow-hidden">
      <motion.div
        className="w-24 h-24 bg-yellow-400 rounded shadow-lg"
        animate={{ x: active ? 600 : 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          bounce: 0.5,
        }}
      />
      <button
        className="absolute left-0 top-0 p-2 bg-gray-800 text-white rounded"
        onClick={replay}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-repeat-icon lucide-repeat"
        >
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      </button>
      <span className="ml-4 text-xs text-gray-700">Motion spring</span>
    </div>
  );
}
