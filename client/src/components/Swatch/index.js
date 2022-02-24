import React from "react";

function Swatch(props) {
  const { colors, setValue, value } = props;
  return (
    <>
      <div style={{ backgroundColor: value }}>
        {colors.map((color) => {
          return (
            <>
              <button onClick={() => setValue(color)}>{color}</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Swatch;
