import React from 'react';
import StudentItem from "../StudentItem/studentItem";

const studentsList = (props) => {
    /*const editStudentHandler = (event) =>{
        props.editStudent(props.index);
    };*/
    const students = props.students.map((student,i)=> <StudentItem onClick={()=> props.editStudent(i)} deleteMe={()=>props.deleteStudent(i)} editStudent={props.editStudent} key={i}  student={student} />);

    return (
        <table>
            <thead>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
            </tr>
            </thead>
            <tbody>
                {students}
            </tbody>
        </table>
    );
}

export default studentsList;