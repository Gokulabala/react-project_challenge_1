import React from "react";

const Box = ({ color, hexCode, isDarkText }) => {
  return (
    <section
      style={{
        margin: 5,
        height: 200,
        width: 200,
        backgroundColor: color,
        color: isDarkText ? "#000" : "#FFF",
        border: "2px solid black",
      }}
    >
      <p> {color ? color : "Empty Value"}</p>
      <p>{hexCode ? hexCode : null}</p>
    </section>
  );
};
Box.defaultProps = {
  color: "Empty Color from default props",
};
export default Box;
