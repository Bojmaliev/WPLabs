import React from "react";
import {Link} from "react-router-dom";

const studentItem = (props) => {
    return (
        <tr>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
            <td><button onClick={props.deleteMe}>Delete me</button></td>
            <td><button onClick={props.onClick}><Link to="/editStudent">Edit</Link></button></td>
        </tr>
    );
};

export default studentItem;