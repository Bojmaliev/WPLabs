import React from 'react';
import StudentItem from "../StudentItem/studentItem";
import {Link} from "react-router-dom";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/es/Button";
import Grid from "react-bootstrap/es/Grid";

const studentsList = (props) => {
    const students = props.students.map((student,i)=> <StudentItem finish={props.finish} key={i}  student={student} />);

    return (
        <Grid>
            <Link to="/newStudent"><Button bsStyle="info">Create new student</Button></Link>
        <Table responsive striped bordered condensed>

            <thead>
            <tr>
                <th>Name: </th>
                <th>Last name: </th>
                <th>Actions: </th>
            </tr>
            </thead>
            <tbody>
                {students}
            </tbody>
        </Table>
        </Grid>
    );
};

export default studentsList;