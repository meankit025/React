import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import { useState } from "react";
import SplitBill from "./SplitBill";
import Button from "./Button";
// const images = [
//   "https://i.pravatar.cc/48?u=118836",
//   "https://i.pravatar.cc/48?u=933372",
//   "https://i.pravatar.cc/48?u=499476",
// ];

const Appv1 = () => {
  const [frinedName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
  const [initialFriends, setInitialFriends] = useState([]);
  const [balance, setBalance] = useState(0);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [billValue, setBillValue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [showAddFriend, setShowAddFriend] = useState(false);
  let friendExpense = billValue ? billValue - myExpense : "";

  const handleSplitBill = (e) => {
    e.preventDefault();

    const friendExpense = billValue - myExpense;
    const updatedFriends = initialFriends.map((friend) => {
      if (friend.frinedName === selectedFriend) {
        const updatedBalance = friend.balance + friendExpense;
        return { ...friend, balance: updatedBalance };
      }
      return friend;
    });
    console.log(updatedFriends);
    setInitialFriends(updatedFriends);
    setBillValue("");
    setMyExpense("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNewFriend = {
      frinedName,
      imageUrl,
      balance,
      id: Date.now(),
    };
    setInitialFriends([...initialFriends, addNewFriend]);
    setFriendName("");
    setImageUrl("https://i.pravatar.cc/48");
  };
  const handleSelectFriend = (name) => {
    console.log(name);
    setSelectedFriend(name);
  };

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    // setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          initialFriends={initialFriends}
          handleSelectFriend={handleSelectFriend}
          friendExpense={friendExpense}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend
            frinedName={frinedName}
            setFriendName={setFriendName}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            handleSubmit={handleSubmit}
            setInitialFriends={setInitialFriends}
            initialFriends={initialFriends}
          />
        )}
        <Button onClick={handleShowAddFriend} showAddFriend={showAddFriend} />
        <br />
      </div>
      <div>
        <SplitBill
          billValue={billValue}
          setBillValue={setBillValue}
          friendExpense={friendExpense}
          myExpense={myExpense}
          setMyExpense={setMyExpense}
          handleSplitBill={handleSplitBill}
          frinedName={frinedName}
          initialFriends={initialFriends}
          setInitialFriends={setInitialFriends}
          selectedFriend={selectedFriend}
        />
      </div>
    </div>
  );
};

export default Appv1;
