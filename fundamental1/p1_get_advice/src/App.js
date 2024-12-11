import { useState, useEffect } from "react";

function App() {
  const [advices, setAdvices] = useState([]);
  const [adviceCount, setAdviceCount] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc")

  // useEffect(() => {
  //   fetch(`https://api.adviceslip.com/advice`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.slip.advice);
  //       // setAdvices(data.slip.advice);
  //       setAdvices([{ slNo: 1, advice: data.slip.advice }]);
  //       setAdviceCount(1)
  //     });
  // }, []);

  const getAdviceHandler = async () => {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvices([...advices, { slNo: adviceCount + 1, advice: data.slip.advice }]);
    setAdviceCount(adviceCount + 1);
  };
  const deleteHandler = (slNo) => {
    const updatedAdvices = advices.filter(row => row.slNo !== slNo).map((row, index) => ({
      slNo: index + 1,
      advice: row.advice
    }));
    setAdvices(updatedAdvices);
    setAdviceCount(updatedAdvices.length);
  }
  const sortAdvices = () => {
    const sortedAdvices = [...advices].sort(function (a, b) {
      if (sortOrder === "asc") {
        return a.slNo - b.slNo;
      } else {
        return b.slNo - a.slNo;
      }
    })
    setAdvices(sortedAdvices);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div style={advices.length > 0 ? { color: "green" } : { color: 'red' }}>
        <h3>{advices.length > 0 ? advices[advices.length - 1].advice : "No advice yet"}</h3>
      </div>
      <div>
        <button onClick={getAdviceHandler}>Get Advice</button>
      </div>
      <br />
      <div>You have clicked {adviceCount} times</div>
      <br />
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th onClick={sortAdvices}>
                Sl No {sortOrder === "asc" ? "▲" : "▼"}
              </th>
              <th>Advices</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {advices.map((row, index) => (
              <tr key={index}>
                <td>{row.slNo}</td>
                <td>{row.advice}</td>
                <td>
                  <button onClick={() => deleteHandler(row.slNo)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
