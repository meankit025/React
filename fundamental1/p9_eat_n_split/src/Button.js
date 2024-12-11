const Button = ({ onClick, showAddFriend }) => {
  console.log(showAddFriend);
  return (
    <button className="button" onClick={onClick}>
      {showAddFriend ? "Close" : " Add Friend"}
    </button>
  );
};

export default Button;
