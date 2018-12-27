import React from 'react';
import Button from "react-bootstrap/es/Button";
import {deleteStudyProgram} from "../../repository/studyProgramRepository";
import {checkStatus} from "../../repository/studentRepository";
import {Link} from "react-router-dom";


const studyProgramItem = (props) => {

    const deleteMe  = ()=>{
        deleteStudyProgram(props.studyProgram.id)
            .then(checkStatus)
            .then(()=>{
                props.finish();
            }).catch(error=> alert(error.message));
    };
    return (
        <tr><td>{props.studyProgram.name}</td><td>
            <Link to={"/editStudyProgram/"+props.studyProgram.id}><Button bsStyle="primary">Edit </Button></Link>&nbsp;
            <Button bsStyle="danger" onClick={deleteMe}>Delete</Button>

        </td><td>
        </td></tr>
    );

};

export default studyProgramItem;