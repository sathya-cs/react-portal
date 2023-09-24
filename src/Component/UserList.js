import React from 'react';
import classes from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <div className={classes['user-list']}>
      <div className={classes.list}>
        {users.map((user) => {
          return (
            <p key={Math.random().toString()}>
              <span>{user.name}</span>
              <span>{`Age (${user.age})`}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
