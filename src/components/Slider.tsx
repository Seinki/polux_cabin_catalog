import React from "react";
// import "./Slider.css";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  step = 1,
  onChange,
  className = "",
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="slider-input" className="slider-label">
        Slider
      </label>
      <input
        id="slider-input"
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="custom-slider"
        title="Select a value"
        placeholder="Select a value"
        data-percentage={percentage}
      />
      <div className="slider-range-labels">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};
