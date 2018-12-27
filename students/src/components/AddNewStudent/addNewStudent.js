import React from "react"
import {Link, Redirect} from 'react-router-dom';
import {checkStatus, postNewStudent} from "../../repository/studentRepository";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/es/Button";
import Grid from "react-bootstrap/es/Grid";
import Alert from "react-bootstrap/es/Alert";
import {listStudyPrograms} from "../../repository/studyProgramRepository";

class addNewStudent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            redirectTo:null,
            student: {
                name:"",
                lastName:"",
                index:"",
                studyProgramId:""
            },
            message:"",
            studyPrograms:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
        handleChange(event){
            const newStudent = this.state.student;
            newStudent[event.target.name] = event.target.value;
            this.setState({
                student: newStudent
            });
        }
        handleSubmit(event){
            event.preventDefault();
            postNewStudent(this.state.student)
                .then(checkStatus)
                .then((res)=>{
                        this.props.finish();
                        this.setState({redirectTo: "/"});

                }).catch(error=>
                this.setState({
                    message: <Alert bsStyle="warning">{error.message}</Alert>
                }))


        }
        componentDidMount(){
            listStudyPrograms()
                .then(function(res){return res.json()})
                .then((res)=>{
                    let updatedStudent = this.state.student;
                    updatedStudent.studyProgramId = res[0].id;
                    this.setState({studyPrograms:res, student:updatedStudent});

                });
        }

    render() {
        let redirect ="";
        if(this.state.redirectTo != null)
            redirect =  <Redirect to={{ pathname: this.state.redirectTo }} />;
        let message  = <span>{this.state.message}</span>;
        let studyPrograms = this.state.studyPrograms.map(a=> <option value={a.id}>{a.name}</option>);
            return (
                <Grid><Link to="/"><Button bsStyle="info">Back to the list</Button></Link>
                    {redirect}
                    {message}
            <form onSubmit={this.handleSubmit} >
                <Table responsive striped bordered condensed >

                    <tbody>
                    <tr><td>Name:</td><td><input type="text" name="name" value={this.state.student.name} onChange={this.handleChange}/></td></tr>
                    <tr><td>Last name:</td><td><input type="text" name="lastName" value={this.state.student.lastName} onChange={this.handleChange}/></td></tr>
                    <tr><td>Index:</td><td><input type="text"  name="index" value={this.state.student.index} onChange={this.handleChange}/></td></tr>
                    <tr><td>Study Program:</td><td>
                        <select name="studyProgramId" value={this.state.student.studyProgramId} onChange={this.handleChange}>{studyPrograms}</select>

                    </td></tr>
                    <tr><td></td><td><Button type="submit" bsStyle="success">Add new student</Button> </td></tr>
                    </tbody>
                </Table>
            </form>
                </Grid>
        );
    }

}

export default addNewStudent;