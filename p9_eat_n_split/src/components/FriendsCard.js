import { useState } from "react";
const FriendCard = ({
  name,
  image,
  setName,
  setImage,
  addFriend,
  onAddFriend,
  handleSelectFriend,
  friendExpense,
  handleSplitBill,
}) => {
  console.log(handleSplitBill);
  const [modal, setModal] = useState(false);
  const handleAdd = () => {
    const addNewFriend = {
      name,
      image,
    };
    onAddFriend([...addFriend, addNewFriend]);
    setName("");
    setImage("");
  };

  const handleClick = () => {
    setModal((isOpen) => !isOpen);
  };

  return (
    <div>
      {modal && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span>
              <p>Friend Name</p>
            </span>
            <span>
              <input
                type="text"
                style={{ width: "200px", height: "30px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <span>
              <p>Image URL</p>
            </span>
            <span>
              <input
                style={{ width: "300px", height: "30px" }}
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </span>
          </div>
          <br />
          <div>
            <button onClick={handleAdd}>Add</button>
          </div>
          <br />
          {/* checking name input and image url name */}
          <div>
            {addFriend.map((friend, idx) => (
              <>
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    margin: "10px",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <img
                      style={{ height: "30px", width: "30px" }}
                      src={friend.image}
                      alt={friend.name}
                    />
                  </span>
                  <div>{() => handleSplitBill()}</div>
                  <span>
                    <h3 style={{ color: "maroon" }}>{friend.name}</h3>
                  </span>
                  <span>
                    <button
                      onClick={() => handleSelectFriend(friend.name)}
                      style={{ backgroundColor: "darkcyan " }}
                    >
                      Select
                    </button>
                  </span>
                </div>
                <div style={{ color: "green", margin: 0, padding: 0 }}>
                  {friend.name} owes {friendExpense} rupees
                </div>
              </>
            ))}
          </div>
        </>
      )}
      <br />
      <div>
        <button onClick={handleClick}>{modal ? "Close" : "Open"}</button>
      </div>
    </div>
  );
};

export default FriendCard;
