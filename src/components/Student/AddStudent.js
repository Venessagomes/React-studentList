import React from "react";
import classes from './AddStudent.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddStudent = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button type='submit'>Add Student</Button> 
      </form>
      </Card>
  );
};

export default AddStudent;
