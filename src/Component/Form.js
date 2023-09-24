import React, { useState } from 'react';
import classes from './Form.module.css';
import Error from './Error';

const Form = ({ addUser }) => {
  const [user, setUser] = useState({ name: '', age: '' });
  const [isError, serIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputChangeHandler = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const errorRemoveHandler = () => {
    serIsError(!isError);
    setErrorMsg('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!user.name || !user.age) {
      serIsError(!isError);
      setErrorMsg('Please Provide Input Data');
    } else if (user.name.trim() === '' || user.age <= 0) {
      serIsError(!isError);
      setErrorMsg('InValid Data');
    } else {
      addUser(user);
      setUser(() => {
        return { name: '', age: '' };
      });
    }
  };

  return (
    <>
      {isError && (
        <Error errorMsg={errorMsg} errorRemoveHandler={errorRemoveHandler} />
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='name'>User Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter Your Name'
          autoComplete='false'
          value={user.name}
          onChange={inputChangeHandler}
        />
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          id='age'
          placeholder='Enter Your Age'
          value={user.age}
          onChange={inputChangeHandler}
        />
        <button type='submit'>Add User</button>
      </form>
    </>
  );
};

export default Form;
