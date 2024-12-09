const FormAddFriend = ({
  frinedName,
  setFriendName,
  imageUrl,
  setImageUrl,
  handleSubmit,
  setInitialFriends,
  initialFriends,
}) => {
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👯‍♂️ Friend Name</label>
      <input
        type="text"
        value={frinedName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <button className="button">Add</button>
    </form>
  );
};

export default FormAddFriend;
