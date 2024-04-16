import React from "react";
import colorNames from "colornames";

const AddColor = ({ color, setColor, setHexCode }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexCode(colorNames(e.target.value));
        }}
        type="text"
        placeholder="Add color name"
      />
    </form>
  );
};

export default AddColor;
