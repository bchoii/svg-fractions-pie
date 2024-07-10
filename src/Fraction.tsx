import "./App.css";

const range = (size: number): number[] => Array.from(Array(size).keys());

export function Fraction({
  numerator,
  denominator,
}: {
  numerator: number;
  denominator: number;
}) {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        width="300"
        height="100"
        stroke="white"
        fill="none"
        stroke-width="2"
      >
        <text x="50" y="50" stroke="none" fill="white" text-anchor="middle">
          {numerator} / {denominator}
        </text>
      </svg>
    </>
  );
}
