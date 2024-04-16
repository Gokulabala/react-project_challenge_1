import React from "react";

const ToggleColor = ({ isDarkText, setIsDarkText }) => {
  return (
    <form>
      <button onClick={() => setIsDarkText(!isDarkText)} type="button">
        Toggle Text Color
      </button>
    </form>
  );
};

export default ToggleColor;
