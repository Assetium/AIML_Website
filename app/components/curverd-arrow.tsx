import React from "react";

const CurvedArrow = () => {
  return (
    <svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      {/* Define arrowhead */}
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="white" />
        </marker>
      </defs>

      {/* S-shaped Curved Path */}
      <path
        d="M10 50 C100 0, 200 150, 150 200 
           C100 250, 50 300, 250 350"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

export default CurvedArrow;
