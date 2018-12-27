import React,{Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {
    checkStatus,
    getStudentDetails,
    patchStudentDetails
} from "../../repository/studentRepository";
import Button from "react-bootstrap/es/Button";
import Table from "react-bootstrap/es/Table";
import Grid from "react-bootstrap/es/Grid";
import Alert from "react-bootstrap/es/Alert";
import {listStudyPrograms} from "../../repository/studyProgramRepository";

class editStudentDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            student:null,
            redirectTo:null,
            message:"",
            studyPrograms:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        const { index } = this.props.match.params;

        getStudentDetails(index)
            .then(checkStatus)
            .then(function(res){return res.json()}
                ).then((res) => {
               this.setState({

                   student:{
                       name:res.name,
                       lastName: res.lastName,
                       index: res.index,
                       studyProgramId: res.studyProgram.id
                   }
               });
            }).catch(error => {
                this.setState({message:<Alert bsStyle="warning">{error.message}</Alert>});
        } );
        listStudyPrograms()
            .then(res=> {
                 return res.json()})
            .then((res)=>{
                this.setState({studyPrograms:res});
            });
    }
    handleChange(event){
        const newStudent = this.state.student;
        newStudent[event.target.name] = event.target.value;
        this.setState({
            student: newStudent
        });
    }
    handleSubmit(event){
        event.preventDefault();
        patchStudentDetails(this.state.student)
            .then(checkStatus)
            .then((response)=>{
                    this.props.finish();
                    this.setState({redirectTo: "/"});

            }).catch(error =>
            this.setState({message:<Alert bsStyle="warning">{error.message}</Alert>})
        );

    };

    render(){
        let redirect ="";
        if(this.state.redirectTo != null)
            redirect =  <Redirect to={{ pathname: this.state.redirectTo }} />;
            let message  = <span>{this.state.message}</span>;
        let studyPrograms = this.state.studyPrograms.map(a=> <option value={a.id}>{a.name}</option>);
        return (
            <Grid>
                <Link to="/"><Button bsStyle="info">Back to the list</Button></Link>
                {redirect}
                {message}
            <form onSubmit={this.handleSubmit} >
                {this.state.student != null ? <Table responsive striped bordered condensed>
                <tbody>
                <tr><td>Name:</td><td><input type="text" name="name" value={this.state.student.name} onChange={this.handleChange}/></td></tr>
                <tr><td>Last name:</td><td><input type="text" name="lastName" value={this.state.student.lastName} onChange={this.handleChange}/></td></tr>
                <tr><td>Index:</td><td><input type="text"  name="index" value={this.state.student.index} onChange={this.handleChange}/></td></tr>
                <tr><td>Study program:</td><td><select name="studyProgramId" value={this.state.student.studyProgramId} onChange={this.handleChange}>{studyPrograms}</select></td></tr>
                <tr><td /><td><Button type="submit" bsStyle="success">Edit the student</Button> </td></tr>
                </tbody>
            </Table>:""}
            </form>
            </Grid>
        );

    }

}


export default editStudentDetails;