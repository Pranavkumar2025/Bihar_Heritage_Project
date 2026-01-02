'use client';  // Important: Must be a client component

import { ReactLenis } from 'lenis/react';

function SmoothScrollWrapper({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,                  // Smoothness duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Custom easing (feels great)
        smoothWheel: true,              // Smooth mouse wheel
        smoothTouch: false,             // Optional: true for mobile touch (can feel laggy on some devices)
        // lerp: 0.1,                   // Alternative to duration for more inertia control
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollWrapper;