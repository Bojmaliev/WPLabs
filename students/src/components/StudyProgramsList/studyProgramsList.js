import React from 'react';
import Grid from "react-bootstrap/es/Grid";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/es/Button";
import Table from "react-bootstrap/es/Table";
import StudyProgramItem from "../StudyProgramItem/studyProgramItem";

const studyProgramsList = (props) => {
    let studyPrograms = props.studyPrograms.map((a, i)=> <StudyProgramItem finish={props.finish} key={i}  studyProgram={a} />);
    return (
        <Grid>
            <Link to="/newStudyProgram"><Button bsStyle="info">Create new study Program</Button></Link>
            <Table responsive striped bordered condensed>

                <thead>
                <tr>
                    <th>Name: </th>
                    <th>Actions: </th>
                </tr>
                </thead>
                <tbody>
                {studyPrograms}
                </tbody>
            </Table>
        </Grid>
    );
};

export default studyProgramsList;