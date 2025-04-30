"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

export function MyComponent() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-180, 0, 180]);
  const scale = useTransform(x, [-200, 0, 200], [0.5, 1, 1.5]);
  return (
    <motion.div
      drag="x"
      style={{
        x, // x position (draggable)
        rotate, // rotation based on x
        scale, // scale based on x
      }}
      className="size-50 bg-amber-500"
    />
  );
}

export function SpringControlledAnimationCorrected() {
  const x = useMotionValue(0);

  // Create a spring animation for the 'x' motion value
  const springX = useSpring(x);

  const handleIncreaseX = () => {
    x.set(x.get() + 50); // Directly set the new value of 'x'
  };

  return (
    <div className="space-y-3 py-10">
      <motion.div
        style={{
          width: 50,
          height: 50,
          x: springX, // Apply the spring-animated 'x' value
        }}
        className="bg-amber-300 rounded-2xl"
      />
      <button
        className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold p-2 rounded"
        onClick={handleIncreaseX}
      >
        Increase X by 50
      </button>
    </div>
  );
}
