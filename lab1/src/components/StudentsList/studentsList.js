import React from 'react';
import StudentItem from "../StudentItem/studentItem";

const studentsList = (props) => {

    const students = props.students.map((student,i)=> <StudentItem editStudent={props.editStudent} key={i} index={i} student={student} />);

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