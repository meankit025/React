import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  const [btn, setBtn] = useState(false);

  const btnStyle = {
    padding: "20px",
    border: "none",
    margin: "10px",
    backgroundColor: btn ? "purple" : "aqua",
    color: btn ? "black" : "white",
  };

  const increment = () => {
    setInputValue(inputValue + 1);
    setBtn(true);
  };

  const decrement = () => {
    if (inputValue <= 1) {
      setInputValue(0);
      setBtn(false);
    } else {
      setInputValue(inputValue - 1);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="enter something"
        style={{ margin: "20px", padding: "25px" }}
        value={inputValue}
        readOnly
      />

      <button style={btnStyle} onClick={increment}>
        +
      </button>
      <button style={btnStyle} onClick={decrement} disabled={!btn}>
        -
      </button>
      <div>
        {inputValue < 1 ? (
          <p
            style={{
              backgroundColor: "yellowgreen",
              padding: "30px",
              textAlign: "center",
            }}
          >
            No Negative Value
          </p>
        ) : (
          inputValue
        )}
      </div>
    </div>
  );
};

export default Home;
