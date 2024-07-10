import { useState } from "react";
import "./App.css";
import { Pie } from "./Pie";
import { Fraction } from "./Fraction";

const range = (size: number): number[] => Array.from(Array(size).keys());

function App() {
  const [numerator, setNumerator] = useState(2);
  const [denominator, setDenominator] = useState(10);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          width: 300,
          margin: "auto",
        }}
      >
        <div>Numerator :</div>
        <input
          type="range"
          value={numerator}
          min={0}
          max={24}
          onChange={(e) => {
            const value = +e.target.value;
            setNumerator(value);
          }}
        ></input>
        {numerator}
        <div>Denominator :</div>
        <input
          type="range"
          value={denominator}
          min={1}
          max={24}
          onChange={(e) => {
            const value = +e.target.value;
            setDenominator(value);
          }}
        ></input>
        {denominator}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fraction {...{ numerator, denominator }}></Fraction>
      </div>
      <div style={{ display: "grid" }}>
        <div style={{ display: "flex", overflowX: "scroll" }}>
          {numerator == 0 && <Pie numerator={0} {...{ denominator }}></Pie>}
          {range(Math.floor(numerator / denominator)).map((x) => (
            <Pie {...{ numerator: denominator, denominator }}></Pie>
          ))}
          {numerator % denominator > 0 && (
            <Pie {...{ numerator: numerator % denominator, denominator }}></Pie>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
