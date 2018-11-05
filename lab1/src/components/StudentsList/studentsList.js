import React from 'react';
import StudentItem from "../StudentItem/studentItem";
import {Link} from "react-router-dom";

const studentsList = (props) => {
    const students = props.students.map((student,i)=> <StudentItem onClick={()=> props.editStudent(i)} deleteMe={()=>props.deleteStudent(i)} editStudent={props.editStudent} key={i}  student={student} />);

    return (
        <div>
            <Link to="/newStudent">Add Student</Link>
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
        </div>
    );
}

export default studentsList;