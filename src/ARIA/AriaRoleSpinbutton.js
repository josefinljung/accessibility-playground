import { useState } from "react";

export default function AriaRoleSpinbutton() {
  const [value, setValue] = useState(5);
  const min = 1;
  const max = 10;

  const increment = () => {
    setValue((prev) => Math.min(prev + 1, max));
  };

  const decrement = () => {
    setValue((prev) => Math.max(prev - 1, min));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      increment();
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      decrement();
      e.preventDefault();
    }
  };
  return (
    <div className="bg-white border-black border-2 p-2 rounded-md max-w-[500px]">
      <h2 className="text-xl font-medium">Aria Role spinbutton</h2>

      <div
        role="spinbutton"
        tabIndex="0"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label="Select quantity"
        onKeyDown={handleKeyDown}
        style={{
          display: "inline-block",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          userSelect: "none",
          cursor: "default",
          width: "60px",
          textAlign: "center",
        }}
      >
        {value}
      </div>
    </div>
  );
}
