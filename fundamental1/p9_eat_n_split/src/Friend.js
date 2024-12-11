const Friend = ({ friend, handleSelectFriend, selectedFriend }) => {
  const isSelected = selectedFriend === friend.frinedName;
  console.log(isSelected, friend, `>`, selectedFriend);
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.imageUrl} alt={friend.frinedName} />
      <h3>{friend.frinedName}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.frinedName} {Math.abs(friend.balance)}₹
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.frinedName} Owes you {Math.abs(friend.balance)}₹
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.frinedName} are even</p>}

      <button
        // className="button"
        className={selectedFriend ? "button select:focus" : "button"}
        onClick={() => handleSelectFriend(friend.frinedName)}
      >
        {isSelected ? "Close" : " Select"}
      </button>
    </li>
  );
};

export default Friend;
