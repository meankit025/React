import Friend from "./Friend";

const FriendList = ({ initialFriends, handleSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendList;
