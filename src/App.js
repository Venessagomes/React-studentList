import React, { useState } from "react";
import AddStudent from "./components/Student/AddStudent";
import StudentList from "./components/Student/StudentList";

function App() {
  const [studentList, setStudentList] = useState([]);

  const addStudentHandler = (uName, uAge) => {
    setStudentList((prevStudentList) => {
      return [
        ...prevStudentList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddStudent onAddStudent={addStudentHandler} />
      <StudentList students={studentList} />
    </div>
  );
}

export default App;
