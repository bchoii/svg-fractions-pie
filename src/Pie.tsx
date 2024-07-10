import { useState } from "react";
import "./App.css";

const range = (size: number): number[] => Array.from(Array(size).keys());

export function Pie({
  numerator,
  denominator,
}: {
  numerator: number;
  denominator: number;
}) {
  const angle = (360 * numerator) / denominator;

  const cos = (angle: number) => Math.cos((angle / 180) * Math.PI);
  const sin = (angle: number) => Math.sin((angle / 180) * Math.PI);

  return (
    <>
      <svg
        viewBox="-200 -200 400 400"
        width="300"
        height="300"
        stroke="white"
        fill="none"
        stroke-width="2"
      >
        <text x="0" y="-120" stroke="none" fill="white" text-anchor="middle">
          {numerator} / {denominator}
        </text>
        <circle r="100" cx="0" cy="0" stroke="#333" />
        {range(denominator).map((n) => (
          <line
            x1="0"
            y1="0"
            x2={100 * sin((360 * n) / denominator)}
            y2={-100 * cos((360 * n) / denominator)}
            stroke="#333"
          />
        ))}
        {range(numerator).map((n) => (
          <line
            x1="0"
            y1="0"
            x2={100 * sin((n * angle) / numerator)}
            y2={-100 * cos((n * angle) / numerator)}
          />
        ))}
        {numerator == denominator ? (
          <circle r="100" cx="0" cy="0" />
        ) : (
          <>
            <path
              d={`M 0 0
           L 0 -100
           A 100 100 0 ${sin(angle) > 0 ? 0 : 1} 1
            ${100 * sin(angle)} ${-100 * cos(angle)}
           L 0 0
           `}
            />
          </>
        )}
      </svg>
    </>
  );
}
