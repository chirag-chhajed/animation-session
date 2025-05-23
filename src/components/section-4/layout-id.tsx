"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Regular React component without layout transitions
export const RegularLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Layout
      </button>

      <div className="flex gap-4">
        {!isExpanded ? (
          <div className="w-32 h-32 bg-red-500 rounded" />
        ) : (
          <div className="w-64 h-32 bg-red-500 rounded" />
        )}
      </div>
    </div>
  );
};

// Framer Motion component with layoutId
export const MotionLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Layout
      </button>

      <div className="flex gap-4">
        {!isExpanded ? (
          <motion.div
            layoutId="uniqueId"
            className={`bg-green-500 rounded w-32
             h-32`}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <motion.div
            layoutId="uniqueId"
            className={`bg-green-500 rounded w-64
             h-32`}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export function LayoutIdDemo() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <RegularLayout />
      </div>
      <div>
        <MotionLayout />
      </div>
    </div>
  );
}
