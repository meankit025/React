import FriendsCard from "./components/FriendsCard";
import SplitBill from "./components/SplitBill";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [addFriend, setAddFriend] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState("");
  const [chooseBillPaid, setChooseBillPaid] = useState("you");
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  let friendExpense = billValue - myExpense;
  const handleSelectFriend = (frinedName) => {
    console.log(frinedName);
    setSelectedFriend(frinedName);
  };
  const handleSplitBill = () => {
    console.log(`${selectedFriend} owes ${friendExpense}₹`);
    return (
      <p>
        {selectedFriend} owes {friendExpense}₹
      </p>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "550px" }}>
      <FriendsCard
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        addFriend={addFriend}
        onAddFriend={setAddFriend}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        handleSelectFriend={handleSelectFriend}
        friendExpense={friendExpense}
        handleSplitBill={handleSplitBill}
      />
      <SplitBill
        name={name}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
        chooseBillPaid={chooseBillPaid}
        setChooseBillPaid={setChooseBillPaid}
        friendExpense={friendExpense}
        billValue={billValue}
        setBillValue={setBillValue}
        setMyExpense={setMyExpense}
        handleSplitBill={handleSplitBill}
      />
    </div>
  );
}

export default App;
