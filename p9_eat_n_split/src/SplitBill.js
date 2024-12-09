const SplitBill = ({ frinedName }) => {
  return (
    <form className="form-split-bill">
      <h2>Split bill with {frinedName}</h2>

      <label>💵 Bill Value</label>
      <input type="text" />

      <label>👨‍🦰 Your Expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X Expense</label>
      <input type="text" />

      <label>☺️ Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>
    </form>
  );
};

export default SplitBill;
