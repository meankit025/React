import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [steps, setSteps] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (steps > 0) setSteps(steps - 1);
  };
  const handleNext = () => {
    if (steps < 2) setSteps(steps + 1);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 0 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 1 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {steps}: {messages[steps]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
