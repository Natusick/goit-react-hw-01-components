import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li key={id} className={s.item}>
          <span className={isOnline ? s.inOnline : s.inOffline}>
            {isOnline}
          </span>
          <img
            className={s.avatar}
            src={avatar}
            alt=" Аватар користувача "
            width=" 48 "
          />
          <p className={s.name}>{name} </p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
