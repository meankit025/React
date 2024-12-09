const SplitBill = ({
  name,
  chooseBillPaid,
  billValue,
  myExpense,
  setBillValue,
  friendExpense,
  setMyExpense,
  setChooseBillPaid,
  selectedFriend,
  handleSplitBill,
}) => {
  console.log(handleSplitBill);
  return (
    <div>
      <h2>SPLIT A BILL WITH {selectedFriend}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>💵</span>
        <span>Bill Value</span>
        <input
          type="text"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
          style={{ width: "100px", height: "25px" }}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>👨‍🦰</span>
        <span>Your Expense</span>
        <input
          type="text"
          value={myExpense}
          onChange={(e) => setMyExpense(+e.target.value)}
          style={{ width: "100px", height: "25px" }}
          disabled={chooseBillPaid !== "you"}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>🧑‍🤝‍🧑</span>
        <span>{selectedFriend} Expense</span>
        <input
          type="text"
          style={{ width: "100px", height: "25px" }}
          value={friendExpense}
          disabled={chooseBillPaid !== name}
        />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>☺️</span>
        <span>Who is Paying the bill?</span>
        <select
          style={{ width: "100px", height: "25px" }}
          value={chooseBillPaid}
          onChange={(e) => {
            setChooseBillPaid(e.target.value);
          }}
        >
          <option value="you">You</option>
          <option value={selectedFriend}>{selectedFriend}</option>
        </select>
      </div>
      <div>
        <br />
        <button onClick={() => handleSplitBill()}>SplitBill</button>
      </div>
    </div>
  );
};

export default SplitBill;
