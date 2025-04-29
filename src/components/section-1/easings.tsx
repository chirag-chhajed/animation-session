"use client";

import React, { useState } from "react";

function EasingDemo({
  label,
  timingFunction,
}: {
  label: string;
  timingFunction: string;
}) {
  const [active, setActive] = useState(false);

  // Start animation on mount
  React.useEffect(() => {
    setActive(true);
  }, []);

  const replay = () => {
    setActive(false);
    setTimeout(() => setActive(true), 1000); // 30ms is enough for browser to flush
  };

  return (
    <div className="flex items-center h-40 my-4 rounded px-4 overflow-hidden relative">
      <div
        className="size-24 bg-yellow-400 rounded shadow-lg transition-transform duration-1000"
        style={{
          transform: active ? "translateX(600px)" : "translateX(0px)",
          transitionTimingFunction: timingFunction,
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
      {/* <span className="ml-4 text-xs text-gray-700">{label}</span> */}
    </div>
  );
}

// If you want six separate exports:
export function EaseIn() {
  return (
    <EasingDemo label="ease-in" timingFunction="cubic-bezier(0.4, 0, 1, 1)" />
  );
}
export function EaseOut() {
  return (
    <EasingDemo label="ease-out" timingFunction="cubic-bezier(0, 0, 0.2, 1)" />
  );
}
export function EaseInOut() {
  return (
    <EasingDemo
      label="ease-in-out"
      timingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
    />
  );
}
export function Ease() {
  return <EasingDemo label="ease" timingFunction="ease" />;
}
export function Linear() {
  return <EasingDemo label="linear" timingFunction="linear" />;
}
export function CustomBezier() {
  return (
    <EasingDemo
      label="cubic-bezier"
      timingFunction="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
    />
  );
}
