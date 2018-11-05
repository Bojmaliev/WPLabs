import React from "react";

const studentItem = (props) => {
    const editStudentHandler = (event) =>{
      props.editStudent(props.index);
    };
    return (
        <tr onClick={editStudentHandler}>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
        </tr>
    );
};

export default studentItem;