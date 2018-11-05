import React from "react";

const studentItem = (props) => {
    return (
        <tr>
            <td  onClick={props.onClick}>{props.student.firstName}</td>
            <td  onClick={props.onClick}>{props.student.lastName}</td>
            <td><button onClick={props.deleteMe}>Delete me</button></td>
        </tr>
    );
};

export default studentItem;