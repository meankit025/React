import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  let tip = (service + friendService) / 2;
  const totalBill = bill - tip;
  const handleReset = () => {
    setService("");
    setFriendService("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "aquamarine" }}>
        Tip Calculator Task
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p>How much was the bill?</p>
        <input
          style={{ height: "15px" }}
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p>How did you like the service?</p>
        <select
          style={{ height: "25px", width: "180px" }}
          value={service}
          onChange={(e) => {
            console.log(service, `--`, e.target.value);
            setService(+e.target.value);
          }}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="8.2">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing(20%)</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p>How did your friend like the service?</p>
        <select
          style={{ height: "25px", width: "180px" }}
          value={friendService}
          onChange={(e) => setFriendService(+e.target.value)}
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing(20%)</option>
        </select>
      </div>
      <div>
        <h1>
          You pay {bill}₹({totalBill}₹ + {tip}₹)
        </h1>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
