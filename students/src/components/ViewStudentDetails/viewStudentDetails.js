import {Component} from "react";
import {checkStatus, getStudentDetails} from "../../repository/studentRepository";
import Alert from "react-bootstrap/es/Alert";
import React from "react";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Grid from "react-bootstrap/es/Grid";
import Table from "react-bootstrap/es/Table";
import Button from "react-bootstrap/es/Button";
import {Link} from "react-router-dom";

class viewStudentDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            student:null,
            message:""
        };
    }
    componentDidMount () {
        const { index } = this.props.match.params;

        getStudentDetails(index)
            .then(checkStatus)
            .then(function(res){return res.json()})
            .then((res) => {
                console.log(res)
                this.setState({
                    student: res
                });
            }).catch(error=>{
                this.setState({message: <Alert bsStyle="warning">{error.message}</Alert>});
            });
    }
    render(){
        return (
            <Grid>
                    <Link to="/"><Button bsStyle="info">Back to the list</Button></Link>
                    <Col xs={12} md={12}>{this.state.message}</Col>
                {console.log(this.state)}
                {this.state.student != null ?
                    <Table responsive striped bordered condensed>
                    <tr><td>Index: </td><td>{this.state.student.index}</td></tr>
                    <tr><td>Name:</td><td>{this.state.student.name}</td></tr>
                    <tr><td>Last name:</td><td>{this.state.student.lastName}</td></tr>
                    <tr><td>Study program:</td><td>{this.state.student.studyProgram.name}</td></tr>
                    </Table>
                    :""}
            </Grid>
        );
    }
}

export default viewStudentDetails;