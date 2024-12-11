import { useState } from "react";

const SplitBill = ({
  billValue,
  setBillValue,
  myExpense,
  setMyExpense,
  handleSplitBill,
  friendExpense,
  initialFriends,
  selectedFriend,
}) => {
  const [billCheck, setBillCheck] = useState("");
  const isUser = billCheck === "user";
  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => handleSplitBill(e, selectedFriend)}
    >
      <h2>Split bill with {selectedFriend}</h2>

      <label>💵 Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />

      <label>👨‍🦰 Your Expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(+e.target.value)}
        disabled={!isUser}
      />

      <label>🧑‍🤝‍🧑 {selectedFriend} Expense</label>
      <input
        type="text"
        value={friendExpense}
        // onChange={(e) => setFriendExpense(Number(billValue - myExpense))}
        disabled={isUser}
      />

      <label>☺️ Who is paying the bill?</label>
      <select
        value={billCheck}
        onChange={(e) => {
          console.log(e.target.value);
          setBillCheck(e.target.value);
        }}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
};

export default SplitBill;
