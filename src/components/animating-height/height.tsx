"use client";

import { motion } from "motion/react";
import { useMeasure } from "@uidotdev/usehooks";
import { useState } from "react";

export function Height() {
  const [showExtraContent, setShowExtraContent] = useState(false);

  return (
    <>
      <style>
        {`
        .wrapper {
  display: grid;
  place-items: center;
  background: #0d0d0d;
  color: #000;
  padding-block: 100px;
}

.element {
  background: white;
  border-radius: 16px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.inner {
  padding: 13px 16px;
}

.element h1 {
  font-weight: 600;
}

.element p {
  color: #63635d;
}

.button {
  background: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 10px;

}
 
        `}
      </style>
      <div className="wrapper">
        <button
          className="button"
          onClick={() => setShowExtraContent((b) => !b)}
        >
          Toggle height
        </button>
        <div className="element">
          <div className="inner">
            <h1>Fake Family Drawer</h1>
            <p>
              This is a fake family drawer. Animating height is tricky, but
              satisfying when it works.
            </p>
            {showExtraContent ? (
              <p>
                This extra content will change the height of the drawer. Some
                even more content to make the drawer taller and taller and
                taller...
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export function AnimatedHeight() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <div className="wrapper">
      <button className="button" onClick={() => setShowExtraContent((b) => !b)}>
        Toggle height
      </button>
      <motion.div animate={{ height: bounds.height }} className="element">
        <div ref={elementRef} className="inner">
          <h1>Fake Family Drawer</h1>
          <p>
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p>This extra content will change the height of the drawer.</p>
          ) : null}
        </div>
      </motion.div>
      <style scoped>
        {`.wrapper {
  display: grid;
  padding-block: 100px;
  place-items: center;
  background: #0d0d0d;
  color: #000;
}

.element {
  background: white;
  border-radius: 16px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
}

.inner {
  padding: 13px 16px;
}

.element h1 {
  font-weight: 600;
}

.element p {
  color: #63635d;
}

.button {
  background: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 10px;
}
 `}
      </style>
    </div>
  );
}
