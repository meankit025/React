import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import { useState } from "react";
import SplitBill from "./SplitBill";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

const Appv1 = () => {
  const [frinedName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [initialFriends, setInitialFriends] = useState([]);
  const [balance, setBalance] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const addNewFriend = {
      frinedName,
      imageUrl,
      balance,
      id: Date.now(),
    };
    console.log([...initialFriends, addNewFriend]);
    setInitialFriends([...initialFriends, addNewFriend]);
    setFriendName("");
    setImageUrl("");
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={initialFriends} />
        <FormAddFriend
          frinedName={frinedName}
          setFriendName={setFriendName}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          handleSubmit={handleSubmit}
          setInitialFriends={setInitialFriends}
          initialFriends={initialFriends}
        />
        <SplitBill frinedName={frinedName} />
      </div>
    </div>
  );
};

export default Appv1;
