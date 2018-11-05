import React from "react";

const studentItem = (props) => {
    return (
        <tr onClick={props.onClick}>
            <td>{props.student.firstName}</td>
            <td>{props.student.lastName}</td>
        </tr>
    );
};

export default studentItem;