"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Regular React component without exit animation
export const RegularPresence = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-4 h-40">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>

      {isVisible && (
        <div
          className="w-32 h-32 bg-red-500 rounded animate-slideIn"
          style={{
            animation: "slideIn 0.5s ease-out",
          }}
        />
      )}
    </div>
  );
};

// Framer Motion component with exit animation
export const MotionPresence = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-4 h-40">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 bg-green-500 rounded"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Add at the end of the file
const styles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export function AnimatedPresenceDemo() {
  return (
    <>
      <style>{styles}</style>
      <div className="space-y-8 p-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Regular React Toggle</h2>
          <RegularPresence />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Framer Motion Toggle</h2>
          <MotionPresence />
        </div>
      </div>
    </>
  );
}
