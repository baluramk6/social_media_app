import "./closeFriend.css";

export const CloseFriend = ({ friend }) => {
  return (
    <li className="sidebarFriendListItem">
      <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{friend.username}</span>
    </li>
  );
};
