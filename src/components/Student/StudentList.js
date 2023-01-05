import React from "react";
import classes from './StudentList.module.css'
import Card from "../UI/Card";


const StudentList = (props) => {
  return (
    <Card className={classes.student}>
    <ul>
      {props.students.map((student) => (
        <li key={student.id}>
          {student.name} ({student.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default StudentList;
