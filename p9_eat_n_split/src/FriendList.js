import Friend from "./Friend";

const FriendList = ({ initialFriends }) => {
  console.log(initialFriends);
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
