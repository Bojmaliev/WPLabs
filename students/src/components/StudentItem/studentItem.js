import React from "react";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {deleteStudent} from "../../repository/studentRepository";

const studentItem = (props) => {

    const deleteMe  = ()=>{
        deleteStudent(props.student.index)
            .then(()=>{
                props.finish();
            });
    };
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.lastName}</td>
            <td><Link to={"/viewStudentDetails/"+props.student.index}><Button bsStyle="info">View details</Button></Link>&nbsp;
             <Link to={"/editStudent/"+props.student.index}><Button bsStyle="primary">Edit </Button></Link>&nbsp;
            <Button bsStyle="danger" onClick={deleteMe}>Delete</Button></td>

        </tr>
    );
};

export default studentItem;