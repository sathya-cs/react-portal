import React, { useState } from 'react';
import classes from './App.module.css';
import Form from './Component/Form';
import UserList from './Component/UserList';

const users = [
  { name: 'sathya', age: 14 },
  { name: 'jeeva', age: 32 },
  { name: 'arun', age: 12 },
];

const App = () => {
  const [user, setUser] = useState(users);

  const addUserHandler = (newUser) => {
    setUser((pre) => {
      return [...pre, newUser];
    });
  };

  return (
    <main className={classes.main}>
      <Form addUser={addUserHandler} />
      <UserList users={user} />
    </main>
  );
};

export default App;
