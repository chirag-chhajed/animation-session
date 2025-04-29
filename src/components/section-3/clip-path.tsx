"use client";

import { useEffect, useState } from "react";

export const ClipPathDemo = () => {
  const [selectedShape, setSelectedShape] = useState("circle");

  const shapes = {
    circle: "circle(50% at 50% 50%)",
    triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
    pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    custom:
      "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div
        className="size-32 bg-slate-200 transition-all duration-300"
        style={{
          clipPath: shapes[selectedShape as keyof typeof shapes],
        }}
      />

      <div className="flex gap-4 flex-wrap justify-center">
        {Object.keys(shapes).map((shape) => (
          <button
            key={shape}
            onClick={() => setSelectedShape(shape)}
            className={`px-4 py-2 rounded ${
              selectedShape === shape
                ? "bg-slate-200 text-slate-800"
                : "bg-white hover:bg-slate-50 text-slate-600"
            }`}
          >
            {shape.charAt(0).toUpperCase() + shape.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export const SplitText = () => {
  const [mousePosition, setMousePosition] = useState(50);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition(Math.min(Math.max(y, 0), 100));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative py-10 flex items-center justify-center text-6xl font-bold">
      <div
        className="absolute text-sky-400"
        style={{
          clipPath: `inset(0 0 ${100 - mousePosition}% 0)`,
        }}
      >
        REALLY COOL TEXT
      </div>
      <div
        className="absolute text-sky-800"
        style={{
          clipPath: `inset(${mousePosition}% 0 0 0)`,
        }}
      >
        REALLY COOL TEXT
      </div>
    </div>
  );
};
