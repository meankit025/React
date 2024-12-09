const Friend = ({ friend }) => {
  console.log(`i`, friend);
  return (
    <li key={friend.id}>
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

      <button className="button">Select</button>
    </li>
  );
};

export default Friend;
