import React from 'react';
import classes from './Error.module.css';
import ReactDOM from 'react-dom';

export const BackDrop = ({ errorRemoveHandler }) => {
  return <div className={classes.backdrop} onClick={errorRemoveHandler}></div>;
};

const Modal = ({ errorMsg, errorRemoveHandler }) => {
  return (
    <div className={classes.model}>
      <h1>Error</h1>
      <p>{errorMsg}</p>
      <button onClick={errorRemoveHandler}>Ok</button>
    </div>
  );
};

const Error = ({ errorMsg, errorRemoveHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop errorRemoveHandler={errorRemoveHandler} />,
        document.getElementById('backdrop')
      )}

      {ReactDOM.createPortal(
        <Modal errorMsg={errorMsg} errorRemoveHandler={errorRemoveHandler} />,
        document.getElementById('modal')
      )}
    </>
  );
};

export default Error;
